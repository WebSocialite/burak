function getPositive(arr: number[]) {
    const positiveValues = arr.filter(num => num > 0);
    const result = positiveValues.join('');

    return result;
}
const inputArray = [1, -4, 2];
const result = getPositive(inputArray);
console.log(result); // Output: "12"