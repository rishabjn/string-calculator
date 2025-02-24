import { add } from "./stringCalculator";
import { NegativeNumberError } from "./util";

test("Testcase 1: adds single number", () => {
  expect(add("1")).toBe(1);
});

test("Testcase 2: adds two comma separated numbers", () => {
  expect(add("1,34")).toBe(35);
});

test("Testcase 3: number input as empty string", () => {
  expect(add("")).toBe(0);
});

test("Testcase 4: number input with newline character as delimiter", () => {
  expect(add("23\n34")).toBe(57);
});

test("Testcase 5: number input with newline character and comma as delimiter", () => {
  expect(add("2,3\n3,4")).toBe(12);
});

test("Testcase 5: number input with only newline character delimiter and no numbers", () => {
  expect(add("\n")).toBe(NaN);
}); 

test("Testcase 6: number input to throw exception/error when negative number input supplied", () => {
  expect(() => add("-1,3")).toThrow(NegativeNumberError);
}); 
