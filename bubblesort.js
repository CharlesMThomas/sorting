function bubbleSort(arr) {

  for(let i = arr.length - 1; i >= 0; i--) {

    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[j+1]) {
        let smaller = arr[j+1];
        let larger = arr[j];

        arr[j] = smaller;
        arr[j+1] = larger;
      }
    }

  }

  return arr;
}
