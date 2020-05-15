

function calculoImc(){
	var formulario=document.getElementById("formulario").value;
	var peso=document.getElementById("peso").valor;
	var altura= document.getElementById("altura").valor;
	var imc = peso/(altura*altura);
}
