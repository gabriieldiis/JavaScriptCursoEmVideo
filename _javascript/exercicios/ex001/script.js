function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')        
    var data = new Date()
    var hora = data.getHours()
    // var hora = 09
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //Bom dia!
        foto.src = 'img/foto-manha.png'
        // msg.innerHTML = `<br> <p>Bom dia!</p>.`
        document.body.style.background = '#434630'

    }   else if (hora >= 12 && hora <= 18){
        //Boa tarde!
        foto.src = 'img/foto-tarde.png'
        // msg.innerHTML = `<br> <p>Boa tarde!</p>`
        document.body.style.background = '#fe9605'

    }   else    {
        // Boa noite
        foto.src = 'img/foto-noite.png'
        // msg.innerHTML = `<br> <p>Boa noite!<p>.`
        document.body.style.background = '#052346'

    }
}

