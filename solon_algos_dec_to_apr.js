function URLify(str) {
    var url = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            url += "%20";
        }
        else {
            url += str[i];
        }
    }
    return url;
}

URLify("He llo  ")-- > "He%20llo"

var board = [[x, o, x],
[o, x, o],
[x, x, o]]

function ticTacWin(board) {
    var str = ""
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j + 2) {
            if (board[i][j] == board[i][j + 1] && board[i][j] == board[i][j + 2] && j == 0) {
                str = "Winner is " + board[i][j]
                return str
            }
            else if (board[i][j] == board[i + 1][j] && board[i][j] == board[i + 2][j] && i == 0) {
                str = "Winner is " + board[i][j]
                return str
            }
            else if (board[i][j] == board[i + 1][j + 1] && board[i][j] == board[i + 2][j + 2] && i == 0 && j == 0) {
                str = "Winner is " + board[i][j]
                return str
            }
            else if (board[i][j] == board[i - 1][j - 1] && board[i][j] == board[i - 2][j - 2] && i == 0 && j == 2) {
                str = "Winner is " + board[i][j]
                return str
            }
        }
    }
    return "No winner"
}


function sumSwap(arr1, arr2) {
    var sum1 = 0;
    var sum2 = 0;
    var swaps = [];
    var diff = 0;
    for (var i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
    }
    for (var i = 0; i < arr2.length; i++) {
        sum2 += arr2[i];
    }
    if (sum1 != sum2) {
        diff = sum1 - sum2;
        if (diff % 2 != 0) {
            return "Not able to swap to make equal"
        }
        diff /= 2;
        for (var i = 0; i < arr1.length; i++) {
            for (var j = 0; j < arr2.length; j++) {
                if (diff == arr1[i] - arr2[j]) {
                    swaps.push(arr1[i]);
                    swaps.push(arr2[j]);
                    return swaps
                }
            }
        }
    }
    else {
        return "No need to swap"
    }
}

function sequence(arr) {
    var sum = 0;
    var max_sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (sum != 0) {
            sum += arr[i];
            if (max_sum < sum) {
                max_sum = sum;
            }
            else if (sum < 0) {
                sum = 0;
            }
        }
        else {
            sum += arr[i];
            if (sum < 0) {
                sum = 0;
            }
        }
    }
    return max_sum
}


function livingPeople(arr) {
    var dict = {};
    var year = 0;
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        year = arr[i]['birth']
        while (year <= arr[i]['death']) {
            if (!(year in dict)) {
                dict[year] = 1;
            }
            else {
                dict[year] += 1;
            }
            year++;
        }
    }
    for (var key in dict) {
        if (dict[key] > max) {
            var lyear = key;
            max = dict[key];
        }
    }
    return lyear
}

console.log(livingPeople([{ 'name': "Person1", 'birth': 1908, 'death': 1909 }, { 'name': "Person2", 'birth': 1909, 'death': 1920 }]))


function pairSums(arr, sum) {
    var pairs = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == sum) {
                pairs.push([arr[i], arr[j]])
            }
        }
    }
    return pairs
}


function letter_num(arr) {
    var lcount = 0;
    var numcount = 0;
    var max = 0;
    var string = "";
    var max_str = "";
    for (var i = 0; i < arr.length - 1; i++) {
        if (typeof arr[i] == "string") {
            lcount += 1;
        }
        else {
            numcount += 1;
        }
        str += arr[i]
        for (var j = i + 1; j < arr.length; j++) {
            str += arr[j]
            if (typeof arr[j] == "string") {
                lcount += 1;
            }
            else {
                numcount += 1;
            }
            if (lcount == numcount && max < lcount + numcount) {
                max = lcount + numcount;
                max_str = string;
            }
        }
        lcount = 0;
        numcount = 0;
    }
    return max_str
}


function longestWord(arr) {
    var str = "";
    var max = "";
    for (var i = 0; i < arr.length; i++) {
        str = arr[i]
        for (var j = 0; j < arr.length; j++) {
            if (i != j) {
                str += arr[j]
                for (var x = 0; x < arr.length; x++) {
                    if (x != i || x != j) {
                        if (str == arr[x] && str.length > max.length) {
                            max = str
                        }
                    }
                }
            }
            str = arr[i]
        }
    }
    return max
}



function circusTower(arr) {
    var lightest = arr[0];
    var place = 0;
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][0] < lightest[0] && arr[i][1] < lightest[1]) {
            lightest = arr[i];
            place = i;
        }
    }
    arr.splice(place, 1);
    if (arr.length > 0) {
        output = circusTower(arr);
    }
    if (lightest[0] < output[output.length - 1][0] && lightest[1] < output[output.length - 1][1]) {
        output.push(lightest)
    }
    return output
}




function stepCounter(steps) {
    steps_remaining = steps
    results = []
    steps_arr = []
    var i = 0
    while (steps_remaining > 0) {
        steps_arr.push(1)
        steps_remaining -= 1
    }
    results.push(steps_arr)  //[[1,1,1,1]]
    while(i < results.length){
        //[2,1,1]
        steps_arr = results[i]
        for(var j = 0; j < steps_arr.length - 1; j++){
            //[2,1,1] --> [1,1,1,1] --> [1,2,1] --> [1,1,1,1] --> [1,1,2]
            if(steps_arr[j] == 1 && steps_arr[j+1] == 1){
                steps_arr[j+1] = 2
                steps_arr.splice(j,1)
                results.push(steps_arr)
                break
                //[2,1,1]
            }
            else if(steps_arr[j] == 2){
                steps_arr[j] = 1
                steps_arr.splice(j,0,1)
            }
        }
        i++
    }
    steps_arr = results[0]
    for(var j = 0; j < steps_arr.length - 1; j++){
        if(steps_arr[j] == 1 && steps_arr[j+1] == 1){
            steps_arr[j+1] = 2
            steps_arr.splice(j,1)
        }
    }
    results.push(steps_arr)
    return results
}



4
[[1, 1, 1, 1],
[2, 1, 1],
[1, 2, 1],
[1, 1, 2],
[2, 2]]




function multiply(arr){
    var mult_arr = []
    var mult = 1
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if(j != i){
                mult *= arr[j]
            }
        }
        mult_arr.push(mult)
        mult = 1
    }
    return mult_arr
}


[1,1]

function nonAdjacent(arr){
    var temp = 0
    var place = 0
    if(arr.length > 2){
        var max = arr[0] + arr[arr.length - 1]
    }
    else{
        return 0
    }
    for(var i = 0; i < arr.length; i++){
        if(i != place + 1){
            temp += arr[i]
            place = i
        }
        if(temp > max){
            max = temp
        }
    }
    return max
}



function codeBreaker(str){
    alpha_dict = {
        '1': 'a',
        '2': 'b',
        '3': 'c',
        '4': 'd',
        '5': 'e',
        '6': 'f',
        '7': 'g',
        '8': 'h',
        '9': 'i',
        '10': 'j',
        '11': 'k',
        '12': 'l',
        '13': 'm',
        '14': 'n',
        '15': 'o',
        '16': 'p',
        '17': 'q',
        '18': 'r',
        '19': 's',
        '20': 't',
        '21': 'u',
        '22': 'v',
        '23': 'w',
        '24': 'x',
        '25': 'y',
        '26': 'z'
    }
    var dict = {}
    var num = ''
    var num2 = ''
    var num_int = 0
    var num2_int = 0
    var prev = ''
    var letter = ''
    for(var i = 0; i < str.length; i++){
        num += str[i];
        console.log(num)
        num_int = parseInt(num)
        num2_int = parseInt(num2)
        if(num_int > 26){
            num = str[i];
        }
        if(num == '0'){
            num = ''
        }
        if(str[i+1] == '0'){
            num += str[i+1];
        }
        else{
          num2 = str[i] + str[i+1]
        }
        num2_int = parseInt(num2)
        if(num_int > 26){
            num2 = '';
        }
        prev += str[i]
        console.log("NUM1: " + num + " NUM2: " + num2)
        console.log("PREV: " + prev)
    }
    return dict[prev]
}

console.log(codeBreaker('1012233'))



// 'abc' 
// 'a' 'bc' 
// 'a' 'cb' 
// 'b' 'ac' 
// 'b' 'ca' 
// 'c' 'ab' 
// 'c' 'ba'
function strCombo(str){
    var first = ''
    var rem = ''
    for(var i = 0; i < str.length; i++){
        first = str[i];
        rem = str.substring(0,i) + str.substring(i+1)
        var perms = strCombo(rem)
        results.push(first + perms)
    }
}





function FirstFactorial(num) {
    if(num == 1){
        return num
    }
    else{
        return num * FirstFactorial(num-1)
    }
}


//           |
//       _   |
// |    | |  |
// |   _| |  |
// |__|   |__|


function comPool(arr){
    var left_wall = arr[0]
    var right_wall = 0
    var inner = 0
    var count = 0
    var units = 0
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < left_wall){
            inner += arr[i]
            count++
        }
        if(arr[i] >= left_wall){
            units += count * left_wall - inner
            inner = 0
            count = 0
            left_wall = arr[i]
        }
        if(arr[i] > right_wall && arr[i] < left_wall){
            right_wall = arr[i]
        }
    }
    if(right_wall < left_wall){
        units += count * right_wall - inner
    }
    return units
}

race = ecarace
car = carac
ab = aba

function subPalindrome(str, idx){
    var count = 0
    for(var i = idx+1; i < str.length; i++){

    }
}



function inversion(arr){
    var idx = 0;
    var inver = 0;
    var count = 1;
    while(idx < arr.length){
        if(arr[idx] > arr[idx+count]){
            inver++;
        }
        if(idx+count == arr.length){
            idx++;
            count = 1;
        }
        else{
            count++;
        }
    }
    return inver
}




function maxProfit(arr){
    var idx = 0
    var count = 1
    var max = 0
    while(idx < arr.length){
        if(arr[idx+count] - arr[idx] > max){
            max = arr[idx+count] - arr[idx]
        }
        if(idx+count == arr.length){
            idx++
            count = 1
        }
        else{
            count++
        }
    }
    return max
}



function editDistance(str1, str2){
    var count = 0
    if(str2.length < str1.length){
      count = str1.length - str2.length
    }
    for(var i = 0; i < str2.length; i++){
        if(str2[i] != str1[i]){
            count++
        }    
    }
    return count
}


// 4/15/2019 lowest number of moves to clear a fish tank when fish of size X is injected into the tank by adding or removing a fish

function hungryFish(fish, tank){
    var moves = 0;
    tank = tank.sort(function(a, b){return a-b;});
    while(tank.length > 0){
        if(fish > tank[0]){
            fish+=tank[0]
            tank.shift()
        }
        if(fish+fish-1 < tank[0]){
            tank.shift();
            moves++;
        }
        else if(fish <= tank[0]){
            tank.unshift(fish-1)
            moves++;
        }
    }
  
    return moves
}

console.log(hungryFish(10, [9,20,25,100]))
console.log(hungryFish(3, [25,20,100,400,500]))
console.log(hungryFish(50, [25,20,9,100]))



// 4/16/2019 Morse code variations 
function morseCode(str){
    var morse = {
        'a': '.-',
        'b': '-...',
        'c': '-.-.',
        'd': '-..',
        'e': '.',
        'f': '..-.',
        'g': '--.',
        'h': '....',
        'i': '..',
        'j': '.---',
        'k': '-.-',
        'l': '.-..',
        'm': '--',
        'n': '-.',
        'o': '---',
        'p': '.--.',
        'q': '--.-',
        'r': '.-.',
        's': '...',
        't': '-',
        'u': '..-',
        'v': '...-',
        'w': '.--',
        'x': '-..-',
        'y': '-.--',
        'z': '--..'
    }
    var str_morse = '';
    for(var i = 0; i < str.length; i++){
        str_morse += morse[str[i]]
    }
    console.log(str_morse)
    for(i = 0; i < str_morse.length; i++){
        for(var key in morse){
            if(morse[key] == str_morse[i] + str_morse[i+1]){
                console.log(key)
            }
        }
    }
}

morseCode('eta')

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
var board = [[5,3,0,0,7,0,0,0,0],
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
    var dict = {'count': 0};
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board.length; j++){
            //console.log("i: "+ i + ", " + Math.floor((i)/3) + ", j: " + j + ", " + + Math.floor((j)/3));
            if(board[i][j] !== 0){
                 dict['['+i+']['+j+']'] = board[i][j]
                 if(!('col'+j in dict)){
                    dict['col'+j] = [board[i][j]]
                }
                else{
                    dict['col'+j].push(board[i][j])
                }
                if(!('row'+i in dict)){
                    dict['row'+i] = [board[i][j]]
                }
                else{
                    dict['row'+i].push(board[i][j])
                    // 
                }
                if(!('box['+Math.floor(i/3)+']['+Math.floor(j/3)+']' in dict)){
                    dict['box['+Math.floor(i/3)+']['+Math.floor(j/3)+']'] = [board[i][j]]
                }
                else{
                    dict['box['+Math.floor(i/3)+']['+Math.floor(j/3)+']'].push(board[i][j])
                }
            }
            else{
                dict['count']++;
                dict['['+i+']['+j+']'] = []
            }
        } 
    }
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board.length; j++){
            if(board[i][j] == 0){
                var n = 0;
                while(n < 9){
                    n++
                    if(dict['col'+j].includes(n)){
                        continue
                    }
                    else if(dict['row'+i].includes(n)){
                        continue
                    }
                    else if(dict['box['+Math.floor(i/3)+']['+Math.floor(j/3)+']'].includes(n)){
                        continue
                    }
                    else{
                        dict['['+i+']['+j+']'].push(n)
                    }

                }
                if(dict['['+i+']['+j+']'].length == 1){
                    board[i][j] = dict['['+i+']['+j+']'][0]
                    dict['count']--;
                }
            }
        }
    }
    if(dict['count'] > 0){
      board = sudokuSolver(board);
    }
    else{
      return board;
    }
    return board

}

console.log(sudokuSolver(board))