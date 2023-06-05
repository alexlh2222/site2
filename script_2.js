function verificar() {
    var data = new Date()
        var ano = data.getFullYear()
        var fano = document.getElementById('txtano')
        var res = document.querySelector('div#res')
        if(fano.value.length == 0 || Number(fano.value) > ano) {
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else {
            var fsex= document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
           // res.innerHTML = `Idade calculada ${idade}  `
            var gênero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                gênero = 'Homem' 
                if(idade >=0 && idade < 16){
                    //Criança
                    img.setAttribute('src', 'menino.png')
                } else if (idade <30){
                // Jovem
                img.setAttribute('src', 'adulto.png')
            }else if (idade <50){
                //Adulto
                img.setAttribute('src', 'adulto.png')
            }else {
                // Idoso
                img.setAttribute('src', 'velho.png')
            }
            } else if (fsex[1].checked){
                gênero = 'Mulher'
                if(idade >=0 && idade < 16){
                    //Criança
                    img.setAttribute('src', 'menina.png')
                } else if (idade <30){
                // Jovem
                img.setAttribute('src', 'milf.png')
            }else if (idade <50){
                //Adulto
                img.setAttribute('src', 'milf.png')
            }else {
                // Idoso
                img.setAttribute('src', 'velha.png')
            }
            }
            res.style.textAlign= 'center'
            res.innerHTML = `Detectamos ${gênero} como ${idade} anos.`
            res.appendChild(img)
        }
     
}