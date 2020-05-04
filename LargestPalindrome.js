let  largestPalindrome = 0;
let secondNumber = 999;
for(i = 999; i > 99; i--) {
	for(j = secondNumber; j > 99; j--) {
		let product = i*j;
		let productString = ""+product;
		let productLength = productString.length;
		let reverseString ="";
		for(k = productLength-1; k >= 0; k--) {
			reverseString = reverseString + productString[k]
		}
		if (reverseString == product){
			if( product > largestPalindrome) {
				 largestPalindrome  = product;
			} 	
		}
	}
	 secondNumber = secondNumber - 1
}
console.log(largestPalindrome );