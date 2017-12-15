import insertionSort from "../sorting/insertion";
import mergeSort from "../sorting/mergesort";
import quickSort from "../sorting/quicksort";
import { fuzzySortAssert } from "../util";

describe("Sorting Algorithms", () => {
  it("insertion sort", () => {
    fuzzySortAssert(insertionSort, true);
  });
  it("mergesort", () => {
    fuzzySortAssert(mergeSort);
  });
  it.only("quicksort", () => {
    fuzzySortAssert(quickSort, true);
  });
});
