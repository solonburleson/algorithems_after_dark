// This problem was asked by Facebook.

// Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

// For example, given the string "([])[]({})", you should return true.

// Given the string "([)]" or "((()", you should return false.

function bracketCheck(str){
	var dict = {'curly_open':0,'curly_close':0,"(":0,")":0,"[":0,"]":0}
	for(var i =0; i < str.length; i++){
        if(str[i] == "{"){
          dict["curly_open"] += 1
        }
        else if(str[i] == "}"){
          dict["curly_close"] += 1
        }
        else{
          dict[str[i]] += 1
        }
        if(dict["]"] > dict["["] || dict[")"] > dict["("] || dict["curly_close"] > dict["curly_open"]){
          return false
        }
	}
	if(dict["]"] < dict["["] || dict[")"] < dict["("] || dict["curly_close"] < dict["curly_open"]){
      return false
    }
    return true
}

console.log(bracketCheck("[]{}()"))