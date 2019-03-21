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