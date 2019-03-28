// March Algorithems file
// 3/20/2019
// reverse each word in a string, returning a new string
function reverseWords(str){
    var arr = [];
    arr = str.split(" ");
    for(var i = 0; i < arr.length; i++){
        var temp = "";
        for(var j = arr[i].length - 1; j >= 0; j--){
            temp += arr[i][j];
        }
        arr[i] = temp;
    }
    str = arr.join(" ");
    return str;
}
console.log(reverseWords("the big blue house"));

function rvsWords2(str){
    var output = "";
    var temp = "";
    for( var i = str.length - 1; i >= 0; i--){
        if(str[i] == " " && i != 0){
            temp = str[i] + temp;
            output = temp + output;
            temp = "";
        } else{
            temp += str[i];
        }
    }
    output = temp + output;
    return output;
}
console.log(rvsWords2("The Big Blue House"));

// 3/28/2019
// Community pool
// find total amount of water that an arr can hold where values in arr 
// are walls of the pools ex: [3,0,1,3,0,5] would hold 8 units of water. 
// at arr[1] -> 3 units of water arr[2] -> 2 units arr[4] -> 3 units
function comPool(arr){
    var lw = arr[0];
    var rw = 0;
    var len = 0;
    var deadSpace = 0;
    var water = 0;
    for(var i = 1; i <arr.length; i++){
        if(arr[i] < lw){
            deadSpace += arr[i];
            len ++;
        }
        if(arr[i] >= lw){
            water += len * lw - deadSpace;
            len = 0;
            deadSpace = 0;
            rw = 0;
            lw = arr[i];
        }
        if(arr[i] > rw && arr[i] < lw){
            rw = arr[i];
        }
    }
    if(rw < lw){
        water += len * rw - deadSpace;
    }
    return water;
}
console.log(comPool([3,0,1,3,0,5]));
console.log(comPool([3,1,3]));
console.log(comPool([3,0,1,3,0,2]));
console.log(comPool([3,0,1,3,0,0]));
console.log(comPool([0,1,3,0,1,3,0,5]));