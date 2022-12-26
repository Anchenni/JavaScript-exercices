// Recursion exercices 

function reverseword(mystr){
	if (mystr == ""){
		return "";
	}else {
		return reverseword(mystr.substring(1)) + mystr[0]; 
	}
}

console.log(reverseword("anwar"))