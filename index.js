function hasTargetSum(array, target) {
  // Write your algorithm here

  // select the first integer
  for (let i = 0; i < array.length; i++) {
    // select the second integer from the remainder of the array
    for (let j = i + 1; j < array.length; j++) {
      // check if the sum of the two integers is equal to the target
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/*
  I: an array of integers, a target integer
  O: a boolean
  C: 
  E: an array of one number, an empty array, a target of 0, a target of a negative integer
*/

/* 
  Write the Big O time complexity of your function here

  O(n^2)

*/

/* 
  Add your pseudocode here

  1. iterate through the array to select integer 1

  2. for each integer 1, iterate through the remainder of the array to 
  select integer 2

  3. if integer 1 + integer 2 === target, return true
  
  4. if no two integers return a sum equal to the target, return false

*/

/*
  Add written explanation of your solution here

  

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  // what is the return value when the target is not an integer? when there
  // is a non-integer in the array? when there is only one number in the array?

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
