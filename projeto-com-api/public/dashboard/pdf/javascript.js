let dia = new Date().getDate();
let mes = new Date().getMonth() + 1;
let ano = new Date().getFullYear();

let horaa = new Date().getHours();
let minuto = new Date().getMinutes();
let segundo = new Date().getSeconds();

let dadosTable = [];

let area_relatorio = document.querySelector("#area-relatorio");
function teste() {
    selectDadosRelatorio();
    dadosTable = JSON.parse(sessionStorage.jsonRelatorio);
    
    let dadosArea = [];

    let areaEscolhida = sessionStorage.area;
    

    dadosTable.forEach(dado => {
        if(dado.fkArea == areaEscolhida) {
            dadosArea.push(dado);
        }
    });

    let contador = 0;

    for (let i = 0; i <= parseInt(dadosArea.length / 14); i++) {
        area_relatorio.innerHTML += `
        <div class="folha">
        <div class="marcador" style="background: #00d0ef;"></div>
            <div class="cabecalho">
                <div>
                    <img src="../img/logos/logo-dark.png">
                </div>
                <div class="data">
                    <label id="data">Data: ${dia}/${mes}/${ano}</label>
                    <label id="hora">Hora: ${horaa}:${minuto}:${segundo}</label>
                </div>
            </div>
            <div class="corpo" id="corpo">
                <div id="geral"></div>
                <h2>Lista de dados do ambiente</h2>
                <br>
                <table style="width:100%" id="table${i}">
                    <tr>
                    <th>data de Leitura</th>
                    <th>Umidade</th>
                    <th>Temperatura</th>
                    </tr>
                </table >
                
            </div >
                <div class="cabecalho">
                    <div>
                        <img src="../img/logos/logo-dark.png">
                    </div>
                    <div class="data">
                        <label>Página ${i + 1}</label>
                    </div>
                </div>
        </div>`;

        let table = document.querySelector(`#table${i}`);

        for (let j = 0; j < 14; j++) {
            if(dadosArea[contador] != undefined) {
                let data = new Date(dadosArea[contador].dataLeitura);
                data.setHours(data.getHours() + 3);
                let dataLeitura = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
                let horaLeitura = `${data.getHours()}h${data.getMinutes()}m${data.getSeconds()}s`;

                table.innerHTML += ` 
                <tr>
                    <td>${dataLeitura} ${horaLeitura}</th>
                    <td>${dadosArea[contador].umidade}%</th>
                    <td>${dadosArea[contador].temperatura} °C</th>
                </tr>
            `;
            }
            contador++;
        }
        
        if(i == 0){
            let somaTemp = 0;
            let somaUmidade = 0;
            for (let c = 0; c < dadosArea.length; c++) {
                if(dadosArea[c] != undefined) {
                    somaTemp += dadosArea[c].temperatura;
                    somaUmidade += dadosArea[c].umidade; 
                }  
            }
            

            geral.innerHTML = `
            <h2>Média total da Área</h2><br>
            <label>Temperatura: ${(somaTemp/dadosArea.length).toFixed(2)}°C</label> <br><br>
            <label>Humidade: ${(somaUmidade/dadosArea.length).toFixed(2)}%</label><br><br>
            `;
        }
    }
};

function relatorioMes(){
    selectDadosRelatorio();
    dadosTable = JSON.parse(sessionStorage.jsonRelatorio);

    let contador = 0;
    let param = sessionStorage.comboMesValue;
    let dadosMes = [];
    for (let i = 0; i < dadosTable.length; i++) {
        let data = new Date(dadosTable[i].dataLeitura);
        let mes = data.getMonth() + 1;
        if(mes == param){
            dadosMes.push(dadosTable[i]);
        }
    }
    console.log(dadosMes);
    for (let i = 0; i <= parseInt(dadosMes.length / 14); i++) {
        area_relatorio.innerHTML += `
        <div class="folha">
        <div class="marcador" style="background: #ce0c5c;"></div>
            <div class="cabecalho">
                <div>
                    <img src="../img/logos/logo-dark.png">
                </div>
                <div class="data">
                    <label id="data">Data: ${dia}/${mes}/${ano}</label>
                    <label id="hora">Hora: ${horaa}:${minuto}:${segundo}</label>
                </div>
            </div>
            <div class="corpo" id="corpo">
                <div id="geral"></div>
                <h2>Lista de dados do ambiente</h2>
                <br>
                <table style="width:100%" id="table${i}">
                    <tr>
                    <th>Ambiente</th>
                    <th>data de Leitura</th>
                    <th>Umidade</th>
                    <th>Temperatura</th>
                    </tr>
                </table >
                
            </div >
                <div class="cabecalho">
                    <div>
                        <img src="../img/logos/logo-dark.png">
                    </div>
                    <div class="data">
                        <label>Página ${i + 1}</label>
                    </div>
                </div>
        </div>`;

        let table = document.querySelector(`#table${i}`);

        for (let j = 0; j < 14; j++) {
            if(dadosMes[contador] != undefined) {
                let data = new Date(dadosMes[contador].dataLeitura);
                data.setHours(data.getHours() + 3);
                let dataLeitura = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
                let horaLeitura = `${data.getHours()}h${data.getMinutes()}m${data.getSeconds()}s`;

                table.innerHTML += ` 
                <tr>
                    <td>${dadosMes[contador].fkArea}</th>
                    <td>${dataLeitura} ${horaLeitura}</th>
                    <td>${dadosMes[contador].umidade}%</th>
                    <td>${dadosMes[contador].temperatura} °C</th>
                </tr>
                `;
            }
            contador++;
        }
        if(i == 0){
            let somaTemp = 0;
            let somaUmidade = 0;
            let textoMes = sessionStorage.mesTexto;
            for (let c = 0; c <= dadosMes.length; c++) {
               if(dadosMes[c] != undefined) {
                    somaTemp += dadosMes[c].temperatura;
                    somaUmidade += dadosMes[c].umidade;
               }
            }
            geral.innerHTML = `
            <h2>Média total do mês de ${textoMes}</h2><br>
            <label>Temperatura: ${(somaTemp/dadosMes.length).toFixed(2)}°C</label> <br><br>
            <label>Humidade: ${(somaUmidade/dadosMes.length).toFixed(2)}%</label><br><br>
            `;
        }
    }
    console.log(contador);
    
};


function relatorioEstacao(){
    selectDadosRelatorio();
    dadosTable = JSON.parse(sessionStorage.jsonRelatorio);

    let contador = 0;
    let param = sessionStorage.comboEstacaoValue;
    let dadosEstacao = [];
    for (let i = 0; i < dadosTable.length; i++) {
        let data = new Date(dadosTable[i].dataLeitura);
        let mes = data.getMonth() + 1;
        let dia = data.getDay();
        if(param == 1){
            if((mes>=3) && (mes<=6)){
               dadosEstacao.push(dadosTable[i]); 
            }
        } else if (param == 2){
            if((mes>6) && (mes<=9)){
                dadosEstacao.push(dadosTable[i]); 
            }
        } else if (param == 3){
            if((mes>9) && (mes<=12)){
                dadosEstacao.push(dadosTable[i]); 
            }
        } else if (param == 4){
            if((mes>=1) && (mes<=2)){
                dadosEstacao.push(dadosTable[i]); 
            }
        }
    }

    for (let i = 0; i <= parseInt(dadosEstacao.length / 14); i++) {
        area_relatorio.innerHTML += `
        <div class="folha">
        <div class="marcador" style="background: #a1d62f;"></div>
            <div class="cabecalho">
                <div>
                    <img src="../img/logos/logo-dark.png">
                </div>
                <div class="data">
                    <label id="data">Data: ${dia}/${mes}/${ano}</label>
                    <label id="hora">Hora: ${horaa}:${minuto}:${segundo}</label>
                </div>
            </div>
            <div class="corpo" id="corpo">
                <div id="geral"></div>
                <h2>Lista de dados do ambiente</h2>
                <br>
                <table style="width:100%" id="table${i}">
                    <tr>
                    <th>Ambiente</th>
                    <th>data de Leitura</th>
                    <th>Umidade</th>
                    <th>Temperatura</th>
                    </tr>
                </table >
                
            </div >
                <div class="cabecalho">
                    <div>
                        <img src="../img/logos/logo-dark.png">
                    </div>
                    <div class="data">
                        <label>Página ${i + 1}</label>
                    </div>
                </div>
        </div>`;

        let table = document.querySelector(`#table${i}`);

        for (let j = 0; j < 14; j++) {
            if(dadosEstacao[contador] != undefined) {
                let data = new Date(dadosEstacao[contador].dataLeitura);
                data.setHours(data.getHours() + 3);
                let dataLeitura = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
                let horaLeitura = `${data.getHours()}h${data.getMinutes()}m${data.getSeconds()}s`;

                table.innerHTML += ` 
                <tr>
                    <td>${dadosEstacao[contador].fkArea}</th>
                    <td>${dataLeitura} ${horaLeitura}</th>
                    <td>${dadosEstacao[contador].umidade}%</th>
                    <td>${dadosEstacao[contador].temperatura} °C</th>
                </tr>
                `;
            }
            contador++;
        }
        if(i == 0){
            let somaTemp = 0;
            let somaUmidade = 0;
            let textoEstacao = sessionStorage.estacaoTexto;
            for (let c = 0; c <= dadosEstacao.length; c++) {
               if(dadosEstacao[c] != undefined) {
                    somaTemp += dadosEstacao[c].temperatura;
                    somaUmidade += dadosEstacao[c].umidade;
               }
            }
            geral.innerHTML = `
            <h2>Média total da estação ${textoEstacao}</h2><br>
            <label>Temperatura: ${(somaTemp/dadosEstacao.length).toFixed(2)}°C</label> <br><br>
            <label>Humidade: ${(somaUmidade/dadosEstacao.length).toFixed(2)}%</label><br><br>
            `;
        }
    }
    console.log(contador);
    
};



const expr = sessionStorage.funcao;
switch (expr) {
  case '1':
    teste();
    break;
  case '2':
    relatorioMes();
    break;
  case '3':
    relatorioEstacao();
    break;
  default:
    console.log('foi');
}