var phone = '59168152654'
var text = 'Hola,%20requiero%20de%20sus%20servicios'
var url = 'https://api.whatsapp.com/send?phone=' + phone + '&text=' + text

var whatsapp = document.getElementById('msg-whatsapp')
whatsapp.href = url