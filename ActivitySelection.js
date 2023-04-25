function printMaxActivities(s,f,n)
    {
        let i, j;
        document.write("Following activities are selected : n");
         
        // The first activity always gets selected
        i = 0;
        document.write(i+" ");
         
        // Consider rest of the activities
        for (j = 1; j < n; j++)
        {
         
             // If this activity has start time greater than or
             // equal to the finish time of previously selected
             // activity, then select it
             if (s[j] >= f[i])
             {
                  document.write(j+" ");
                  i = j;
              }
        }
    }
     
    // Driver program to test above function
    let s = [1, 3, 0, 5, 8, 5]
    let f = [2, 4, 6, 7, 9, 9]
    let n = s.length;
    printMaxActivities(s, f, n);

    //https://www.geeksforgeeks.org/activity-selection-problem-greedy-algo-1/