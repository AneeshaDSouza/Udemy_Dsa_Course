function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {     
        let lowest = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {       
                lowest = j;
            }
            if (lowest != i) {
                let temp = arr[i];
                arr[i] = arr[lowest];
                arr[lowest] = temp;
            }
        }
    }
    return arr;
}

console.log( selectionSort([3,4, 1, 4,5, 7,8,9,10])); // doesnt work if no.s are same

//this works
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {     
          let lowest = i;
          for (let j = i + 1; j < arr.length; j++) {
              if ( arr[lowest]> arr[j]) {       
                  lowest = j;
              }
                  }
             // if (lowest != i) {
                  let temp = arr[i];
                  arr[i] = arr[lowest];
                  arr[lowest] = temp;
             // }
          
      }
      return arr;
  }