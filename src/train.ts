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



   // TASK Q

   function calculate(str: string) {
      const numbers = str.split('+');
      
      const sum = numbers.reduce((acc: number, num: string) => acc + parseInt(num), 0);
      
      return sum;
  }

  console.log(calculate("1+3")); 
  console.log(calculate("10+20")); 
  


// task Q

function hasProperty(obj: { name?: string; model?: string; hasOwnProperty?: any; }, property: string) {
    return obj.hasOwnProperty(property);
}

// Test cases
console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // Output: true
console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));  // Output: false








        // //    TASK P
        // function objectToArray(obj: { [s: string]: unknown; } | ArrayLike<unknown>) {
        //     return Object.entries(obj);
        // }
        
        // // Test the function
        // console.log(objectToArray({ a: 10, b: 20 })); 

        //    TASK O
        // function calculateSumOfNumbers(arr: string | any[]) {
        //     let sum = 0;
        
        //     for (let i = 0; i < arr.length; i++) {
        //         if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
        //             sum += arr[i];
        //         }
        //     }
        
        //     return sum;
        // }
        
        // console.log(calculateSumOfNumbers([10, "10", {number: 10}, true, 35])); 







        //    TASK N

        // function palindromeCheck(str: string) {
          
        //     const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        
            
        //     return cleanedStr === cleanedStr.split('').reverse().join('');
        // }
        
        
        // console.log(palindromeCheck("dad"));
        // console.log(palindromeCheck("son")); 




        //    TASK M
        // function getSquareNumbers(numbers: number[]) {
        //     const result = [];

        //     for (const number of numbers) {
        //         const square = number ** 2;
        //         const smallerNumber = Math.min(number, square);
        //         const largerNumber = Math.max(number, square);
        
        //           result.push({ number: smallerNumber, square: largerNumber });
        //     }
        //     return result;
        // }
        

        // const inputArray = [1, 2, 3];
        // const squareNumbers = getSquareNumbers(inputArray);
        // console.log(squareNumbers);

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