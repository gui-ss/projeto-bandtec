var fcontext = document.getElementById("chart").getContext("2d");
	fcontext.canvas.width = 1000;
	fcontext.canvas.height = 350;
	
	var configuration = {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				label: "Umidade",
				type: 'line',
				borderColor: window.chartColors = "#0078d7",
			},
			{
				label: "Temperatura",
				type: 'line',
				borderColor: window.chartColors = "rgb(255,165,36)",
			}]
		},
		options: {
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero:true
					},
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Horário da Leitura'
					}
				}],
				yAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'Temperature'
					},
					ticks: {
						beginAtZero:true
					}
				}]
			},
			animation: {
				duration: 0
			}
		}
	};
	
	var dm_configuration = {
		type: 'line',
		data: {
			datasets: [{
				label: "Umidade",
				type: 'line',
				borderColor: window.chartColors = "#0078d7",
			},
			{
				label: "Temperatura",
				type: 'line',
				borderColor: window.chartColors = "rgb(255,165,36)",
			}]
		},
		options: {
			legend: {
				labels: {
					fontColor: 'white'
				}
			},
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: 'white'
					},
					gridLines: {
						color: 'rgb(85, 85, 85)'
					},
					scaleLabel: {
						display: true,
						labelString: 'Horário da Leitura',
						fontColor: '#e3e3e3'
					}
				}],
				yAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'Temperature',
						fontColor: 'white'
					},
					ticks: {
						beginAtZero:true,
						fontColor: 'white'
					},
					gridLines: {
						color: 'rgb(85, 85, 85)'
					}
				}]
			},
			animation: {
				duration: 0
			},
		}
	};
	
	var chart = new Chart(fcontext, configuration);

	let lb_switch = document.getElementById("labelSwitch");

	lb_switch.addEventListener('click', function () {
		let bdClass = document.body.getAttribute('class');

		if(bdClass == 'darkMode') {
			chart.destroy();
			chart = new Chart(fcontext, dm_configuration);
		}
		else {
			chart.destroy();
			chart = new Chart(fcontext, configuration);
		}
	});

	//Função para obter os dados de temperatura do server
	//Seria mais interessante fazer isso com WebSocket, porém para fins academicos, os dados serão atualizados via HTTP
	
	//Esse atributo dentro do contexto serve para saber qual foi o último índice processado, assim eliminado os outros elementos na
	//hora de montar/atualizar o gráfico
	this.lastIndexTemp = 0;
	this.time = 0;

	function get_data(){

		var date = new Date();
		var hour = date.getHours();
		var minute = date.getMinutes();
		var seconds = date.getSeconds();
		var getDataTime = `${hour>9?'':'0'}${hour}:${minute>9?'':'0'}${minute}:${seconds>9?'':'0'}${seconds}`;

		var http = new XMLHttpRequest();
		http.open('GET', 'http://localhost:3000/api', false);
		http.send(null);        
		
		var obj = JSON.parse(http.responseText);
		if (obj.data.length == 0){
			return;
		}

		var _lastIndexTemp = this.lastIndexTemp;
		this.lastIndexTemp = obj.data.length;
		listTemp = obj.data.slice(_lastIndexTemp);

		listTemp.forEach(data => {
			//Máximo de 60 itens exibidos no gráfico
			if (chart.data.labels.length == 10 && chart.data.datasets[0].data.length == 10){
				chart.data.labels.shift();
				chart.data.datasets[0].data.shift();
				chart.data.datasets[1].data.shift();
			}

			chart.data.labels.push(getDataTime);
			chart.data.datasets[0].data.push(parseFloat(data[0]));
			chart.data.datasets[1].data.push(parseFloat(data[1]));
			chart.update();
		});
		
		document.getElementById('average').textContent = obj.average;
		document.getElementById('averageHour').textContent = obj.averageHour;
	} 
	
	get_data();

	setInterval(() => {
		get_data();
	}, 1000);
