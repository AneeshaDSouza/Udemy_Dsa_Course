function merge(arr1, arr2) {

    let results = [];
    let arr1Index = 0;
    let arr2Index = 0;

    while (arr1Index < arr1.length && arr2Index < arr2.length) {

        if (arr2[arr2Index] > arr1[arr1Index]) {

            results.push(arr1[arr1Index]);
            arr1Index++;
        }
        else {
            results.push(arr2[arr2Index]);
            arr2Index++;
        }

    }
    while (arr1Index < arr1.length) {
        results.push(arr1[arr1Index]);
        arr1Index++;

    }
    while (arr2Index < arr2.length) {
        results.push(arr2[arr2Index]);
        arr2Index++;
    }

    return results;


}

function mergeSort(arr){

    if(arr.length <=1) return arr;

    let midPoint = Math.floor(arr.length/2);
    
    let left = mergeSort(arr.slice(0,midPoint));
    let right = mergeSort(arr.slice(midPoint));
   return merge(left, right);
}