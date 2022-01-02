 function Nth_of_AP(a, d, N)
    { 
        // using formula to find the 
        // Nth term t(n) = a(1) + (n-1)*d
        return (a + (N - 1) * d);
       
    }
   
    // Driver code
 
    // starting number
    let a = prompt("Enter number for a"); 
       
    // Common difference
    let d = prompt("Enter number for d"); 
       
    // N th term to be find
    let N = prompt("Enter number for N"); 
       
    // Display the output
    console.log("The "+ N + "th term of the series is : "
    + Nth_of_AP(a,d,N));