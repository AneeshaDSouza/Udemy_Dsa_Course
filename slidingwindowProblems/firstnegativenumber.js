/*let res =[];
function printFirstNegativeInteger(arr, k, n) {
    let firstNegativeIndex = 0;
    let firstNegativeElement;

   
    for (let i = k - 1; i < n; i++) {

        // skip out of window and positive elements
        while ((firstNegativeIndex < i) &&
            (firstNegativeIndex <= i - k ||
                arr[firstNegativeIndex] > 0)) {
            firstNegativeIndex++;
        }

        // check if a negative element is found, otherwise use 0
        if (arr[firstNegativeIndex] < 0) {
            firstNegativeElement = arr[firstNegativeIndex];
        }
        else {
            firstNegativeElement = 0;
        }
        res.push(firstNegativeElement);
    }

}

// Driver code

let arr = [-12, -1, -7, 8, -15, 30, 16, 28];
let n = arr.length;
let k = 3;
printFirstNegativeInteger(arr, k, n);
console.log(res);*/

//aditya verma code

let res = [];
function printFirstNegativeInteger(arr, k, n) {
    let q = [];
    let j = 0; let i = 0;
    while (j < arr.length) {
        if (arr[j] < 0) {
            q.push(j);
        }
        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            while (q[0] < i) {
                q.shift();
            }
            
            if (q.length){
                res.push(arr[q[0]]);              
            }
            else
                res.push(0);
            i++;
            j++;
        }
    }
}

// Driver code

let arr = [-12, -1, -7, 8, -15, 30, 16, 28];
let n = arr.length;
let k = 3;
printFirstNegativeInteger(arr, k, n);
console.log(res);