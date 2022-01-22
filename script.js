function carregar() {
    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas`
    if (hora >= 5 && hora <= 12){
        // dia
        imagem.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora > 12 && hora <= 18) {
        // tarde
        imagem.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else{
        // noite
        imagem.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}
