function tandemBicycle(rss, bss, fastest) {
    // Write your code here.
      
    if (fastest){rss.sort((a,b)=> b-a)}
      else{rss.sort((a,b)=>a-b);}
      bss.sort((a,b)=>a-b);
      
      let totalSpeed =0;
      for(let i=0; i<rss.length; i++){
          const r1= rss[i];
          const r2 = bss[i];
          totalSpeed += Math.max(r1, r2);
      }
    return totalSpeed;
  }
  
  // Do not edit the line below.
  exports.tandemBicycle = tandemBicycle;
  