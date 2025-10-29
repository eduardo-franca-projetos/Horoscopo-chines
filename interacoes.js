function clicou() {
    var ano = document.getElementById('anonascimento')
    var ano = Number(ano.value)
    var res = document.getElementById('tela')
    var anoatual = new Date()
    var anoatual = anoatual.getFullYear()
    if (ano < 1987 || ano == "" || ano > anoatual) {
        res.innerHTML = "Digite um ano válido"
    } else {
        var ano = ano - 1987
        while (ano > 11) {
            var ano = ano - 12
        }
        switch (ano) {
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
            default:
                //11
                var animal = "Tigre"
                break;
        }
    res.innerHTML = `O seu animal no horóscopo chines é: ${animal}`
    }
}