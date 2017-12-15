/**
 * Merge sort is a divide-and-conquer sorting algorithm
 * that uses a recursive merge routine to build up a
 * sorted array from smaller sorted sub-arrays. It has a runtime
 * of O(n log n) in the worst, best, and average case. It is
 * a stable sort (maintains the order of equal items) that can
 * perform well on data that can be effeciently
 * accessed sequentially
 *
 * Mergesort is a great option for sorting linked-lists
 * because it does not rely on random access to elements
 * like heapsort or quicksort does.
 * @param {Array<n>} array 
 */
export default function mergeSort(array) {
  // Empty or single-item arrays are already sorted.
  if (array.length < 2) return array;
  const middle = array.length / 2 | 0;
  // The left slice is between the start and middle
  const left = array.slice(0, middle);
  // The right slice is between the middle and the end
  const right = array.slice(middle, array.length);
  // We recursively call mergeSort with each slice, which
  // will eventually hit the base case when there's only
  // a single item in each array. In that case, it will
  // call merge([a], [b]) and the result will bubble back
  // up the call stack as the recusive calls resolve
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merge takes two sorted arrays and merges
 * them together. It does this using a "two-finger"
 * algorithm where it starts at the beginning of
 * both arrays and moves the index pointer for the
 * array with the smaller item forward on each iteration.
 * 
 * At the end it checks for any items leftover in eather
 * of the arrays and puts them in the sorted array.
 * @param {Array<n>} left 
 * @param {Array<n>} right 
 */
function merge(left, right) {
  const results = [];
  var i = 0;
  var j = 0;
  // Walk both subarrays while they both have elements
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      results.push(left[i++]);
    } else {
      results.push(right[j++]);
    }
  }
  // Drain remaining elements from the left subarray
  while (i < left.length) {
    results.push(left[i++]);
  }
  // Drain remaining elements from the right subarray
  while (j < right.length) {
    results.push(right[j++]);
  }
  // Return the merged sorted union of both subarrays
  return results;
}