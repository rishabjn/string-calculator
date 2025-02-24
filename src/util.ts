export class NegativeNumberError extends Error {
    constructor(negatives: number[]) {
        super(`negative numbers not allowed ${negatives.join(",")}`);
        this.name = "NegativeNumberError";
    }
}