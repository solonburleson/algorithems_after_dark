// Given a array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it.

// For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars.

function maxProfit(arr){
  var low = arr[0];
  var profit = 0;
  for(var i = 1; i < arr.length; i++){
    if(arr[i] < low){
      low = arr[i];
    }
     if(arr[i] - low > profit){
       profit = arr[i] - low;
    }
  }
return profit;
}

console.log(maxProfit([9, 11, 8, 5, 7, 10]));