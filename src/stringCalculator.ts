import { NegativeNumberError } from "./util";

/*
* Input: a string of delimiter separated  numbers
* Output: an integer, sum of the numbers
*/
export function add(numbers: string): number {
    
    let result = 0;

    if(numbers === "") return result;
    let delimiter: RegExp = /,|\n/;

    let delimiterMatchRegexExp: RegExpMatchArray | null = numbers.match(/^\/\/(.+)\n/);
    if (delimiterMatchRegexExp) {
        delimiter = new RegExp(delimiterMatchRegexExp[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        numbers = numbers.slice(delimiterMatchRegexExp[0].length);
    }

    const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));
    let negatives: number[] = numArray.filter(num => num < 0);
    
    if (negatives.length) {
        throw new NegativeNumberError(negatives);
    }
    result = numArray.reduce((sum, num) => sum + num, 0);
    return result;
}

const inputString = "1\n3,4" // Enter your string result

console.log(add(inputString)) //Logs the result on terminal