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