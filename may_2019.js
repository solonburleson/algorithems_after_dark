// put on ice come back at another time.  converted string to code, had trouble finding all permutations of that code.  Recursion?

//Sudoku finished board check
completed = [[1,3,5,2,7,9,8,6,4],
            [4,2,8,6,3,5,9,1,7],
            [9,6,7,1,4,8,2,5,3],
            [5,4,1,7,8,2,6,3,9],
            [2,8,9,3,1,6,7,4,5],
            [3,7,6,9,5,4,1,2,8],
            [7,5,2,4,9,1,3,8,6],
            [6,9,4,8,2,3,5,7,1],
            [8,1,3,5,6,7,4,9,2]]

function sudokuChecker(completed){
    var result = false;
    var dict = {
        'count': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0
    };
    for(var i = 0; i < completed.length; i++){
        dict['count']++;
        for(var j = 0; j < completed[i].length; j++){
            if(!completed[i][j] in dict){
                return result;
            }
            dict[completed[i][j]]++;
            if(dict[completed[i][j]] > dict['count']){
                return result
            }
        }
    }
    for(var i = 0; i < completed.length; i++){
        dict['count']++;
        for(var j = 0; j < completed[i].length; j++){
            dict[completed[j][i]]++;
            if(dict[completed[j][i]] > dict['count']){
                return result
            }
        }
    }
    result = true;
    return result
}

//Sudoku board solver
board = [
        [5,3,0,0,7,0,0,0,0],
        [6,0,0,1,9,5,0,0,0],
        [0,9,8,0,0,0,0,6,0],
        [8,0,0,0,6,0,0,0,3],
        [4,0,0,8,0,3,0,0,1],
        [7,0,0,0,2,0,0,0,6],
        [0,6,0,0,0,0,2,8,0],
        [0,0,0,4,1,9,0,0,5],
        [0,0,0,0,8,0,0,7,9]]

//create dictionary of possible answers for each subindex
//create sub 3x3s

function sudokuSolver(board){
    var empty = 0;
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board.length; j++){
            if(board[i][j] == 0){
                count ++;
            }
        }
    }
    var boxes = {};
    // var values = {
    //     '[0][0]': 5,
    //     '[0][1]': 3,
    //     '[0][2]': [1,2,4],
    //     '[1][0]': 6,
    //     '[1][1]': [2,4,7],
    //     '[1][2]': [2,4,7],
    //     '[2][0]': [1,2],
    //     '[2][1]': 9,
    //     '[2][2]': 8,
    // }
}
// 5/6/2019
// find max profit from stock prices given in chronological order
// ex: [9,11,8,5,7,10]
function buyLowSellHigh(arr){
    var profit = 0;
    var temp;
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[j] > arr[i]){
                temp = arr[j] - arr[i];
            }
            if(temp > profit){
                profit = temp;
            }
        }
    }
    return profit;
}
console.log(buyLowSellHigh([9,11,8,5,7,10]));

// biased coin toss
function toss_biased(){
    var bias = Math.floor(Math.random()*98)+2;
    while(bias == 50){
        bias = Math.floor(Math.random()*98)+2;
    }
    var toss = Math.floor(Math.random()*100) + 1;
    if(toss <= bias){
        return 0;
    } else {
        return 1;
    }
}
console.log(toss_biased());