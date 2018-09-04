function binarySearch(arr,l, r, k) {
  if (r < 1) {
    return -1;
  }

  const halfLen = Math.floor((l + r -1) / 2);
  if (arr[halfLen] === k) {
    return halfLen;
  }

  if (arr[halfLen] > k) {
    return binarySearch(arr, l, halfLen - 1, k);
  }

  return binarySearch(arr, halfLen + 1, r, k);
}


console.log(binarySearch([1,2,3,4,5,6], 0, 6, 6));