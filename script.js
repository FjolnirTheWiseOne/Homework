// Problem No 1

// first 2 numbers
const a = 14;
const b = 5;
// second 2 numbers
const c = 99;
const d = 11;
// third 2 numbers
const e = 81;
const f = 16;
// sum
console.log("The Sum of a and b is`", "1)", a + b, "2)", c + d, "3)", e + f);

// difference
console.log(
  "The Difference of a and b is`",
  "1)",
  a - b,
  "2)",
  c - d,
  "3)",
  e - f
);

// product
console.log(
  "The Prodcut of a and b is`",
  "1)",
  a * b,
  "2)",
  c * d,
  "3)",
  e * f
);

// quotient
console.log(
  "The Quotient of a and b is`",
  "1)",
  a / b,
  "2)",
  c / d,
  "3)",
  e / f
);

// remainder
console.log(
  "The Remainder of a and b is`",
  "1)",
  a % b,
  "2)",
  c % d,
  "3)",
  e % f
);

// Problem No 2
const my_name = "Emil";
const age = 18;
console.log("My name is", my_name, "I am", age, ".” ");

// Problem No 3
const first_number = 0;
const second_number = -71;
const third_number = 89;

if (first_number >= 0) {
  console.log("No");
} else {
  console.log("Yes");
}

if (second_number >= 0) {
  console.log("No");
} else {
  console.log("Yes");
}

if (third_number >= 0) {
  console.log("No");
} else {
  console.log("Yes");
}

// Problem No 4
const first_num = 123;
const second_num = 35;
const third_num = 70;

if (first_num % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

if (second_num % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

if (third_num % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Problem No 5
const first = 3;
const second = 14;

if (first % second == 0  second % first == 0) {
  console.log("1");
} else {
  console.log("0");
}

const third = 18;
const fourth = 2;

if (third % fourth == 0  fourth % third == 0) {
  console.log("1");
} else {
  console.log("0");
}

const fifth = 7;
const sixth = 21;

if (fifth % sixth == 0 || sixth % fifth == 0) {
  console.log("1");
} else {
  console.log("0");
}
