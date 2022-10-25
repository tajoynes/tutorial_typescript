//  Creating a variable and annotate it (describe/explain)
let age: number = 20;

//  Built-in types

//  Annotated with the :type after the variable name
let sales: number = 123_456;
let course: string = "Typescript";
let isPublished: boolean = true;
let level: any;
//  Non-annotated variables
let sales1 = 123_456;
let course1 = "Typescript";
let notPublished = false;
let level1;

// Function example
// Parameter 'document' implicitly has an 'any'
// function render(document) {
//   console.log(document);
// }

//  Arrays with type annotation
let number: number[] = [1, 2, 3, 4, 5];
//  Automatically applies any type annotation
let numbers = [];
// Type annotation
let numberss: number[] = [];

//  Tuples (fixed length array)
// User example
let user: [number, string] = [1, "Name"];

// Type '[number, string, boolean]' is not assignable to type '[number, string]'.
//   Source has 3 element(s) but target allows only 2.
// let users: [number, string] = [1, "Name", true];

//  Enum -> liste of related constants

//  Automatically sets the first value to 0
enum Size {
  Small,
  Medium,
  Large,
}
//  Explicitly setting values
//  Relying on compiler to set the values for the rest
enum Sizes {
  Small = 1,
  Medium,
  Large,
}

//  Explicitly setting string values
enum ShirtSizes {
  Small = "s",
  Medium = "m",
  Large = "l",
}

let mySize: Sizes = Sizes.Medium;
console.log(mySize);

// Function with annotation for return type
// Annotation should be done for the params used
// in the function and the return variable type should be
// also annotated with colon after the params and specify type
// 'void' should be used if there are no values being returned

// Function lacks ending return statement and return type does not include 'undefined'.
// function calculateTax(income: number): number {
//   if (income < 50000) return income * 1.2;
//   // Will returned undefined (NaN)
// }
// ----->
// Not all code paths return a value.
// function calculateTax(income: number) {
//   if (income < 50000) return income * 1.2;
//   // Will returned undefined (NaN)
// }
// ----->
function calculateTaxes(income: number) {
  if (income < 50000) return income * 1.2;
  return income * 1.6;
}

// Multiple params in a funciton argument
// Strict on amnt of params used in function argument
// Must be equal to the amount defined
function calculateYearlyTaxes(income: number, taxYear?: number): number {
  if (taxYear || 2022 < 2022) return income * 1.2;
  return income * 1.6;
}
calculateYearlyTaxes(10000, 2021);

// -------> no unused locals, no unused params, no implicit returns
