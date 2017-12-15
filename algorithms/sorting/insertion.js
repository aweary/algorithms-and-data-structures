/**
 * Insertion sort is an in-place, comparison sort with
 * a worst-case and average running time of O(n^2). It can
 * run in O(n) in the best case (an already-sorted array).
 * It can be effecient for arrays of almost-sorted data,
 * with a runtime of O(nk) when each element is
 * no more than k places away from its sorted position.
 * @param {Array}
 */
export default function insertionSort(array) {
  // For every item in the array (O(n))...
  for (var i = 0; i < array.length; i++) {
    // Use another index pointer to track our position
    // as we traverse back towards the front of the array
    // which contains already sorted items.
    var j = i;
    // Keep iterating while the second index pointer is greater
    // than zero, indicating that there is an item before it
    // that can potentially be swapped. Also ensure that
    // the item is _less than_ the item before it, assuming
    // we are sorting in ascending order.
    while (j > 0 && array[j] < array[j - 1]) {
      swap(array, j, --j);
    }
  }
}

// Small utility function for swapping the item in array
// at index i with the item at index j.
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
