// pointer pattern , sorted array to see if the average value exists with the/
//given targer average

function averagePair(arr,targetavg){
    let pointer1 = 0;
   if(arr.length === 0) return false;
   let pointer2 = arr.length-1;
  // let avg = (arr[0]+arr[1])/2;
   
  while(pointer1< pointer2){
     let  avg = (arr[pointer1]+ arr[pointer2])/2;
     if(avg <targetavg){
         pointer1 ++;
     } else if( avg > targetavg)
     { 
         pointer2--;
     }
     else{
         return true;
     }

   }
   return false;
  // add whatever parameters you deem necessary - good luck!
}

console.log(averagePair([2,3,5,6,7],4));
