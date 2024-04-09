function hasTargetSum(array, target) {
  // Write your algorithm here
  //First sort the array in an ascending order
  array.sort((a, b) => a - b);

  //Initialize two pointers, one at the beginning and the other one at the end of the array
  let left = 0;
  let right = array.length - 1;

  //Iterate while the pointers do not overlap
  while (left < right) {

    //Calculate the sum of the current pair of numbers on the pointers 
    const sum = array[left] + array[right];

    //Check if the sum equals the target value
    if (sum === target) {
      return true;    //A pair that adds up to the target return true

    } else if (sum < target) {

      //If the sum is less than the target, move the left pointer to the right to increase the sum
      left++;

    } else {

      // If the sum is greater than the target, move the right pointer to the left to decrease the sum
      right--;

    }
  }

  // If there is no pair that adds up to the target, return false
  return false;
}



/* 
  Write the Big O time complexity of your function here
  Time complexity : 0(n log n) this is due to sorting, where n is the number of elements in the array
*/

/* 
  Add your pseudocode here
  1. Sort the array in an ascending order.
  2. Initialize two pointers, left and right, one at the beginning of the array and one at the end of the array.
  3. Iterate while the left pointer is less than the right pointer.
  4. Calculate the sum of the current pair of numbers pointed by left and right pointers.
  5. If the sum equals the target, return true.
  6. If the sum is less than the target, move the left pointer to the right.
  7. If the sum is greater than the target, move the right pointer to the left.
  8. If there is  no pair that adds up to the target, return false.

*/

/*
  Add written explanation of your solution here
  -First sort the array in an ascending order to optimize the search process.
  -Then initialize two pointers, one at the beginning of the array and one at the end of the array.
  -Iterate through the array, checking the sum of the current pair of numbers pointed by the pointers.
  -If the sum of the current pair of numbers,pointed by the left and right pointers, equals the target, return true.
  -If the sum of the current pair of numbers is less than the target, move the left pointer to the right to increase the sum.
  -If the sum of the current pair of numbers is greater than the target, move the right pointer to the left to decrease the sum.
  -If there is no pair of numbers that adds up to the target, return false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1,2,3,4], 5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1,2,3,4], 12));

}

module.exports = hasTargetSum;
