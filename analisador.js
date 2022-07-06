const fs = require('fs');


function lerLetraDeArquivo(nomeDoArquivo){
    const data = fs.readFileSync(nomeDoArquivo, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }
        return data;
    });
    return data;
}

function preProcessar(letra){
    let letraProcessada = letra.replaceAll(',', '');  // remover virgulas
    letraProcessada = letraProcessada.replaceAll('\n', ' ');  // remover virgulas
    letraProcessada = letraProcessada.toLowerCase();
    return letraProcessada;
}

function contarOcorrenciasDePalavras(letra){
    let dicionario = {};
    let palavras = letra.split(' ');
    palavras.forEach((palavra) => {
        if(palavra in dicionario){
            dicionario[palavra]++;
        }
        else{
            dicionario[palavra] = 1;
        }
    })
    return dicionario;
}

function analisarLetra(nomeDoArquivo){
    let letra = lerLetraDeArquivo(nomeDoArquivo);
    let letraProcessada = preProcessar(letra);
    let dicionario = contarOcorrenciasDePalavras(letraProcessada);
    console.log(dicionario);
}

analisarLetra('data/jitensha.txt');