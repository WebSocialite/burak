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
// (1)  VALIDATIONS: 4 TYPES
// 1. FrontEND validation 
// 2. Backend Validation
// 3. Database Validation
// 4 Pipe validation





        //    TASK P
        //    TASK O
        //    TASK N
        //    TASK M
        function getSquareNumbers(numbers: number[]) {
            const result = [];

            for (const number of numbers) {
                const square = number ** 2;
                const smallerNumber = Math.min(number, square);
                const largerNumber = Math.max(number, square);
        
                  result.push({ number: smallerNumber, square: largerNumber });
            }
            return result;
        }
        

        const inputArray = [1, 2, 3];
        const squareNumbers = getSquareNumbers(inputArray);
        console.log(squareNumbers);

        //    TASK L

        // function reverseSentence(sentence: string) {
        //     const words = sentence.split(' ');
        //     const reversedWords = words.map((word: string) => word.split('').reverse().join(''));
        //     const reversedSentence = reversedWords.join(' ');
        
        //     return reversedSentence;
        // }
       
        // const inputSentence = "we like coding!";
        // const reversedResult = reverseSentence(inputSentence);
        // console.log(reversedResult);





        // //    TASK K
        // function countVowels(string: string) {
        //         const vowels = "aeiouAEIOU";
        //         let count = 0;
        //         for (let char of string) {
        //             if (vowels.includes(char)) {
        //                 count++;
        //             }
        //         }
        //         return count;
        //     }
           
        //     let result = countVowels("string");
        //     console.log(result); 






        //    TASK J
        // function findLongestWord(str: string) {
        //         const words = str.split(' ');
        //         let longestWord = '';
        //         let maxLength = 0;
       
        //         for (const word of words) {
        //          if (word.length > maxLength) {
        //     longestWord = word;
        //  maxLength = word.length;
        //             }
        //         }
        //       return longestWord;
        //     }
        //     const inputString = "I come from Uzbekistan";
        //     const longestWord = findLongestWord(inputString);
        //     console.log(longestWord);
      
      
      
      
      
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