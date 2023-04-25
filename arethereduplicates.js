function areThereDuplicates(...args){



    let arr1 = [...args];

    let freqCounter = {};

    for(let val of arr1){
        freqCounter[val] = ++freqCounter[val] ||1;
    }

   for (let key in freqCounter){

    if(freqCounter[key] >1){
        return true;
    }
   }
   return false;

}

console.log(areThereDuplicates(1, 3, 4,5 ));

console.log(areThereDuplicates(1, 3, '1', 1));
console.log(areThereDuplicates(1, 3, 'aa', [0,1],[0,1]));

// their solution
function areThereDuplicates1() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }

  console.log(areThereDuplicates1(1, 3,1));

console.log(areThereDuplicates1(1, 3, '1'));
console.log(areThereDuplicates1(1, 3, 'aa', [0,1],[0,1]));

//multiple pointer -- not working

function areThereDuplicates2(...args) {
    // Two pointers
    args.sort((a,b) => a>b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }

  console.log(areThereDuplicates2(1, 3,1));

console.log(areThereDuplicates2(1, 3, '1'));
console.log(areThereDuplicates2(1, 3, 'aa', [0,1],[0,1]));

//one liner
function areThereDuplicates3() {
    return new Set(arguments).size !== arguments.length;
  }

  console.log(areThereDuplicates3(1, 3,4, 5));

console.log(areThereDuplicates3(1, 3, '1',1));
console.log(areThereDuplicates3(1, 3, 'aa', [0,1],[0,1]));