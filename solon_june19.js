// 6/3/2019 email validator without a regular expression

function emailValidator(email){
    // REGEX = a-zA-Z0-9.-_@a-zA-Z0-9-_.a-zA-Z
    var not_allowed = "!#$%^&*()=+[]{};:',<>/?|`~ \"\\";
    var postDot = "0123456789";
    var at = 0;
    var dot = 0;
    for(var i = 0; i < email.length; i++){
        if(not_allowed.includes(email[i])){
            console.log(email[i], "not_allowed")
            return false;
        }
        else if(email[i] == "@"){
            at++;
            if(i <= 1){
              console.log("@ at 0")
                return false;
            }
            if(at > 1){
                return false;
            }
        }
        else if(at > 0 && email[i] == "." && (email[i-1] == "." || email[i-1] == "@")){
            return false;
        }
        else if(at > 0 && email[i] == "."){
            dot++;
            if(dot > 2){
              return false;
            }
        }
        else if(dot > 0 && postDot.includes(email[i])){
            return false;
        }
    }
    if(at == 0 || dot == 0){
      return false;
    }
    return true;
}

console.log(emailValidator("solon.burleson@gmail.com"))
console.log(emailValidator("solon.burleson@gmail.com9"))
console.log(emailValidator("solon.burleson@gma@il.com"))
console.log(emailValidator("solon.burleso\\n@gmail.com"))
console.log(emailValidator("@solon.burleson@gmail.com"))
console.log(emailValidator("solon.burleson@gmail.uk.com"))
console.log(emailValidator("solon.burleson@com"))
console.log(emailValidator("solon.burleson@gmail..com"))
console.log(emailValidator("solon.burleson@.com"))
console.log(emailValidator("solon.burleson@gmail.com.uk.gov"))
console.log(emailValidator("solon.burleso>n@gmail.com"))
console.log(emailValidator("s@gmail.com"))