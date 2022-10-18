function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') 
    var res = document.querySelector('div#res')
    if (fano.value.length == 1 || fano.value > ano) {
        window.alert('[ERRO] Verifique os seus dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'criança2.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem1m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'AdultoM.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso1.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'criança1f.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem2f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'Adultof.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso2f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}