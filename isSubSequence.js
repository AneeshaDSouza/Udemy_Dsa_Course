function isSubSequence(str1, str2) {


    str1 = str1.split("");
    str2 = str2.split("");

    let pointer1 = 0;

    for (let pointer2 = 0; pointer2 < str2.length; pointer2++) {
        if (str1[pointer1] === str2[pointer2]) {
            pointer1++
        }
    }
    if (pointer1 === str1.length ) {
        return true;
    }
    return false;
}
console.log(isSubSequence("hello", "hello world"));
console.log(isSubSequence("sing", "sting"));
console.log(isSubSequence("sring", "sting"));

//recursive but not o(1)
function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
  }
