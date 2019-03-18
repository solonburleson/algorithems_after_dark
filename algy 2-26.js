function adjacentSum(arr){
	var max = arr[0]
	var dict = {}
	var used_index = {}
	var sum = 0
	
	for(var i = 0; i < arr.length; i++){
		if(max < arr[i]){
			max = arr[i]
		}
		if(dict[arr[i]] == null){
			dict[arr[i]] = [i]
		}
		else{
			dict[arr[i]].push(i);
		}
	}
	console.log("dict-->",dict,"max-->",max,"sum-->",sum)
	while(max > 0){
        console.log("In the while loop")
		if(dict[max] !== undefined){
			for(var i = 0; i < dict[max].length; i++){
				if(used_index[dict[max][i]-1] !== undefined || used_index[dict[max][i]+1] !== undefined){
					continue;
				}
				else{
					sum += max;
					used_index[dict[max][i]] = dict[max][i]
                    console.log(used_index)
				}
			}
		}
		max --;
	}
    console.log(sum)
    return sum;
}
adjacentSum([6,1,5,1,4])