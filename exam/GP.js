function Nth_of_GP(a, r, N) 
{ 
    // using formula to find 
    // the Nth term 
    // TN = a1 * r(N-1) 
    return( a * Math.floor(Math.pow(r, N - 1)) ); 
       
} 
   
// Driver code 
  
    // starting number 
    let a = prompt("Enter value for a"); 
       
    // Common ratio 
    let r = prompt("Enter value for r");; 
       
    // N th term to be find 
    let N = prompt("Enter value for N"); 
       
    // Display the output 
    console.log("The "+ N +"th term of the series is : "
        + Nth_of_GP(a, r, N)); 
   