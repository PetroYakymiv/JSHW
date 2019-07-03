//1. Build a function that does currency converter from USD to UAH (1 USD = 8 UAH).

function convert(amount) {  
  return amount*8; 
}
convert(2) // 16

//2. A function which returns reversed string.

function reverse(str) { 
  return str.split("").reverse().join("")
}
reverse('abc') // 'cba'

//3. A function which prints the stair picture of size n.

function printStairs(n) {
  let str = "#";
    for (let i = 0; i < n; i++) {
        console.log(str);
        str += "#";
    }
}
printStairs(3)

//4. A function which returns total sum of a range.

function sumRange(start, end) { 
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    };    
    return sum;    
    }
sumRange(2, 4) // 9
sumRange(-1, 3) // 5

//5. Write a function which returns the smallest of three numbers.

function min(a, b, c)
{ 
return (a < b && a < c) ? a : (a < b && a > c) ? c : b
}
min(10, 5, 11) // 5
   console.log('min', min(10, 5, 11));
min(3, 8, 4) // 3
  console.log('min', min(3, 8, 4));

//6. A function which prints the pyramid picture of size n.

function printPyramid(n) {
    for (let i = 0; i < n; i++) {
      let str = '';
      for (let j = 1; j < n-i; j++) {
        str = str + ' ';
      }
      for (let k = 1; k <= (2*i+1); k++) {
        str += '#';
      }
      console.log(str);
    }
  }
printPyramid(3);

//7. A function which transforms first and last letter to uppercase (use built in string’s method).

function firstAndLastToUpper(str) 
{ 
return str.charAt(0).toUpperCase() + str.slice(1, str.length -1) + str.charAt(str.length - 1).toUpperCase();; 
}
firstAndLastToUpper('abc') // 'AbC'

/*8. A function which returns true if string contains ironman or cursor or ostap otherwise returns false. 
The function must be case-insensitive.*/

function cursorCheck(str) { 
    for (let index = 0; index < str.length; index++) {
        if (str.toLowerCase().includes('ostap') || str.toLowerCase().includes('roman')|| str.indexOf('cursor') !== -1) {
            return true
        } else {
            return false
        }     
    }
  }
cursorCheck('Hello I am OstaP') // true
cursorCheck('Superman is here') // false
