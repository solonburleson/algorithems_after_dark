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

// 8/19/2019 
class MultiArr {
    constructor(arr){
        this.arr = arr;
        this.coord = null;
    }

    next(){
        var value = null;
        if(this.coord == null)
        {
            for (var i = 0; i < this.arr.length; i++) {
                if(this.arr[i].length > 0){
                    for(var j = 0; j < this.arr[i].length; j++){
                        if(this.arr[i][j] != null){
                            value = this.arr[i][j];
                            this.coord = [i,j];
                            return value;
                        }
                    }
                }                    
            }
        }
        else {
            if(this.arr[this.coord[0]].length - 1 == this.coord[1]){
                this.coord[0] += 1;
                this.coord[1] = 0;
                if(this.arr[this.coord[0]].length == 0){
                    this.coord[0] += 1;
                    return this.arr[this.coord[0]][this.coord[1]];
                }
                else{
                    value = this.arr[this.coord[0]][this.coord[1]];
                    return value;
                }
            } 
            else{
                value = this.arr[this.coord[0]][this.coord[1]+1];
                this.coord[1] += 1;
                return value;
            }
        }
    }

    hasnext(){
        if(this.coord == null){
            this.next();
            this.hasnext();
        }
        if(this.arr[this.coord[0]].length - 1 > this.coord[1])
        {
            return true;
        }
        else{
            if(this.coord[0] == this.arr.length - 1){
                return false;
            }
            for(var i = this.coord[0]+1; i < this.arr.length; i++){
                if(this.arr[i].length > 0)
                {
                    return true;
                }
            }
            return false;
        }
    }
}

mArr = new MultiArr([[1,2],[3],[],[4,5,6]]);
console.log(mArr.hasnext());
console.log(mArr.next());
console.log(mArr.next());
console.log(mArr.next());
console.log(mArr.hasnext());
console.log(mArr.next());
console.log(mArr.hasnext());
console.log(mArr.next());
console.log(mArr.hasnext());
//[1,2]
//[3]
//[]
//[4,5,6]