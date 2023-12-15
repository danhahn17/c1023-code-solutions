export function findMaxNumber(arr: number[]): number {
  let maxNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }
  return maxNumber;
}
