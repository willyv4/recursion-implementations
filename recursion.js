/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length < 1) return 1;

  let removed = nums.pop();
  let total = product(nums);

  total *= removed;

  return total;
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length < 2) return words[0].length;

  words[0].length > words[1].length ? words.splice(1, 1) : words.splice(0, 1);

  return longest(words);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, count = 0, arr = []) {
  if (typeof str === "string") str = str.split("");

  if (count <= str.length - 1) {
    if (count % 2 === 0) arr.push(str[count]);

    return everyOther(str, count + 1, arr);
  }

  return arr.join("");
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, size = str.length - 1, revArr = []) {
  const letters = str.split("");

  if (size >= 0) {
    revArr.push(letters[size]);
    isPalindrome(str, size - 1, revArr);
  }

  return revArr.join("") === str ? true : false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (arr[idx] === val) return idx;

  return idx <= arr.length ? findIndex(arr, val, idx + 1) : -1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, size = str.length - 1, revArr = []) {
  const letters = str.split("");

  if (size >= 0) {
    revArr.push(letters[size]);
    return revString(str, size - 1, revArr);
  }

  return revArr.join("");
}

/** gatherStrings: given an object, return an array of all of the string values. */

const nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz",
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!",
        },
      },
    },
    favoriteString: "nice!",
  },
};

function gatherStrings(obj, arr = []) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      arr = gatherStrings(obj[key], arr);
    }
  }

  return arr;
}

gatherStrings(nestedObj);

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  let middle = Math.floor((left + right) / 2);

  if (arr[middle] === val) return middle;

  if (val > arr[middle]) {
    return binarySearch(arr, val, middle + 1, right);
  } else if (val < arr[middle]) {
    return binarySearch(arr, val, left, middle - 1);
  }
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 10);

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
