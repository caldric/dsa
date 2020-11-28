function same(arr1, arr2) {
  const obj2 = {};
  for (const num of arr2) {
    obj2[num] = true;
  }

  console.log(obj2);

  for (const num of arr1) {
    if (!(num ** 2 in obj2)) {
      return false;
    }
  }

  return true;
}

// Test 1
let arr1 = [4, 2, 1, 3];
let arr2 = [1, 4, 9, 16];
console.log(same(arr1, arr2));

// Test 2
arr1 = [4, 2, 1];
arr2 = [4, 9, 16];
console.log(same(arr1, arr2));
