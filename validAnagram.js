function validAnagram(str1, str2){
    if(str1.length != str2.length){
        return false;
    }
     str1 = str1.toLowerCase().split("")
     str2 = str2.toLowerCase().split("");
    let freqCounter1 = {};
    let freqCounter2 ={};
    for( let val of str1){
        freqCounter1[val ] = ++freqCounter1[val]||1;
    }
    for(let val of str2){
        freqCounter2[val] = ++freqCounter2[val] ||1;
    }

    for (let key in freqCounter1){

     if(!(freqCounter2.hasOwnProperty(key))){ //or (! (key**2 in freqCounter2))
         return false;
     }

     if(freqCounter2[key] != freqCounter1[key]){
        return false;
     }


    }
    return true;

}
console.log(validAnagram('', ''));
console.log(validAnagram('zaz', 'zza'));
console.log(validAnagram('ajhj', 'bhjh'));


// their solution

function validAnagram2(str1, str2){
    if(str1.length != str2.length){
        return false;
    }   
    let freqCounter1 = {};
    for( let i=0; i<str1.length;i++){
        let letter = str1[i];
        freqCounter1[letter ] = ++freqCounter1[letter]||1;
    }
    
    for (let i=0;i< str2.length;i++){
        let letter = str2[i];
        if(!freqCounter1[letter]){
            return false;
        }
        else{
            freqCounter1[letter]--;
        }


    }
    return true;

}
console.log(validAnagram2('', ''));
console.log(validAnagram2('zaz', 'zza'));
console.log(validAnagram2('ajhj', 'bhjh'));