// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

function coupleSum(arr,k){
	var dict = {}
	for(var i =0; i < arr.length; i++){
		if(dict[k-arr[i]] == null){
			dict[arr[i]] = 0;
		}
		else{
			console.log(true)
			return true;
		}
	}
	console.log(false)
	return false;
}
coupleSum([10,15,3,7],17)