/* Project Standards: 
-Logging standards
-Naming standards
Function, method, variable => CAMEL case
class => PASCAL case
folder => KEBAB case
css => SNAKE case
*/
/* 
   *** COOCKIES ***
   request join, har bitta requestga qo'shiladi

*/





        //    TASK P
        //    TASK O
        //    TASK N
        //    TASK M
        //    TASK L
        //    TASK K
        //    TASK J
        function findLongestWord(str: string) {
                const words = str.split(' ');
                let longestWord = '';
                let maxLength = 0;
       
                for (const word of words) {
                 if (word.length > maxLength) {
            longestWord = word;
         maxLength = word.length;
                    }
                }
              return longestWord;
            }
            const inputString = "I come from Uzbekistan";
            const longestWord = findLongestWord(inputString);
            console.log(longestWord);
      
      
      
      
      
        // //    TASK I
        // function getDigits(inputString: string) {
        //     const digitsArray = inputString.match(/\d/g);
            
        //     return digitsArray ? digitsArray.join('') : '';
        // }
        // const inputString = "m14i1t";
        // const result = getDigits(inputString);
        // console.log(result);





//         //    TASK H
// function getPositive(arr: number[]) {
//     const positiveValues = arr.filter(num => num > 0);
//     const result = positiveValues.join('');

//     return result;
// }
// const inputArray = [1, -4, 2];
// const result = getPositive(inputArray);
// console.log(result); // Output: "12"