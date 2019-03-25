// This problem was asked by Facebook.

// Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs, and a starting airport, compute the person's itinerary. If no such itinerary exists, return null. If there are multiple possible itineraries, return the lexicographically smallest one. All flights must be used in the itinerary.

// For example, given the list of flights [('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')] and starting airport 'YUL', you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].

// Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport 'COM', you should return null.

// Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')] and starting airport 'A', you should return the list ['A', 'B', 'C', 'A', 'C'] even though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary. However, the first one is lexicographically smaller.

// ['SFO','DAL']
// ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD']

function flights(arr,str){
	var dict = {length:0,start:str};
    var new_arr = [];
	for(var i =0; i < arr.length; i ++){
      if(dict[arr[i][0]] == null){
			dict[arr[i][0]] = [arr[i][1]];
            dict.length ++
      }
      else{
        dict[arr[i][0]].push(arr[i][1])
        dict.length ++
      }
    }
    while(dict.length >= 0){
      new_arr.push(dict.start.toString());
      dict.start = dict[dict.start];
      dict.length --;
    }
  return new_arr
}

console.log(flights([['SFO', 'HKO'], ['YYZ', 'SFO'], ['YUL', 'YYZ'], ['HKO', 'ORD']],'YUL'))