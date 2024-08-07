// /* Project Standards: 
// -Logging standards
// -Naming standards
// Function, method, variable => CAMEL case
// class => PASCAL case
// folder => KEBAB case
// css => SNAKE case
// */
// /* 
//    *** COOCKIES ***
//    request join, har bitta requestga qo'shiladi

// */
// // (1)  VALIDATIONS: 4 TYPES
// // 1. FrontEND validation 
// // 2. Backend Validation
// // 3. Database Validation
// // 4 Pipe validation

/** PM2 COMMANDS:
 pm2 ls 
 pm2 start dist/server.js --name=...
 pm2 start "npm run start:prod" --name=...
 pm2 stop id
 pm2 delete id
 pm2 restart id
 pm2 monit 
 pm2 kill
 *  */ 



/**                              ZZ TASK   */
/**                              ZY TASK   */
/**                              ZX TASK   */
/**                              ZW TASK   */
/**                              ZV TASK   */

function moveZeroes(nums: number[]): number[] {
    let nonZeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}
console.log(moveZeroes([0, 1, 0, 3, 12])); 





/**                              ZU TASK   */

// function sumOfUnique(arr: number[]): number {
//     const numCount: { [key: number]: number } = {};
//     for (let num of arr) {
//         numCount[num] = (numCount[num] || 0) + 1;
//     }

//     let sum = 0;
//     for (let num in numCount) {
//         if (numCount[num] === 1) {
//             sum += parseInt(num);
//         }
//     }

//     return sum;
// }
// const result = sumOfUnique([1, 2, 3, 2]);
// console.log(result);


/**                              ZT TASK   */
// function firstUniqueCharIndex(str: string): number {
//     const charCount: { [key: string]: number } = {};

//     for (let char of str) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     for (let i = 0; i < str.length; i++) {
//         if (charCount[str[i]] === 1) {
//             return i;
//         }
//     }

//     return -1;
// }

// const result = firstUniqueCharIndex("stamp");
// console.log(result); 




/**                              ZS TASK   */


// function singleNumber(arr: number[]): number | undefined {
//     if (arr.length === 0) {
//         return undefined; 
//     }
//     return arr[0];
// }

// const result = singleNumber([4, 2, 1, 2, 1]);
// console.log(result); 

/**                              ZR TASK   */

// function countNumberAndLetters(input: string): { number: number; letter: number } {
//     let numberCount = 0;
//     let letterCount = 0;

//     for (const char of input) {
//         if (/[0-9]/.test(char)) {
//             numberCount++;
//         } else if (/[a-zA-Z]/.test(char)) {
//             letterCount++;
//         }
//     }

//     return { number: numberCount, letter: letterCount };
// }

// const result = countNumberAndLetters("string152%¥");
// console.log(result);



/**                              ZQ TASK   */
// function findDuplicates(arr: number[]): number[] {
//   const countMap: { [key: number]: number } = {};
//   const duplicates: number[] = [];

//   for (const num of arr) {
//       if (countMap[num]) {
//           countMap[num]++;
//       } else {
//           countMap[num] = 1;
//       }
//   }
//   for (const num in countMap) {
//       if (countMap[num] > 1) {
//           duplicates.push(Number(num));
//       }
//   }

//   return duplicates;
// }

// const result = findDuplicates([1, 2, 3, 4, 5, 4, 3, 4]);
// console.log(result);




/**                              ZP TASK   */
// function majorityElement(arr: number[]) {
//     const countMap = new Map();
  
//     for (const num of arr) {
//       countMap.set(num, (countMap.get(num) || 0) + 1);
//     }
  
//     let majorityElement = null;
//     let maxCount = 0;
  
//     for (const [num, count] of countMap) {
//       if (count > maxCount) {
//         maxCount = count;
//         majorityElement = num;
//       }
//     }
  
//     return majorityElement;}

//   console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); 
  



/**                              ZO TASK   */


// function areParenthesesBalanced(s: string): boolean {
//   let count = 0;
  
//   for (const char of s) {
//       if (char === '(') {
//           count++;
//       } else if (char === ')') {
//           count--;
//       }
//       if (count < 0) {
//           return false;
//       }
//   }
//   return count === 0;
// }

// console.log(areParenthesesBalanced("number of (parentheses) in string()() in balance"));
// console.log(areParenthesesBalanced("(a(b)c)")); 
// console.log(areParenthesesBalanced("((a)b)c)")); 
// console.log(areParenthesesBalanced("((a)b(c)"));



/**                              ZN TASK   */

// function rotateArray(arr: any[], index: number): any[] {
//   const rotatedArray = [...arr.slice(-index), ...arr.slice(0, -index)];
//   return rotatedArray;
// }

// const rotated = rotateArray([1, 2, 3, 4, 5, 6], 3);
// console.log(rotated);


// /**                              ZM TASK   */

// function reverseInteger(num: number): number {
//   const reversedNum: number = parseInt(num.toString().split('').reverse().join(''));
//   return reversedNum;
// }

// const result: number = reverseInteger(123456789);
// console.log(result); 



/**                              ZL TASK   */

// function stringToKebab(str: string): string {
//     return str.toLowerCase().replace(/\s+/g, '-');
//   }
  
//   console.log(stringToKebab("I love Kebab"));
  
/**                              ZK TASK   */
// function printNumbers(): void {
//     let count = 1;
//     const intervalId = setInterval(() => {
//         console.log(count);
//         count++;
//         if (count > 5) {
//             clearInterval(intervalId); 
//           }
//     }, 1000); 
// }

// printNumbers();


/**                              ZJ TASK   */
// function reduceNestedArray(arr: (number | any[])[]): number {
//     let sum = 0;
//     for (const element of arr) {
//         if (Array.isArray(element)) {
//             sum += reduceNestedArray(element);
//         } else if (typeof element === 'number') {
//             sum += element;
//         }
//     }
//     return sum;
// }

// const result = reduceNestedArray([1, [1, 2, [4]]]);
// console.log("result=>", result);

/**                              ZI TASK   */

// function delayHelloWorld(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello World");
//         }, 3000); // 3 seconds delay
//     });
// }

// // Example usage:
// delayHelloWorld().then((result) => {
//     console.log("result:", result); 
// });


/**                              ZH TASK   */
// function findDisappearedNumbers(nums: number[]): number[] {
//     const numSet = new Set(nums);
//     const maxNum = Math.max(...nums);
//     const disappearedNumbers: number[] = [];
    
//     for (let i = 1; i <= maxNum; i++) {
//         if (!numSet.has(i)) {
//             disappearedNumbers.push(i);
//         }
//     }
    
//     return disappearedNumbers;
// }
// const result = findDisappearedNumbers([1, 3, 4, 7]);
// console.log("result:", result); 


/**                              ZG TASK   */

// function stringToSnakeCase(str: string): string {
//     const words = str.split(' ');

//     // Joining the words in the array using underscores ('_')
//     const snakeCaseString = words.join('_');

//     // Convert the result to lowercase
//     return snakeCaseString.toLowerCase();
// }

// const result = stringToSnakeCase('name should be a string');
// console.log(result);



/**                              ZF TASK   */
// function capitalizeWords(str: string): string {
//     return str.split(' ').map(word => {
//         if (word.length <= 2) {
//             return word.toLowerCase();
//         } else {
//             return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//         }
//     }).join(' ');
// }

// const result = capitalizeWords('name should be a string');
// console.log("result=>", result);

/**                              ZE TASK   */

// function removeDuplicate(str: string): string {
//     return [...new Set(str)].join('');
// }

// // Example usage:
// const result = removeDuplicate('stringg');
// console.log("result:", result); 

/**                              ZD TASK   */

// function changeNumberInArray(indexToFind: number, arr: number[], 
//     replacement: number): number[] {
//     const index = arr.indexOf(indexToFind);
//     if (index !== -1) {
//         arr[index] = replacement;
//     }
//     return arr;
// }

// const result = changeNumberInArray(1, [1, 3, 7, 2], 2);
// console.log("result:", result); 

// /**                              ZC TASK   */
// function celsiusToFahrenheit(celsius: number): number {
//     return (celsius * 9/5) + 32;
// }

// const fahrenheitValue = celsiusToFahrenheit(0);
// console.log("fahrenheitvalue:", fahrenheitValue); 


// /**                              ZB TASK   */

// function randomBetween(min: number, max: number): number {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// const randomNumber = randomBetween(30, 50);
// console.log(randomNumber); 

// /**                           ZA TASK */
// interface Person {
//     age: number;
// }
// function sortByAge(people: Person[]): Person[] {
//     return people.sort((a, b) => a.age - b.age);
// }
// const people: Person[] = [{ age: 23 }, { age: 21 }, { age: 13 }],
//  sortedPeople = sortByAge(people);
// console.log(sortedPeople); 






















// //**                   TASK Z            */

// function sumEvens(nums: number[]): number {
//     let sum = 0;

//     for (const num of nums) {
//         if (num % 2 === 0) {
//             sum += num;
//         }
//     }

//     return sum;
// }

// const result4 = sumEvens([1, 2, 3]);
// console.log(result4);






//                       // TASK Y
// function findIntersection(arr1: any[], arr2: any[]): any[] {

//     return arr1.filter(item => arr2.includes(item));
// }

// const result3 = findIntersection([1, 2, 3], [3, 2, 0]);
// console.log(result3);





//                       // TASK X 

// function countOccurrences(obj: any, str: string): number {
//     let count = 0;

//     function traverseObject(obj: any) {
//         for (const key in obj) {
//            if (key === str) {
//                 count++;
//             }
           
//             if (typeof obj[key] === 'object') {
//                 traverseObject(obj[key]);
//             }
//         }
//     }

//     traverseObject(obj);

//     return count;
// }

// const obj = { model: 'Bugatti', steer: { model: 'HANKOOK', size: 30 } };
// const result2 = countOccurrences(obj, 'model');
// console.log(result2); 


//                         // TASK W 
//   function chunkArray(arr: any[], size: number): any[][] {
//   const chunks: any[][] = [];
//   let i = 0;
//   while (i < arr.length) {
//   chunks.push(arr.slice(i, i + size));
//   i += size;
//   }
                      
//   return chunks;
//   }
                      
// const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
//   console.log(result); 



//                         // TASK V
//                         function countChars(str: string): { [key: string]: number } {
//     const charCount: { [key: string]: number } = {};
//     for (const char of str) {
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//       }
//     return charCount;
// }
// const result1 = countChars("SALOM");
// console.log(result1);




//                         // TASK U



//     function sumOdds(num: number): number {
//       let count: number = 0;
//   for (let i = 0; i <= num; i++) {
//            if (i % 2 !== 0) {
//      count++;
//        }
//       }
//        return count;
//     }
//   console.log(sumOdds(9)); 
//   console.log(sumOdds(11)); 

//                         // TASK T
//        function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//         const mergedArray = [...arr1, ...arr2]; 
//         mergedArray.sort((a, b) => a - b); 
//          return mergedArray;
//           }
                        
  
//       console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));





//     // TASK S
//     // const missingNumber = (arr: number[]) => {
//     //     const sortedArr = arr.sort((a, b) => a - b);
//     //     for (let i = 0; i < sortedArr.length; i++) {
//     //       if (sortedArr[i] !== sortedArr[i + 1] - 1) {
//     //         return sortedArr[i] + 1;
//     //       }
//     //     }
//     //   };
      
//     //   const result = missingNumber([3, 0, 1]);
//     //   console.log("result => ", result);
// //    // TASK R

// //    function calculate(str: string) {
// //       const numbers = str.split('+');
      
// //       const sum = numbers.reduce((acc: number, num: string) => acc + parseInt(num), 0);
      
// //       return sum;
// //   }

// //   console.log(calculate("1+3")); 
// //   console.log(calculate("10+20")); 
  


// // // task Q

// // function hasProperty(obj: { name?: string; model?: string; hasOwnProperty?: any; }, property: string) {
// //     return obj.hasOwnProperty(property);
// // }

// // // Test cases
// // console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // Output: true
// // console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));  // Output: false








// //         // //    TASK P
// //         // function objectToArray(obj: { [s: string]: unknown; } | ArrayLike<unknown>) {
// //         //     return Object.entries(obj);
// //         // }
        
// //         // // Test the function
// //         // console.log(objectToArray({ a: 10, b: 20 })); 

// //         //    TASK O
// //         // function calculateSumOfNumbers(arr: string | any[]) {
// //         //     let sum = 0;
        
// //         //     for (let i = 0; i < arr.length; i++) {
// //         //         if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
// //         //             sum += arr[i];
// //         //         }
// //         //     }
        
// //         //     return sum;
// //         // }
        
// //         // console.log(calculateSumOfNumbers([10, "10", {number: 10}, true, 35])); 







// //         //    TASK N

// //         // function palindromeCheck(str: string) {
          
// //         //     const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        
            
// //         //     return cleanedStr === cleanedStr.split('').reverse().join('');
// //         // }
        
        
// //         // console.log(palindromeCheck("dad"));
// //         // console.log(palindromeCheck("son")); 




// //         //    TASK M
// //         // function getSquareNumbers(numbers: number[]) {
// //         //     const result = [];

// //         //     for (const number of numbers) {
// //         //         const square = number ** 2;
// //         //         const smallerNumber = Math.min(number, square);
// //         //         const largerNumber = Math.max(number, square);
        
// //         //           result.push({ number: smallerNumber, square: largerNumber });
// //         //     }
// //         //     return result;
// //         // }
        

// //         // const inputArray = [1, 2, 3];
// //         // const squareNumbers = getSquareNumbers(inputArray);
// //         // console.log(squareNumbers);

// //         //    TASK L

// //         // function reverseSentence(sentence: string) {
// //         //     const words = sentence.split(' ');
// //         //     const reversedWords = words.map((word: string) => word.split('').reverse().join(''));
// //         //     const reversedSentence = reversedWords.join(' ');
        
// //         //     return reversedSentence;
// //         // }
       
// //         // const inputSentence = "we like coding!";
// //         // const reversedResult = reverseSentence(inputSentence);
// //         // console.log(reversedResult);





// //         // //    TASK K
// //         // function countVowels(string: string) {
// //         //         const vowels = "aeiouAEIOU";
// //         //         let count = 0;
// //         //         for (let char of string) {
// //         //             if (vowels.includes(char)) {
// //         //                 count++;
// //         //             }
// //         //         }
// //         //         return count;
// //         //     }
           
// //         //     let result = countVowels("string");
// //         //     console.log(result); 






// //         //    TASK J
// //         // function findLongestWord(str: string) {
// //         //         const words = str.split(' ');
// //         //         let longestWord = '';
// //         //         let maxLength = 0;
       
// //         //         for (const word of words) {
// //         //          if (word.length > maxLength) {
// //         //     longestWord = word;
// //         //  maxLength = word.length;
// //         //             }
// //         //         }
// //         //       return longestWord;
// //         //     }
// //         //     const inputString = "I come from Uzbekistan";
// //         //     const longestWord = findLongestWord(inputString);
// //         //     console.log(longestWord);
      
      
      
      
      
// //         // //    TASK I
// //         // function getDigits(inputString: string) {
// //         //     const digitsArray = inputString.match(/\d/g);
            
// //         //     return digitsArray ? digitsArray.join('') : '';
// //         // }
// //         // const inputString = "m14i1t";
// //         // const result = getDigits(inputString);
// //         // console.log(result);





// // //         //    TASK H
// // // function getPositive(arr: number[]) {
// // //     const positiveValues = arr.filter(num => num > 0);
// // //     const result = positiveValues.join('');

// // //     return result;
// // // }
// // // const inputArray = [1, -4, 2];
// // // const result = getPositive(inputArray);
// // // console.log(result); // Output: "12"