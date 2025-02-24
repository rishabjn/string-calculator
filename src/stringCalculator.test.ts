import { add } from "./stringCalculator";



test("Test 1: adds single number", () => {
  expect(add("1")).toBe(1);
});


test("Test 2: adds two comma seprated numbers", () => {
  expect(add("1,34")).toBe(35);
});

test("Test 3: number input as empty string", () => {
  expect(add("")).toBe(0);
});