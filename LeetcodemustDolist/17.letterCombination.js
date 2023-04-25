/**17
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    
    if(!digits.length) return [];
    
    let mapDigits ={
        1: '',
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9:['w','x','y','z']
    }
 
    let result = [];
    
    function permute(string, index) {
        if(index === digits.length) {
            result.push(string);
            return;
        }
        
        for(let x of mapDigits[digits[index]]) {
            permute(string+x, index+1);
        }
    }
    permute('', 0);
    return result;
};

//lettercombination

function phoneNumberMnemonics(digits) {
    if(!digits.length) return [];
     
     let mapDigits ={
               0: ['0'],
         1: ['1'],
         2: ['a','b','c'],
         3: ['d','e','f'],
         4: ['g','h','i'],
         5: ['j','k','l'],
         6: ['m','n','o'],
         7: ['p','q','r','s'],
         8: ['t','u','v'],
         9:['w','x','y','z']
     }
  
     let result = [];
     
     function permute(string, index) {
         if(index === digits.length) {
             result.push(string);
             return;
         }
         
         for(let x of mapDigits[digits[index]]) {
             permute(string+x, index+1);
         }
     }
     permute('', 0);
     return result;
 }
 
 // Do not edit the line below.
 exports.phoneNumberMnemonics = phoneNumberMnemonics;
 