// same frequency in the given 2 digits

function sameFrequency(n1, n2){
    let arr1 = n1.toString().split("");
    let arr2 = n2.toString().split("");

    if(arr1.length != arr2.length)
    return false;
    let freqCounter1 ={};
    let freqCounter2 = {};

    for (let val of arr1){
        freqCounter1[val ] =(freqCounter1[val]||0)+1;
    }

    for (let val of arr2){
        freqCounter2[val] = (freqCounter2[val]||0)+1;
    }
    
    for (let key in freqCounter1){

        if(!(freqCounter2.hasOwnProperty(key))){
            return false;
        }

        if(freqCounter2[key ]!= freqCounter1[key]){
            return false;
        }

        
    }
    
    return true;
  // good luck. Add any arguments you deem necessary.
}

console.log(sameFrequency(234,423));
console.log(sameFrequency(1000000, 0000001));
