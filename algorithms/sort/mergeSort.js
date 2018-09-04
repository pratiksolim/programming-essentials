function merge(leftArr, rightArr, arr) {
  const leftLen = leftArr.length;
  const rightLen = rightArr.length;

  let i = 0, j = 0, k = 0;

  while (i<leftLen && j<rightLen) {
    if(leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  while (i<leftLen) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j<rightLen) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }

  return arr;
}

function mergeSort(arr) {
  const len = arr.length;

  if (len < 2) {
    return arr;
  }

  const midLen = Math.floor(len / 2);
  const leftArr = [];
  const rightArr = [];

  let j = 0;

  for(let i=0; i<=midLen-1; i++) {
    leftArr[j] = arr[i];
    j++;
  }

  let k=0;
  for(let i=midLen; i<=len-1; i++) {
    rightArr[k] = arr[i];
    k++;
  }

  mergeSort(leftArr);
  mergeSort(rightArr);

  return merge(leftArr, rightArr, arr);
}

console.log(mergeSort([3,4,2,1,5]));