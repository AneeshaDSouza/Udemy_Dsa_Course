
// XOR of elements as given value m with
// O(n) time complexity.
     
    // Returns count of subarrays of arr with XOR
    // value equals to m
    function subarrayXor(aee,n,m)
    {
        let ans = 0; // Initialize answer to be returned
  
        // Create a prefix xor-sum array such that
        // xorArr[i] has value equal to XOR
        // of all elements in arr[0 ..... i]
        let xorArr = new Array(n);
  
        // Create map that stores number of prefix array
        // elements corresponding to a XOR value
        let mp = new Map();
  
        // Initialize first element of prefix array
        xorArr[0] = arr[0];
  
        // Computing the prefix array.
        for (let i = 1; i < n; i++)
            xorArr[i] = xorArr[i - 1] ^ arr[i];
  
        // Calculate the answer
        for (let i = 0; i < n; i++) {
            // Find XOR of current prefix with m.
            let tmp = m ^ xorArr[i];
  
            // If above XOR exists in map, then there
            // is another previous prefix with same
            // XOR, i.e., there is a subarray ending
            // at i with XOR equal to m.
            ans = ans
                  + (mp.has(tmp) == false
                         ? 0
                         : (mp.get(tmp)));
  
            // If this subarray has XOR equal to m itself.
            if (xorArr[i] == m)
                ans++;
  
            // Add the XOR of this subarray to the map
            if (mp.has(xorArr[i]))
                mp.set(xorArr[i], mp.get(xorArr[i]) + 1);
            else
                mp.set(xorArr[i], 1);
        }
  
        // Return total count of subarrays having XOR of
        // elements as given value m
        return ans;
    }
     
     // Driver code
    let arr=[4, 2, 2, 6, 4];
     
    let n = arr.length;
    let m = 6;
    document.write("Number of subarrays having given XOR is "
            + subarrayXor(arr, n, m));
     
// This code is contributed by unknown2108