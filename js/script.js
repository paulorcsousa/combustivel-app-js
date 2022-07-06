function combustivel(){
//    declaração de variável 
    var gasolina    = document.getElementById('gasolina').value;
    var etanol      = document.getElementById('etanol').value;
    var result      = document.getElementById('result');
    
    gasolina        = gasolina.replace(',','.');
    etanol          = etanol.replace(',','.');
    var maisBarato  = etanol/gasolina;

    // Algoritmo
    if (gasolina != '' && etanol != ''){
        if (maisBarato >= 0.7) {
            result.innerHTML = 'Gasolina é a melhor opção para abastecimento';
        } 
        else{
            result.innerHTML = 'Etanol é a melhor opção para abastecimento';
        }
    }
    else {
        alert('preencha todos os campos!');
    }
}

function verificarInput(event) {
    var letra = event.key;

    if (letra != 0 && letra != 1 && letra != 2 && letra != 3 && letra != 4 && letra != 5 && letra != 6 && letra != 7 && letra != 8 && letra != 9 && letra != ',' && letra != '.' && letra != 'Tab' && letra != 'Enter' && letra != 'Backspace' && letra != 'Delete' && letra != 'ArrowLeft' && letra != 'ArrowRight') {
        alert('Caractere inválido');
        document.getElementById('gasolina').value = '';
        document.getElementById('etanol').value = '';
    }
}

