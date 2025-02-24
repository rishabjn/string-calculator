import { add } from "./stringCalculator";
import { NegativeNumberError } from "./util";

test("Testcase 1: adds single number", () => {
  expect(add("1")).toBe(1);
});

test("Testcase 2: adds two comma(,) separated numbers", () => {
  expect(add("1,34")).toBe(35);
});

test("Testcase 3: number input as empty string", () => {
  expect(add("")).toBe(0);
});

test("Testcase 4: supports newline character(\n) as delimiter", () => {
  expect(add("23\n34")).toBe(57);
});

test("Testcase 5: supports newline character(\n) and comma(,) as delimiter", () => {
  expect(add("2,3\n3,4")).toBe(12);
});

test("Testcase 5: supports newline character delimiter and no numbers", () => {
  expect(add("\n")).toBe(NaN);
});

test("Testcase 6: supports throw exception/error when negative number", () => {
  expect(() => add("-1,3")).toThrow(NegativeNumberError);
});

test("Testcase 7: supports throws error for negative numbers", () => {
  expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
});


test("Testcase 8: supports semicolon (;) as delimiter", () => {
  expect(add("//;\n1;2;3")).toBe(6);
});

test("Testcase 9: supports hyphen (-) as delimiter", () => {
  expect(add("//-\n1-2-3")).toBe(6);
});

test("Testcase 10: supports pipe (|) as delimiter", () => {
  expect(add("//|\n1|2|3|4")).toBe(10);
});

