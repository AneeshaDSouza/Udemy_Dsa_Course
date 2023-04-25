function getNthFib(n) {
    // Write your code here.
      if(n==2) return 1;
      if(n==0 || n==1) return 0;
      let prev2=0;
      let prev =1;
      let cur;
      for (i=2; i<=n; i++){
           cur = prev+prev2;
          prev2= prev;
          prev= cur;
          
      }
      return prev2
   
  }
  
  // Do not edit the line below.
  exports.getNthFib = getNthFib;