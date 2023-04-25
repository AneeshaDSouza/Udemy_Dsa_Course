function insertionSort(arr){ 
   for(var i=1; i < arr.length ; i++)
   {
       let currVal = arr[i];
     let j;
     for( j=i-1; j>=0 && arr[j] > currVal; j--){  
       arr[j+1] = arr[j];
     }
     arr[j+1] = currVal;
   }
   return arr;
}

console.log(insertionSort([2,1,9,76,4]));

//creae randim array of 100000

let data = Array.apply(null, {length:100000}).map(Function.call, Math.random);

