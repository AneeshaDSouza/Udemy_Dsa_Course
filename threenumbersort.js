function threeNumberSort(array, order) {
    let first = order[0];
      let second = order[1];
      let third = order[2];
      let low = 0;
      let mid= 0;
      let high =array.length-1;
      while(mid<= high){
          if(array[mid] === first){
              [array[mid], array[low]]=[array[low], array[mid]];
              low++; mid++;
          } else if (array[mid] === second){
              mid++;
          } else{
              [array[mid], array[high]]= [array[high], array[mid]];
              high--;
          }
      }
      return array
  }