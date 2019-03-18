// Given an array of integers, find the first missing positive integer in linear time and constant space.
// In other words, find the lowest positive integer that does not exist in the array.
// The array can contain duplicates and negative numbers.
//Examples:
//[3,4,-1,1] --> Output: 2
//[1,2,0] --> Output: 3

function lowestInt(arr){
	var dict = {};
	for(var i =0; i < arr.length; i++){
		dict[arr[i]] = arr[i]
	}
	var temp = 1
	while(dict[temp] != null){
		temp ++;
	}
	return temp;
}