
/*
* Input: a string of comma-separated numbers
* Output: an integer, sum of the numbers
*/

export function add(numbers: string): number {
    let result = 0;
    
    const numArray = numbers.split(",").map(num => parseInt(num, 10))
    result = numArray.reduce((sum, num) => sum + num, 0);
    return result
}

const inputString = "1,34" // Enter your string result

console.log(add(inputString)) //Logs the result on terminal