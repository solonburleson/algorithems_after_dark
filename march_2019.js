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