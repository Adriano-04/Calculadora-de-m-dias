const form = document.getElementById('form-atividades');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji celebrando" />'
const ativadade = []
const nota = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Qual é a nota minima:'))

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinhas();
    atualizarTabela();
    atualizarMedia();

})

function adicionarLinhas() {
    const nomeAtividade = document.getElementById('Atividade');
    const notaAtividade = document.getElementById('Nota');

    if (ativadade.includes(nomeAtividade.value)) {
        alert('Essa atividade já foi adicionada')
    }
    else {
        ativadade.push(nomeAtividade.value);
        nota.push(parseFloat(notaAtividade.value));

        let linha = ''
        linha += '<tr>'
        linha += `<td>${nomeAtividade.value}</td>`
        linha += `<td>${notaAtividade.value}</td>`
        linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }`
        linha += '</tr>'

        linhas += linha;


        nomeAtividade.value = ''
        notaAtividade.value = ''
        }
}

function atualizarTabela() {
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;
}

function atualizarMedia() {
    const mediaFinal = calculoMedias();

    document.getElementById('mostrar-nota').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('aprovacao').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}


function calculoMedias() {
    let soma = 0;

    for (let i = 0; i < nota.length; i++) {
        soma += nota[i];
    }

    return media = soma / nota.length
}