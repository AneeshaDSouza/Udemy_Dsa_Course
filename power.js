
//accespts base and exponenet
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp){
    
    if(exp === 0) return 1;
    
    return base * power (base, exp-1);
    
}

//factorial
function factorial(num){
    if(num<0) return 0;
    if( num ===0) return 1;
    
    return num* factorial(num-1)
   
}
//product of array

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr){
    
    if(arr.length ===0) return 1;
    
    return arr[0]* productOfArray(arr.slice(1));
    
    
}

//recursive range
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
   if(num ===1) return 1;
   return num+recursiveRange(num-1);
}
