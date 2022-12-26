var myStr = "ana";

function isPlindrome(myStr){
	if (myStr.length == 0 || myStr.length == 1){
		return true;
	}
	if (myStr[0] == myStr[myStr.length - 1] ){
		return isPlindrome(myStr.substring(1, myStr.length - 1));
	}
	// [k,a,y,a,k]
	return false;

}
console.log(isPlindrome(myStr));