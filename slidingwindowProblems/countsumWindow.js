
function countSumSubarry(arr, k) {
    let j = 0; let i = 0;
    let sum =0;
    let count=0;
    while (j < arr.length) {
        sum = sum+arr[j];        
        if (sum < k) {  
             
            j++;
        }
         else if (sum ===k){
            
            count= count+1;
            j++;

        } else if(sum>k){
            while (sum>k){
            sum = sum - arr[i];
            i++;
            }
            if(sum===k) count++;
             j++;
        }       
    }
    return count;
}

// Driver code

let arr = [1,1,1];
let k = 2;
 console.log(countSumSubarry(arr, k ));