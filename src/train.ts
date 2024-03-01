/* Project Standards: 
-Logging standards
-Naming standards
Function, method, variable => CAMEL case
class => PASCAL case
folder => KEBAB case
css => SNAKE case
*/





        //    TASK H
function getPositive(arr: number[]) {
    const positiveValues = arr.filter(num => num > 0);
    const result = positiveValues.join('');

    return result;
}
const inputArray = [1, -4, 2];
const result = getPositive(inputArray);
console.log(result); // Output: "12"