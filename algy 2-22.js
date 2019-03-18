// This problem was asked by Airbnb.

// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?

// [1,5,1,5]

5 = arr[i], 5 = arr[arr.length - (1+i)]


var max = 0;
for(var i = 0; i < arr.length; i+2){
	if(arr[i+1] == arr[arr.length - (1+i)]){
		max += arr[i]
		max += arr[arr.length - (1+i)]
	}

}

