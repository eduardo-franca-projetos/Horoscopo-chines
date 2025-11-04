function calcularAnimal(anoInserido) {
    var res = document.getElementById('tela')

    while (anoInserido > 11) {
        anoInserido = anoInserido - 12
    }
    switch (anoInserido) {

        case 0:
            var animal = "Coelho"
            break;
        case 1:
            var animal = "Dragão"
            break;
        case 2:
            var animal = "Serpente"
            break;
        case 3:
            var animal = "Cavalo"
            break;
        case 4:
            var animal = "Cabra"
            break;
        case 5:
            var animal = "Macaco"
            break;
        case 6:
            var animal = "Galo"
            break;
        case 7:
            var animal = "Cão"
            break;
        case 8:
            var animal = "Porco"
            break;
        case 9:
            var animal = "Rato"
            break;
        case 10:
            var animal = "Boi"
            break;
        case 11:
            var animal = "Tigre"
            break;

        default:
            var animal = "Resultado Inválido"
            break;

    }
    res.innerHTML = `Seu animal do Horóscopo zodíaco chinês é ${animal}!`;
}
function clicou() {
    var ano = document.getElementById('anonascimento')
    var ano = Number(ano.value)
    var res = document.getElementById('tela')
    var anoatual = new Date()
    var anoatual = anoatual.getFullYear()
    var anoLimite = 1927 //1987

    if (ano < 1927) {
        res.innerHTML = `Insira um ano maior ou igual a 1927`
    } else if (ano > anoatual) {
        res.innerHTML = `Insira um ano igual ou inferior a ${anoatual}`
    } else if (!Number.isInteger(ano)) {
        res.innerHTML = `Insira um número inteiro`
    } else if (Number.isInteger(ano) || ano >= 1927 && ano <= anoatual) {
        var ano = ano - anoLimite
        calcularAnimal(ano);
    }
}