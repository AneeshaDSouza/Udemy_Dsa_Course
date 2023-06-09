/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
   var rotCharArray = [];
     var regEx = /[A-Z]/;
     str = str.split("");
     for (var x in str) {
       if (regEx.test(str[x])) {
         rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
       } else {
         rotCharArray.push(str[x].charCodeAt());
       }
     }
   
   
     str = String.fromCharCode.apply(String, rotCharArray);
     return str;
   }
   
rot13("SERR PBQR PNZC");


//2  algoexpert
function caesarCipherEncryptor(str, key) {
  var rotCharArray = [];
    var regEx = /[a-z]/;
    str = str.split("");
    for (var x in str) {
      if (regEx.test(str[x])) {
        rotCharArray.push(((str[x].charCodeAt() - 97 + key) % 26) + 97);
      } else {
        rotCharArray.push(str[x].charCodeAt());
      }
    }
  
    
    str = String.fromCharCode.apply(String, rotCharArray);
    return str;
  }


// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
