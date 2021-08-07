/**
    Fermat's factorization method is:
    If a · b = n  (where a ≤ b), then there exist some c and d such that n = c^2 - d^2.
    Your goal is to return for given n such c and d as an array.
    Since we want c and d to be uniquely determined, in all test cases n is a semi-prime number.

    **Example**
    - For n = 15, the output should be
    fermactor(n) = [4, 1].
    15 = 4^2 - 1^2.
    
    **Hints**
    -   Math.pow()
    
    **Input/Output**
    - **[execution time limit] 4 seconds (js)**
    
    - **[input] integer n**
    
    A semi-prime number.
    
    *Guaranteed constraints:*
    
    10 < n < 109.
    
    - **[output] array.integer**
    
    c and d are guaranteed to be integers if the difference between a and b is even. For all test cases, this is true.

*/

function fermactor(number) {
    for (let i = 1; i < number; i++) {
      for (let j = 1; j < i; j++) {
        const total = i ** 2 - j ** 2;  
        if (total === number) {
          return [i, j];
        }      
      }
      
    }
}

console.log(fermactor(15));