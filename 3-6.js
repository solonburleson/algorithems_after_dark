// Given a string, return all combinations of the individual letters. 
// Example: given 'abc', ['abc','acb','bac','bca','cab','cba']

// for loop through with a var 'temp' == str[i]
//str = str[1]..str[str.length-1]
function strCombo(str, arr=[]){
	for(var i = 0; i < str.length; i++){
        split_str= str.split('')
		split_temp = split_str[0]
		split_str[0] = split_str[i]
		split_str[i] = split_temp
		str = split_str.join('')
		temp = str.slice(i+1,str.length-1)
		arr.push(str[i]+strCombo(temp,arr))
	}
	return arr
}