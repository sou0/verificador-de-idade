function verificar() {
    ano = document.getElementById('ano').value
    genr = document.querySelector('input[name="sexo"]:checked').value
    res = document.getElementById('res')
    img = document.getElementById('img')

    idade=2024-ano

    if(genr=='homem'&& idade<=13){
        res.innerText=`identificamos que é um menino de ${idade} anos`
        document.getElementById('img').src='menino.webp'
        img.style.height='300px'
        img.style.borderRadius ='100%'
    }

    else if(genr=='homem'&& idade>14 && idade<19){
        res.innerText=`identificamos que é um adolescente de ${idade} anos`
        document.getElementById('img').src='adolescente.jpg'
        img.style.height='300px'
        img.style.width='300px'
        img.style.borderRadius ='100%'
    }

    else if(genr=='homem'&& idade>=19 && idade<26){
        res.innerText=`identificamos que é um homem jovem adulto de ${idade} anos`
        document.getElementById('img').src='hjadulto.png'
        img.style.height='300px'
        img.style.width='300px'
        img.style.borderRadius ='100%'
    }

    else if(genr=='homem'&& idade>=26 && idade<55){
        res.innerText=`identificamos que é um homem adulto de ${idade} anos`
        document.getElementById('img').src='hadulto.webp'
        img.style.height='300px'
        img.style.width='300px'
        img.style.borderRadius ='100%'
    }

    else if(genr=='homem'&& idade>=55){
        res.innerText=`identificamos que é um senhor de ${idade} anos`
        document.getElementById('img').src='senhor.jpg'
        img.style.height='300px'
        img.style.width='300px'
        img.style.borderRadius ='100%'
    }

    else if(genr=='mulher'&& idade<=13){
        res.innerText=`identificamos que é uma menina de ${idade} anos`
        document.getElementById('img').src='menina.jpg'
        img.style.height='300px'
        img.style.borderRadius ='100%'
    }

    else if(genr=='mulher'&& idade>14 && idade<19){
        res.innerText=`identificamos que é uma adolescente de ${idade} anos`
        document.getElementById('img').src='adolescentefem.jpg'
        img.style.height='300px'
        img.style.width='300px'
        img.style.borderRadius ='100%'
    }

    else if(genr=='mulher'&& idade>=19 && idade<26){
        res.innerText=`identificamos que é uma jovem mulher adulta de ${idade} anos`
        document.getElementById('img').src='mjadulta.png'
        img.style.height='300px'
        img.style.width='300px'
        img.style.borderRadius ='100%'
    }

    else if(genr=='mulher'&& idade>=26 && idade<55){
        res.innerText=`identificamos que é um mulher adulto de ${idade} anos`
        document.getElementById('img').src='madulta.png'
        img.style.height='300px'
        img.style.width='300px'
        img.style.borderRadius ='100%'
    }

    else if(genr=='mulher'&& idade>=55){
        res.innerText=`identificamos que é um senhora de ${idade} anos`
        document.getElementById('img').src='senhora.webp'
        img.style.height='300px'
        img.style.width='300px'
        img.style.borderRadius ='100%'
    }

    


}

