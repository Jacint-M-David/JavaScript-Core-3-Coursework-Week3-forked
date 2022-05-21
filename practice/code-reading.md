# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.

A: I assume you meant line 4 vs line 7 as on line 6 there is only a curly brace.
The function is never called therefore the value that x holds remains unchanged.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

A: output: 10, y is not defined
Explanation: let and const have block level scoping. They only exist in the block they were created in and since we are calling them outside of their blocks they don't exist in that context.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

A: Nan - at the time of calling f1(x), x isn't defined and the total of undefined and a number is NaN
y will be with throw a reference error as you cant reassign the value of values eg 9=10 is an invalid assignment.

change made for PR
