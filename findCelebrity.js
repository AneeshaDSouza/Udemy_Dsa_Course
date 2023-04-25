/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
 const solution = knows => {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return n => {
      // base case
      if (n <= 0) return -1;
      if (n == 1) return 0;
  
      const stack = [];
  
      // put all people to the stack
      for (let i = 0; i < n; i++) {
        stack.push(i);
      }
  
      let a = 0;
      let b = 0;
  
      while (stack.length >= 2) {
        a = stack.pop();
        b = stack.pop();
  
        if (knows(a, b)) {
          // a knows b, so a is not the celebrity, but b may be
          stack.push(b);
        } else {
          // a doesn't know b, so b is not the celebrity, but a may be
          stack.push(a);
        }
      }
  
      // double check the potiential celebrity
      let c = stack.pop();
  
      for (let i = 0; i < n; i++) {
        // c should not know anyone else
        if (i !== c && (knows(c, i) || !knows(i, c))) {
          return -1;
        }
      }
  
      return c;
    };
  };
  
  export { solution };


  //2
  //https://leetcode.libaoj.in/find-the-celebrity.html

  //3 geekforgeeks

  
 
// JavaScript program to find celebrity
 
    // Max # of persons in the party
      var N = 8;
 
    // Person with 2 is celebrity
    var MATRIX = [ [ 0, 0, 1, 0 ],
                   [ 0, 0, 1, 0 ],
                   [ 0, 0, 0, 0 ],
                   [ 0, 0, 1, 0 ] ];
 
    function knows(a , b) {
        return MATRIX[a][b];
    }
 
    // Returns -1 if celebrity
    // is not present. If present,
    // returns id (value from 0 to n-1).
    function findCelebrity(n) {
 
        // the graph needs not be constructed
        // as the edges can be found by
        // using knows function
 
        // degree array;
        var indegree = Array(n).fill(0);
        var outdegree = Array(n).fill(0);
 
        // query for all edges
        for (var i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                var x = knows(i, j);
 
                // set the degrees
                outdegree[i] += x;
                indegree[j] += x;
            }
        }
 
        // find a person with indegree n-1
        // and out degree 0
        for (i = 0; i < n; i++)
            if (indegree[i] == n - 1 && outdegree[i] == 0)
                return i;
 
        return -1;
    }
 
    // Driver code
     
        var n = 4;
        var id = findCelebrity(n);
        if (id == -1)
            document.write("No celebrity");
        else
            document.write("Celebrity ID " + id);
 
// This code is contributed by todaysgaurav
 