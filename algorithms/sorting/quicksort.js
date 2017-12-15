// @flow

export default function quicksort<T>(array: Array<T>): void {
  // Don't sort arrays with one or less items
  if (array.length <= 1) return;
  sort(array, 0, array.length - 1);
}

function sort<T>(array: Array<T>, low: number, hi: number): void {
  if (low >= hi) return;
  const index = partition(array, low, hi);
  if (low < index - 1) {
    // sort(array, low, index - 1);
  }
  if (index + 1 < hi) {
    sort(array, index + 1, hi);
  }
}

function partition<T>(array: Array<T>, low: number, hi: number) {
  // We always use the midpoint as the pivot
  const pivot: T = array[Math.floor((low + hi) / 2)];
  // Iterate through items low - hi
  while (low < hi) {
    // Move the low index pointer up while the item
    // at that index is smaller than our pivot.
    // $FlowFixMe array[low] should be of type T?
    while (array[low] < pivot) {
      low++;
    }

    // Move the hi index pointer down while the item
    // at the index is already greater than our pivot.
    // $FlowFixMe T is comparable
    while (array[hi] > pivot) {
      hi--;
    }

    if (low < hi) {
      swap(array, low, hi);
    }
  }
  return low;
}

function swap<T>(array: Array<T>, i: number, j: number): void {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// export default function quicksort<T>(array: Array<T>): void {
//   sort(array, 0, array.length - 1);
// }

// function sort(array, low, hi) {
//   // Don't sort empty arrays!
//   if (array.length <= 1) return array;
//   const index = partition(array, low, hi);
//   // console.log({ low, hi, index });
//   if (low < index - 1) {
//     sort(array, low, index - 1);
//   }
//   if (index < hi) {
//     sort(array, index, hi);
//   }
// }

// function partition(array, low, hi) {
//   // Choose the middle item as the pivot
//   // console.log({ array: [...array], low, hi });
//   const pivot = array[((low + hi) / 2) | 0];
//   // Iterate through items low - hi
//   while (low <= hi) {
//     // Move the low index pointer up while
//     // the items are less than the pivot.
//     while (array[low] < pivot) {
//       low++;
//     }
//     // Move the hi index pointer down while
//     // the items are greater than the pivot
//     while (array[hi] > pivot) {
//       hi--;
//     }
//     // Start swapping if we need to
//     if (low < hi) {
//       swap(array, low++, hi--);
//     }
//   }
//   // @TODO why does this return low?
//   return low;
// }

// function swap(array, i, j) {
//   const temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }
