let comboArea = document.querySelector('#comboArea');
let comboMes = document.querySelector('#comboMes');

sessionStorage.removeItem('funcao');
sessionStorage.removeItem('area');
sessionStorage.removeItem('comboMesValue');
sessionStorage.removeItem('mesTexto');


function constroiOptions(areas){
    areas.forEach(area => {
        comboArea.innerHTML += `<option value="${area.id}">${area.nome}</option>`;
    });
};

function dadoRelatorio() {
    let areaEscolhida = comboArea.value;

    sessionStorage.setItem('area', areaEscolhida);
    sessionStorage.setItem('funcao', '1');

    window.location = 'pdf/relatoriopdf.html'
}

let btnRelatorioAmbiente = document.querySelector('#btnRelatorioAmbiente');
btnRelatorioAmbiente.addEventListener('click', dadoRelatorio);

setTimeout(() => {
    constroiOptions(areas);
}, 3500);


function dadoRelatorioMes() {
    sessionStorage.area = comboArea.value;
    sessionStorage.setItem('comboMesValue', comboMes.value);
   
    let mesText = document.getElementById('comboMes');
    var text = mesText.options[mesText.selectedIndex].text;
    sessionStorage.setItem('mesTexto', text);
    sessionStorage.setItem('funcao', '2');

    window.location = 'pdf/relatoriopdf.html'
}

let brnRelatorioMes = document.querySelector('#brnRelatorioMes');
brnRelatorioMes.addEventListener('click', dadoRelatorioMes);


function dadoRelatorioEstacao() {
    sessionStorage.area = comboArea.value;
    sessionStorage.setItem('comboEstacaoValue', comboEstacao.value);
   
    let estacaoText = document.getElementById('comboEstacao');
    var text = estacaoText.options[estacaoText.selectedIndex].text;
    sessionStorage.setItem('estacaoTexto', text);
    sessionStorage.setItem('funcao', '3');

    window.location = 'pdf/relatoriopdf.html'
}

let btnRelatorioEstacao = document.querySelector('#btnRelatorioEstacao');
btnRelatorioEstacao.addEventListener('click', dadoRelatorioEstacao);