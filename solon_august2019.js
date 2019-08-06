// given 1 2 3 4 and probabilities .1 .5 .2 .2 
var numbers = [1,2,3,4]
var probs = [.1,.5,.2,.2]
//if random 1-10 = 1
//if random 11-60 = 2
//if random 61-80 = 3
//if random 81-100 = 4
function randomPicker(numbers, probs){
    var random = Math.floor(Math.random() * 100) + 1; //1-100
    var bottom = 0;
    for(var i = 0; i < probs.length; i++){
        if(random > bottom && random <= bottom + (probs[i]*100)){
            return numbers[i];
        }
        else{
            bottom += (probs[i]*100);
        }
    }
}