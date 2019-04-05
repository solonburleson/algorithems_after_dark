// This problem was asked by Amazon.

// Given an array of numbers, find the maximum sum of any contiguous subarray of the array.

// For example, given the array [34, -50, 42, 14, -5, 86], the maximum sum would be 137, since we would take elements 42, 14, -5, and 86.

// Given the array [-5, -1, -8, -9], the maximum sum would be 0, since we would not take any elements.

// Do this in O(N) time.

function subArray(arr){
	var sum = 0;
	var max = 0;
	for(var i = 0; i < arr.length; i++){
		if(sum <= 0){
			if(arr[i] > 0){
				sum = arr[i];
			}
		}
		else{
			sum += arr[i];
		}
		if(sum > max){
			max = sum;
		}
	}
	return max;
}

console.log(subArray([34, -50, 42, 14, -5, 86]))
console.log(subArray([-5, -1, -8, -9]))