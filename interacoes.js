function clicou() {
    var ano = document.getElementById('anonascimento')
    var ano = Number(ano.value)
    var res = document.getElementById('tela')
    var anoatual = new Date()
    var anoatual = anoatual.getFullYear()
    var anoLimite = 1927 //1987
    
    if (ano !== "" && ano < anoatual && ano >= anoLimite && Number.isInteger(ano) && ano > 0) {


        var ano = ano - anoLimite

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
            case 11:
                var animal = "Tigre"
                break;

            default:
                var animal = "Resultado Inválido"
                break;
        }

        res.innerHTML = `O seu animal no horóscopo chines é: ${animal}`


    } else if (ano < anoLimite) {
        res.innerHTML = `Ano fora do limite estabelecido ${anoLimite}`
    } 
       else{
        res.innerHTML = "Digite um ano válido"
    }
}