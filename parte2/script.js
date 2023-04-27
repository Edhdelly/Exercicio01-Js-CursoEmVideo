function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName('Sexo')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = " um homem"
            if (idade >= 00 && idade < 10) {
                img.setAttribute('src', "img/homemcriança.jpg")
            } else if (idade < 21) {
                img.setAttribute('src', "img/homemadolescente.jpg")
            } else if (idade < 50) {
                img.setAttribute('src', "img/homemadulto.jpg")
            } else { img.setAttribute('src', "img/homemidoso.jpg") }

        } else if (fsex[1].checked) {
            genero = "uma mulher"
            if (idade >= 00 && idade < 12) {
                img.setAttribute('src', "img/mulhercriança.jpg")
            } else if (idade < 21) {
                img.setAttribute('src', "img/mulheradolescente.jpg")
            } else if (idade < 50) {
                img.setAttribute('src', "img/mulheradulta.jpg")
            } else { img.setAttribute('src', "img/mulheridosa.jpg") }
        }
        res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos de idade`
        res.appendChild(img)
    }

}