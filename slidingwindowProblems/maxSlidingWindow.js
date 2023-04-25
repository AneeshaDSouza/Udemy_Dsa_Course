var maxSlidingWindow = function(nums, k) {
    const q = [];  // stores *indices*
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        //basically check the q from back to front and if any element is lesser than
        //the current remove from the queue so that q will have only maximum value stored 
        //than the current eleemnt and the first element will always be the max since
        // we store only max elements
        while (q && nums[q[q.length - 1]] <= nums[i]) {
            q.pop();
        }
        q.push(i);
        // remove first element if it's outside the window
        if (q[0] === i - k) {
            q.shift();
        }
        // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
        if (i >= k - 1) {
            res.push(nums[q[0]]);
        }
    }
    return res;    
};


//aditya verma solution

var maxSlidingWindow = function (arr, k) {
    let res = [];
    let q = [];
    let j = 0; let i = 0;
    if (k === 1) return arr
    while (j < arr.length) {

        while (q && arr[q[q.length - 1]] < arr[j]) {
            q.pop();
        }
        q.push(j)
        if (j - i + 1 < k) {

            j++;
        } else if (j - i + 1 === k) {
            res.push(arr[q[0]]);
            if (q[0] === i)
                q.shift()

            i++;
            j++;
        }
    }
    return res
};