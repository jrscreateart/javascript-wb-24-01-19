 //Funções de montagem da calculadora

function meuVisor(valor){
	var visorAtual=document.getElementById("visor").value;
	var visorNovo=visorAtual+""+valor;
	document.getElementById("visor").value=visorNovo;
	}	
	
	/*
	Codigo para ativar a função de limpar
	*/
function limpaVisor(){
	document.getElementById("visor").value=""
	}
		
	/*
	Codigo para ativar a função de calcular
	*/
function calcular(){
	var visorAtual=document.getElementById("visor").value; 
	document.getElementById("visor").value=eval(visorAtual);
	}
	
		
                      //Observações
	//concatena(+)para juntar ou somar 
	
	//para transforma o objeto que é 
	
	//function tem que ter parentes() tendo ou não um valor
	
	/*
	(getElementsByName) épara fuxar informações do Name no HTML,  
	nesse caso usamos o getElementById, que separado get elemento by Id, 
	essa função faz com que puxe as informações que  do id, nesse caso colocamos no HTML
	o Id como (id="visor")
	*/
	