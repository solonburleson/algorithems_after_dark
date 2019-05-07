// 4/8/2019
// Hackerrank Challenges to get first star
// 1 - first challenge function that returns sum of two inputs
function simpleSum(a, b){
    return a + b;
}
// 2 - find the sum of an array of numbers
function sumArray(ar){
    var output = 0;
    for(var i =0; i < ar.length; i++){
        output += ar[i];
    }
    return output;
}
// 3 - compare triplets -- return an array with the compared points for the two 
// triplets. Comparing each index of the triplet to the corrisponding index in 
// the other.
function compareTriplets(a, b) {
    var output = [0, 0];
    for (var i = 0; i < 3; i++){
        if(a[i] > b[i]){
            output[0]++;
        } else if(a[i] < b[i]){
            output[1]++;
        }
    }
    return output;
}
// 4 - Return the sum of an array with very large numbers. Trick is in 
// java need to use the long data type as the sum may go outside of the 
// range of standard int data type
function aVeryBigSum(ar) {
    var output = 0;
    for(var i =0; i < ar.length; i++){
        output += ar[i];
    }
    return output;
}
// 5 - diagonal matrix difference. Find the difference between the 
// diagonals of a given square matrix
function diagonalDifference(arr) {
    var pd = 0;
    var sd = 0;
    var index = arr.length - 1;
    for (var i = 0; i < arr.length; i++){ 
        pd += arr[i][i];
        sd += arr[index][i];
        index --;
    }

    return Math.abs(pd - sd);
}
console.log(diagonalDifference(
    [[11,2,4],
    [4,5,6],
    [10,8,-12]
]));

// 4/10/2019
// Given two strings, compute the edit distance between them.
// For example, the edit distance between “kitten” and “sitting” 
// is three: substitute the “k” for “s”, substitute the “e” for “i”, 
// and append a “g”.
function editDistance(strA, strB){
    var edits = 0;
}

// 4/11/2019
// Hackerrank #6
// given an array determine the fractions of its contents that are 
// positve negative and zero. To a precsion of .000000.
// Ex: [1,0,1,-1] positve = 2/4 or .500000 negative = 1/4 or .250000
function plusMinus(arr) {
    var pos = 0;
    var neg = 0;
    var zero = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            pos++;
        } else if (arr[i] < 0) {
            neg++;
        } else {
            zero++;
        }
    }
    console.log((pos / arr.length).toFixed(6));
    console.log((neg / arr.length).toFixed(6));
    console.log((zero / arr.length).toFixed(6));
}

// 4/12/2019
// find the next largest palindrome given a number that is a palindrome
// ex: given 121 the next largest palindrome would be 131
function nextPalindrome(n){
    if(n == 99){
      return 101;
    }
    var str = n.toString();
    var count = 1;
    while(str.length > 2){
        if(str[0] == str[str.length - 1]){
            str = str.slice(1,str.length - 1);
            count *= 10;
        }
    }
    if(str.length == 1){
        if(str[0] == "9"){
          n += count/10 * 11;
        } else {
          n += count;
        }
    } else {
      if(str[0] == "9"){
          n += count/10 * 11;
        } else {
          n += count * 11;
        }
    }
    return n;
}
console.log(nextPalindrome(22));
console.log(nextPalindrome(99));
console.log(nextPalindrome(1239321));
console.log(nextPalindrome(12399321));

// 4/29/2019
// sudoku solver

var board = [
    [5,3,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
]