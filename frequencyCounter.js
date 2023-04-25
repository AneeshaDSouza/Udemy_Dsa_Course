/* Frequecncy counter - this pattern uses objects or sets to collect values/ frequencies of values

avoid n**2 time complexity

write function same, which accepts 2 arrays. the function should return true if every value 
in array has its corrsponding value squared in 2nd array
the frequencies of values must be same,

same([1,2,3],[4,1,9]) - return true
same([1,2,3], [1,9]) - return false;
same([1,2,1]), [4,4,1]) - return false

*/

function same(arr1, arr2){
    if(arr1.length != arr2.length){
        return false;
    }

    let freqCounter1 = {};
    let freqCounter2 ={};
    for( let val of arr1){
        freqCounter1[val ] = ++freqCounter1[val]||1;
    }
    for(let val of arr2){
        freqCounter2[val] = ++freqCounter2[val] ||1;
    }

    for (let key in freqCounter1){

     if(!(freqCounter2.hasOwnProperty(key**2))){ //or (! (key**2 in freqCounter2))
         return false;
     }

     if(freqCounter2[key**2] != freqCounter1[key]){
        return false;
     }


    }
    return true;

}
console.log(same([1,2,3],[4,1,9]));
console.log(same([1,2,3], [1,9]));
console.log(same([1,2,1], [4,4,1]));
console.log(same([1,2,3,5,1], [4,1,1,9,25]));


//Algoexpert generate Document

function generateDocument(characters, document) {
    if(characters.length< document.length)  return false;
      
     let arr1 = characters.split("");
          let arr2 = document.split("");
      let freqCounter1 = {};
      let freqCounter2 ={};
      for( let val of arr1){
          freqCounter1[val ] = ++freqCounter1[val]||1;
      }
      for(let val of arr2){
          freqCounter2[val] = ++freqCounter2[val] ||1;
      }
  
      for (let key in freqCounter2){
  
       if(!(freqCounter1.hasOwnProperty(key))){ //or (! (key**2 in freqCounter2))
           return false;
       }
  
       if(freqCounter2[key] > freqCounter1[key]){
          return false;
       }
  
  
      }
      return true;
    
  }
  