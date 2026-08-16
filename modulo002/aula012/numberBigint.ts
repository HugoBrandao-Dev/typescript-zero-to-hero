/*********************** NUMBER ***********************/

let num1: number = 23.0; // Decimal
let num2: number = 0x78CF; // Haxadecimal
let num3: number = 0o577; // Octal
let num4: number = 0b110001; // Binário

console.log(num1, "é um", typeof(num1));
console.log(num2, "é um", typeof(num2));
console.log(num3, "é um", typeof(num3));
console.log(num4, "é um", typeof(num4));

/*********************** BIGINT ***********************/
console.log();

let big1: bigint = 9007199254740991n; // Decimal
let big2: bigint = 0x20000000000003n; // Hexadecimal
let big3: bigint = 0o400000000000000003n; // Octal
let big4: bigint = 0b10000000000000000000000000000000000000000000000000001n; // Binário

console.log(big1, "é um", typeof(big1));
console.log(big2, "é um", typeof(big2));
console.log(big3, "é um", typeof(big3));
console.log(big4, "é um", typeof(big4));
