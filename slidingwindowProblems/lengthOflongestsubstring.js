var lengthOfLongestSubstring = function(s) {
    
    let map = {}
    let start = 0
    let maxLen = 0
    let arr = s.split('');
    
    for (i=0; i < s.length; i++) {
        let current = map[arr[i]]
         
        if (current!= undefined  && start <= current) {
            start = current + 1
            
        } else {
            maxLen = Math.max(maxLen, i - start + 1)
        }
        
        map[arr[i]] = i
    }
    
    return maxLen;
    
    
};


function lengthOfLongestSubstring(s) {
    let seen = new Set();
    let longest = 0;
    let l = 0;
    for (let r = 0; r < s.length; r++) {
      while (seen.has(s[r])) {
        seen.delete(s[l]);
        l++;
      }
      seen.add(s[r]);
      longest = Math.max(longest, r - l + 1);
    }
    return longest;
  };
  