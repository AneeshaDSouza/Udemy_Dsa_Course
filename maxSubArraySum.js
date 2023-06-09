// given array and no.. find the max consecutive digit sum in array
//sliding window
function maxSubArraySum(arr, num){

    let maxSum =0;
    let tempSum = 0;

    if(arr.length < num) return null;

    for( let i =0; i< num; i++){
        maxSum = maxSum + arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i< arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);

    }

    return maxSum;
}

console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3],3));
console.log(maxSubArraySum([1,2,5,2,8,1,5],2));
console.log(maxSubArraySum([1,2,5,2,8,1,5],4));
