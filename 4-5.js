// This problem was asked by Facebook.

// Given a function that generates perfectly random numbers between 1 and k (inclusive), where k is an input, write a function that shuffles a deck of cards represented as an array using only swaps.

//*GROUP EDIT*: We did not fully understand the wording of the problem so instead had k define the number of swaps the function would make.

// It should run in O(N) time.

// Hint: Make sure each one of the 52! permutations of the deck is equally likely.
function shuffle(k){
    var deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];
	for(var i = 0; i < k; i++){
		var first_card = Math.floor(Math.random()*Math.floor(52));
		var second_card = Math.floor(Math.random()*Math.floor(52));
		var temp = deck[first_card];
		deck[first_card] = deck[second_card];
		deck[second_card] = temp;
	}
	return deck;
}

console.log(shuffle(1000));