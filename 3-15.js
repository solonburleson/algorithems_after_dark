// This problem was asked by Facebook.

// You are given an array of non-negative integers that represents a two-dimensional elevation map where each element is unit-width wall and the integer is the height. Suppose it will rain and all spots between two walls get filled up.

// Compute how many units of water remain trapped on the map in O(N) time and O(1) space.

// For example, given the input [2, 1, 2], we can hold 1 unit of water in the middle.

// Given the input [3, 0, 1, 3, 0, 5], we can hold 3 units in the first index, 2 in the second, and 3 in the fourth index (we cannot hold 5 since it would run off to the left), so we can trap 8 units of water.

function comPool(arr){
	var left_wall = arr[0];
	var right_wall = 0;
    var spaces = 0;
	var space_total = 0;
    var bowl = 0;
    var total_units = 0;
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > right_wall){
          right_wall = arr[i];
          console.log(i+"-->new right wall ="+right_wall)
		}
        if(arr[i-1] != left_wall){
          space_total += arr[i-1];
          spaces ++;
        }
		//math to grab units and depth goes here.
        if(left_wall > 0 && right_wall > 0){
          bowl = Math.min(left_wall,right_wall);
        }
        
		if(right_wall >= left_wall){
			left_wall = right_wall;
			right_wall = 0;
            total_units += (bowl * spaces)-space_total
            spaces = 0;
            space_total = 0;
		}
        console.log(i +"--> left wall =" +left_wall+"right wall ="+right_wall)
	}
	total_units += (bowl * spaces)-space_total
	console.log(total_units);
    
}
comPool([3,0,1,3,0,5])
comPool([2,1,2])
comPool([3,0,0,0])

