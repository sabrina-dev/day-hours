function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = 19
  msg.innerHTML= `agora sao ${hora} Horas.`
  if (hora >= 0 && hora < 12){
    //bom dia
    img.src = 'manha.png'
    document.body.style.background = '#7ac6fb'

  }else if(hora >= 12 && hora < 18){
//boa tarde
    img.src = 'tarde.png'
    document.body.style.background = '#f7998b'
  }else {
//boa noite
    img.src = 'noite.png'
    document.body.style.background = '#011e40'
  }

  }


