/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, currentMax = 0) {
  // Base case: if the list of words is empty, return the current maximum
  if (words.length === 0) {
    return currentMax;
  }

  // Recursive case: compare the length of the current word with the current maximum
  const currentWordLength = words[0].length;
  const newMax = Math.max(currentMax, currentWordLength);

  // Call the function recursively with the rest of the words and the updated maximum
  return longest(words.slice(1), newMax);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0, result = "") {
  // Base case: if the index exceeds the length of the string, return the result
  if (index >= str.length) {
      return result;
  }

  // Add the character at the current index to the result string
  result += str[index];

  // Recursive case: skip the next character and call the function with the updated index
  return everyOther(str, index + 2, result);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // Base case: if the length is 0 or 1, it's a palindrome
  if (str.length <= 1) {
    return true;
  }

// Compare the first and last characters
if (str[0] === str[str.length - 1]) {
    // Recursive case: check the substring without the first and last characters
    return isPalindrome(str.slice(1, str.length - 1));
  } else {
    // If the first and last characters are different, it's not a palindrome
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  // Base case: if the end of the array is reached and the value is not found, return -1
  if (index === arr.length) {
    return -1;
  }

  // Base case: if the value is found, return the current index
  if (arr[index] === val) {
    return index;
  }

  // Recursive case: continue searching in the rest of the array
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // Base case: if the string is empty or has only one character, it is already reversed
  if (str.length <= 1) {
    return str;
  }

  // Recursive case: return the last character followed by the reversed substring
  return str[str.length - 1] + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];

  for (let key in obj) {
      if (typeof obj[key] === 'string') {
          result.push(obj[key]);
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          // If the value is an object (but not an array), recurse into it
          result = result.concat(gatherStrings(obj[key]));
      }
      // Ignore arrays, as their elements may also be objects
  }

  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

/* function binarySearch(arr, val) {

} */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  // Base case: if the start index is greater than the end index, the value is not in the array
  if (start > end) {
      return -1;
  }

  // Calculate the middle index
  const mid = Math.floor((start + end) / 2);

  // Check if the middle element is equal to the target value
  if (arr[mid] === val) {
      return mid;
  } else if (arr[mid] < val) {
      // If the middle element is less than the target value, search in the right half
      return binarySearch(arr, val, mid + 1, end);
  } else {
      // If the middle element is greater than the target value, search in the left half
      return binarySearch(arr, val, start, mid - 1);
  }
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
