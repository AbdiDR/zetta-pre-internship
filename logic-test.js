
/**
 * write a function that returns true if there's duplicate in the array, and false otherwise.
 * SEE EXAMPLE BELLOW!
 * 
 * 
Example
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

 * Determines if the array contains any duplicate value.

 * @param {number[]} nums - The input array of integers.
 * @return {boolean} Returns true if the array contains any duplicate value, false otherwise.
 */
function containDuplicate(nums) {
    // Your logic here
    for (let i = 0; i < nums.length / 2; i++) {
        for (let j = nums.length; j > nums.length / 2; j--) {
            if (nums[i] == nums[j]) {
                return true
            }
        }
    }
    return false
}
const currentDate = new Date();
currentDate.setMonth(currentDate.getMonth() + 1);
//Example
console.log(containDuplicate([1, 2, 3, 1])); // Output: true
console.log(containDuplicate([1, 2, 3, 4])); // Output: false
console.log(currentDate); // Output: true