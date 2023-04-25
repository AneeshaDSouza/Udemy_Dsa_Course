function firstNonRepeatingCharacter(string) {
    // Write your code here.
      let frequencyCounter ={};
      let arr1 = string.split("");
      for(let val of arr1){
          frequencyCounter[val] = ++frequencyCounter[val] ||1;
      }
      
      for (let i=0; i<string.length; i++){
          const char = string[i];
          if(frequencyCounter[char] === 1)
              return i;
      }
    return -1;
  }