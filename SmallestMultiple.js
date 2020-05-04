const smallestMultiple = (x) => {

	for (i = 0; i>=0; i+=20) {  //incremented by 20 because the number can also be divided by 20
		let count =0;			// hence decreasing the time complexity.
		for(j=3;j<=x;j++){
			if (i%j ===0 && i!=0) {  // started from 3 because the smallest multiple is even for any 
				count = count + 1	 // consecutive numbers 
			}
		}
		if (count === x-2){   // -2 because we started from 3
			return i;
		}
		
	}
}

console.log(smallestMultiple(20));