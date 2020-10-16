// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);

//2. Numeric operators
console.log(1 + 1);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;

console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 4;

// 5. Comparison operators

// 6. Logical operators: ||, &&, !
// check 를 마지막에 배치 (or, and )

// 7. Equality (===Strict equality, == loose equality, != not equal)

// 8. Conditional operators: if
const name = 'dd';
if (name === 'jay') {
    console.log('Welcome, Jay!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
console.log(name === 'Jay' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks

const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first ,
// then check the condition.logo

// for loop, for(begin; condition; step)