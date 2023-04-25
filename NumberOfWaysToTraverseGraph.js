function numberOfWaysToTraverseGraph(width, height) {
  
	let dp = new Array(width+1);
	for (let j =0; j< width+1; j++){
		dp[j] = new Array(height+1);
	}
	dp[0][0]=0;
  return	countways(0, 0, dp);

function countways(i, j, dp){
	
	for(let i=0; i< width+1; i++){
		for(let j=0; j< height+1; j++){
			if(i==0 && j==0) dp[i][j] =1;
			else
			  {
					let up=0, left =0;
					if(i>0)  up = dp[i-1][j];
					if(j>0) left = dp[i][j-1];
					dp[i][j] =up + left;
				}
		}
	}
	
	return dp[width-1][height-1];

}
}
//	Do not edit the line below.
exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;

//2 recursive

function numberOfWaysToTraverseGraph(width, height) {
    // Write your code here.
      let dp = new Array(width+1);
      for (let j =0; j< width+1; j++){
          dp[j] = new Array(height+1);
      }
      for(let i=0; i< width+1; i++){
          for(let j=0; j< height+1; j++){
              dp[i][j]=-1;
          }
      }
    return	countways(0, 0, dp);
  
  function countways(i, j, dp){
      if(i=== width-1 && j === height-1)
          return 1 ;
      if(i>= width || j>= height)
          return 0;
      if(dp[i][j]!=-1) return dp[i][j];
      return dp[i][j] =countways(i+1, j, dp) + countways(i, j+1, dp);
  }
  }
  // Do not edit the line below.
  exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;
  