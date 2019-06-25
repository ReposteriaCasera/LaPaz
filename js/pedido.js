var producto = document.getElementById('producto')
var fecha = document.getElementById('fecha')
var hora = document.getElementById('hora')
var pago = document.getElementById('pago')
var btn = document.getElementById('btn-send')

// 59172589488
// var phone = '59168152654'
var phone = '59172589488'
var text = 'Hola, quiero'


function validar() {
	if (producto.value.length > 0 && fecha.value.length > 0
		&& hora.value.length > 0 && pago.value.length > 0) {
		text += '%20' + producto.value + '%20para%20' + fecha.value +'%20a%20las%20' + hora.value +'%20el%20pago%20sera%20en%20' + pago.value
		var url = 'https://api.whatsapp.com/send?phone=' + phone + '&text=' + text
		btn.href = url
		alert('Pedido Exitoso')
		return true
	} else {
		alert('Llena bien los datos')
		return false;
	}
}