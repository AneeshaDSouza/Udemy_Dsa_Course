
function sumMaxSubarry(arr, k) {
    let q = [];
    let j = 0; let i = 0;
    let sum =0;
    let max=0;
    while (j < arr.length) {
        sum = sum+arr[j];
        if (sum < k) {           
            j++;
        }
         else if (sum ===k){
            max = Math.max(max, j-i+1);
            j++;

        } else if(sum>k){
            while (sum>k){
            sum = sum - arr[i];
            i++;
            }
           j++
        }       
    }
    return max;
}

// Driver code

let arr = [1,1,1];
let k = 2;
 console.log(sumMaxSubarry(arr, k ));