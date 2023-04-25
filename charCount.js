function charCount(str) {

    let result = {};
    const regEX = /[a-z1-9]/;
    str = str.toLowerCase().split("");

    for (let x in str) {
        if (regEX.test(str[x])) {

           /* if (result[str[x]] > 0)
                result[str[x]]++;
            else
                result[str[x]] = 1; */
                result[str[x] ] = ++result[str[x]] ||1;
        }

    }
    return result;
}
console.log(charCount("Aneesha! "));


//method 2

function charCount2(str) {
    let result = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (result[char] > 0) {
            result[char]++;
        }
        else {
            result[char] = 1;
        }
    }
    return result;
}
console.log(charCount2("Aneesha! "))

//refactor to efficient
function charCount3(str) {
    let result = {};  
    for (let char of str) {        
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();   
            result[char] = ++result[char]||1;
        }
    }
    return result;
}

console.log(charCount3("Aneesha !="));


function isAlphaNumeric(char){
    let code = char.charCodeAt(0);
    if(!(code > 47 && code <58) &&
    !(code >64 && code <91) &&
    !(code >96 && code <123)){
        return false;
    }
    return true;
}