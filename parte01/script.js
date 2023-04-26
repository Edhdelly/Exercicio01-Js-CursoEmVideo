function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 06) {
        img.src = "img/boamadrugada.png"
        document.body.style.background = "#000000"
    } else if (hora <= 12) {
        img.src = "img/bomdia.png"
        document.body.style.background = "#FDE688"
    } else if (hora <= 18) {
        img.src = "img/boatarde.png"
        document.body.style.background = "#F1957C"
    } else {
        img.src = "img/boanoite.png"
        document.body.style.background = "#3174CC"
    }
}