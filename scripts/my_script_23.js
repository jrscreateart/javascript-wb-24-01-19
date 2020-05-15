function contarCaracteres(texto,limite, myId){
var textoLimite;
var resto=limite - texto.length;
document.getElementById("avisoresto").innerHTML= "Restam "+resto+" caracteres";
	if(texto.length>limite){
		document.getElementById("avisoresto").innerHTML="Limite atingido!";
		textoLimite=document.getElementById(myId).value.substr(0,limite);
		document.getElementById(myId).value=textoLimite;
	}
}

/* getElememtByld é um metodo de que retorna a referencia do elemento na DOM atravez do ID*/

/*Elemento: é uma referencia a um obejto Element ou null se um elemento com o ID especificado não estiver contido nesse documento*/

/*id é um string que diferencia maiúsculas e minúsculas representado o ID unico do elemento sendo procurado*/

//start é o local a posição

/*myId= que coloca o texto mais dinamico, assim os codigos ficaram para as duas caixas de texto, se caso for uma caixa de texto no lugar 
do myId, coloca o nome colocado no id.*/