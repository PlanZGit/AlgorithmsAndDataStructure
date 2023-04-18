// Problem - given an array of n elements and a target element t,
// find the index of t in the array.
// Return -1 if the target element is not found.

function linearSearch(n, target) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] === target) {
      return i;
    }
  }
  return -1;
}

function linearSearch2(n, target) {
  let result = -1;
  n.map((ele, index) => {
    if (ele === target) {
      result = index;
    }
  });

  return result;
}

let array = [-5, 2, 10, 4, 6];
console.log(linearSearch(array, 10));
console.log(linearSearch(array, 6));
console.log(linearSearch(array, 20));

console.log(linearSearch2(array, 10));
console.log(linearSearch2(array, 6));
console.log(linearSearch2(array, 20));
