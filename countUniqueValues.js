// to count unique values in an array
// pointer pattern
function countUniqueValues(arr){

 let pointer1 = 0;
if(arr.length ===0){
    return 0;
}

 for(let pointer2 =1; pointer2< arr.length; pointer2++){

 
    if( arr[pointer1] != arr[pointer2]){
      pointer1++;
      arr[pointer1] = arr[pointer2];

    }

 }
 return pointer1+1;



}

console.log(countUniqueValues([1,1,2,3,4,5,6,7,7,7,7,7,7]));
console.log(countUniqueValues([1,1]));
console.log(countUniqueValues([]));
