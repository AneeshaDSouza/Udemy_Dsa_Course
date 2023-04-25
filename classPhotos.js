function classPhotos(rsh, bsh) {
    // Write your code here.
      rsh.sort((a,b)=> b-a);
      bsh.sort((a,b)=> b-a);
      const firstRow = rsh[0] < bsh[0] ? 'RED': 'BLUE';
      for(let i=0; i< bsh.length ;i++){
          if(firstRow === "RED"){
              if(rsh[i] >= bsh[i]) return false;
          } else{
              if(bsh[i] >= rsh[i]) return false;
          }
      }
    return true;
  }
  
  // Do not edit the line below.
  exports.classPhotos = classPhotos;