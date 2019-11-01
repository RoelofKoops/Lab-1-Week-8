//parceInt
var naam;
var leeftijd;

while(naam !='stop'){
naam =prompt('Vul hier je naam in')
	if (naam !='stop'){
		leeftijd =prompt('vul hier je leeftijd in (in cijfers)')
		zin(naam, leeftijd);
	}
}
function zin (naam, leeftijd){
	document.write('Jou naam is ' + naam + ' en je bent ' + leeftijd + ' jaar <br>')
}






