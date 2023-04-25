
//write function called sumzero -accepts sorted array of integers, find first pair
//where sum i s zero. returns array  that includes both values nd undefined if doesnt exist

function sumZero(arr){

    let left =0;
    let right = arr.length -1;
    while(left<right){
    let sum = arr[left] + arr[right];

    if( sum ===0 ){
        return [arr[left], arr[right]];
    }
    else if( sum>0){
        right--;
    }
    else{
        left++
    }
}
}

console.log(sumZero([-2, -1, 0, +1, +2, +3, +4]));

console.log(sumZero([1]));
console.log(sumZero([]));
console.log(sumZero([1,2]));