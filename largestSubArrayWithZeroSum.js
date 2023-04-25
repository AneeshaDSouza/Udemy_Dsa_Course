class Solution {
    maxLen(arr,n){
        //code here
        let map ={};
        let maxi =0;
        let sum =0;
        for (let i=0; i<n ; i++){
            sum = sum+arr[i];
            if(sum===0){
                maxi = i+1;
            } else{
                if(map[sum]!==undefined ){
                    maxi = Math.max(maxi, i-map[sum]);
                }else{
                    map[sum] =i;
                }
            }
        }
        return maxi;
    }
    
}