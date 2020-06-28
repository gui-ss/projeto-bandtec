let dia = new Date().getDate();
let mes = new Date().getMonth() + 1;
let ano = new Date().getFullYear();

let horaa = new Date().getHours();
let minuto = new Date().getMinutes();
let segundo = new Date().getSeconds();


let a = 1;
let dadosTable = JSON.parse(sessionStorage.jsonRelatorio);

let area_relatorio = document.querySelector("#area-relatorio");
function teste() {
    selectDadosRelatorio(a);
    console.log(dadosTable)
    let contador = 0;

    for (let i = 0; i <= parseInt(dadosTable.length / 17); i++) {
        area_relatorio.innerHTML += `
        <div class="folha">
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
            let data = new Date(dadosTable[contador].dataLeitura);
            let dataLeitura = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
            let horaLeitura = `${data.getHours()}h${data.getMinutes()}m${data.getSeconds()}s`;

            table.innerHTML += ` 
            <tr>
                <td>${dataLeitura} ${horaLeitura}</th>
                <td>${dadosTable[contador].umidade}%</th>
                <td>${dadosTable[contador].temperatura} °C</th>
            </tr>
            `;
            contador++;
        }
        if(i == 0){
            let somaTemp = 0;
            let somaUmidade = 0;
            for (let c = 0; c <= dadosTable.length; c++) {
                somaTemp += dadosTable[i].temperatura;
                somaUmidade += dadosTable[i].umidade;
            }
            geral.innerHTML = `
            <h2>Média total</h2><br>
            <label>Temperatura: ${(somaTemp/dadosTable.length).toFixed(2)}°C</label> <br><br>
            <label>Humidade: ${(somaUmidade/dadosTable.length).toFixed(2)}%</label><br><br>
            `;
        }
    }
};

function relatorioMes(){
    selectDadosRelatorio(a);
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
    for (let i = 0; i <= parseInt(dadosMes.length / 17); i++) {
        area_relatorio.innerHTML += `
        <div class="folha">
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
            let data = new Date(dadosMes[contador].dataLeitura);
            let dataLeitura = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
            let horaLeitura = `${data.getHours()}h${data.getMinutes()}m${data.getSeconds()}s`;

            table.innerHTML += ` 
            <tr>
                <td>${dataLeitura} ${horaLeitura}</th>
                <td>${dadosMes[contador].umidade}%</th>
                <td>${dadosMes[contador].temperatura} °C</th>
            </tr>
            `;
            contador++;
        }
        if(i == 0){
            let somaTemp = 0;
            let somaUmidade = 0;
            let textoMes = sessionStorage.mesTexto;
            for (let c = 0; c <= dadosMes.length; c++) {
                somaTemp += dadosMes[i].temperatura;
                somaUmidade += dadosMes[i].umidade;
            }
            geral.innerHTML = `
            <h2>Média total do mês de ${textoMes}</h2><br>
            <label>Temperatura: ${(somaTemp/dadosMes.length).toFixed(2)}°C</label> <br><br>
            <label>Humidade: ${(somaUmidade/dadosMes.length).toFixed(2)}%</label><br><br>
            `;
        }
    }
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
    funcao3();
    break;
  default:
    console.log('foi');
}

