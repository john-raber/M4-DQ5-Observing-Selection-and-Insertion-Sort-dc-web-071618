function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let minValue = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValue]) {
        minValue = j;
      }
    }
    if (i != minValue) {
      let heldValue = arr[i];
      arr[i] = arr[minValue];
      arr[minValue] = heldValue;
    }
  }
}
