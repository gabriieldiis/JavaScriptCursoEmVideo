function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO | Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano  - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src' , 'img/crianca-menino.jpg')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovem-menino.jpg')
            } else if (idade < 50){
                // adulto   
                img.setAttribute('src', 'img/adulto-homem.jpg')
            } else {
                //idoso 
                img.setAttribute('src' , 'img/idoso-homem.jpg')
            }

            
        }
        if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <=10  ){
                img.setAttribute('src' , 'img/crianca.menina.jpg')
            } else if(idade < 21 ){
                img.setAttribute('src' , 'img/jovem-menina.jpg')
            } else if(idade < 50){
                img.setAttribute('src' , 'adulto-mulher.jpg')
            }else{
                img.setAttribute('src' , 'img/idoso-mulher.jpg')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)
    }
}