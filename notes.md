# Introduction to JS

> Intitial topics are data types,variable declarations

# Scope

> The scope is the lifetime of a variable i.e the range or a level where a variable is accessable.

- Var - Global scope
- Let ,Const - Block scope

### _ undefined is a value and not defined is a error._

## Type Conversion

- implicit conversion
- explicit conversion

> > The impicit is automatically done by the java script .

```js
var e = "5";
var t = 7;
console.log(e + t); //implicit conversion 57
console.log(e - t); //-2
console.log(typeof e); //string
```

In the above code the '+' operator can act as both concatenation and addition.

impicitly it does concatination into string.

> > To work it as addition we need to perform Explicit conversion.

```js
var e = "5";
var t = 7;
console.log(ParseInt(e) + t); //12
```

## Basic method combination

```js
[2,4,5]+"abc" // '2,4,5abc'
//It converts into string
[]+[] // ''
//It returns an empty string.
```

The multiplication operator try to convert the string into a number

```js
4 * "5"; // 20
4 * "5a"; // NaN
//the type conversion is not possible coz 5a is not a valid number
typeof NaN; //number
```

Which is Faster? Why?

```js
var e = "5";
var t = 5;
console.log(e == t); //True
console.log(e === t); //False
```

In the above scenario

The == works in 2 steps

- 5 =="5"
- Converts "5" -> 5
- Compares and it is true
  Concluding it by saying ,'==" allows the type conversion.

The === works in 1 steps

- 5 ==="5"
- That's it and it doesn't support type casting.
- since it doesn't allow any casting it does the work faster'

## Types of Function

1.Normal Function

```js
//Function definition/declaration
function double(n) {
  return n * 2;
}
//Function call
console.log(double(10));
```

What if we missed the return stmt

```js
//Function definition/declaration
function double(n) {
  n * 2;
}
//Function call
console.log(double(10));
```

In the above scenario it returns --Undefined.

There are two ways to end a function.

- return stmt

  > whenever return stmt is encountered then it stops the execution.

- Completion of the whole process

  > Completing the whole execution process

  2.Arrow Function

SYNTAX:

```js
const double = (n) => {
  return n * 2;
};
```

if the code is single line then the version can be written as

```js
const double = (n) => n * 2;
```

'n\*2' is our requred functionallity

> > Comparing with the Normal fnction the number of lines in the code will be less.

## DRY rules

```js
a1 = 9;
b1 = 4;
console.log(a1 + b1);

a2 = 2;
b2 = 0;
console.log(a2 + b2);

a3 = 3;
b3 = 8;
console.log(a3 + b3);
```

The above is a not a dry code

- DRY -Dont repeat yourself

The below code is dry ,reusable and is modular.

```js
const sum = (a, b) => a + b;
console.log(sum(3, 5));
console.log(sum(9, 6));
console.log(sum(2, 7));
```

Functions solve the DRY problems

## 5 Pillars of Code Quality

1. Readability - 75%

2. Maintainability - code debt(i.e saying will make the code more readable tmrw and the tmrw never comes )

3. Extensibility(Ability to extend the code easily)

4. Testability

5. Performance

## Copy by value & Copy by reference

If we copy normally.We get

```js
var q = [100, 400];
var w = [380, 780];
var e = [[q, w]];
console.log(e); //[ [100,400], [ 380,780 ] ]
```

So,to rectify this we use the spread operator

Copy by value

- Spread operator

```js
var q1 = [100, 300];
var q2 = [...q1]; //(copy by value)
var q3 = [60, ...q1, 90, 40];
console.log(q3); //[60,100,300,90,40]
```

```js
var t1 = [400, 500];
var t2 = [90, 80];

var t3 = [...t2, ...t1];
console.log(t3); //[90,80,400,500]
```

## Loops in js

- for

```js
const marks = [80, 90, 100];
for (let i = 0; i < marks.length; i++) {
  console.log("Index:", i, "Marks : ", marks[i]);
}
//output
Index: 0 Marks :  80
Index: 1 Marks :  90
Index: 2 Marks :  100
```

- for in

  This method is more readable and simple.

```js
const marks=[80,90,100]
    for(let i in marks)
    {
    console.log("Index:",i,"Marks : ",marks[i])
    }
    //output
Index: 0 Marks :  80
Index: 1 Marks :  90
Index: 2 Marks :  100
```

- for of

This method is more readable and cleaner but if we want to access the index it is not much preferable.

```js
const marks = [80, 90, 100];
for (let mark of marks) {
  console.log("Mark :", mark);
}
//output
Mark: 80;
Mark: 90;
Mark: 100;
```

### Task-1

```js
const cart = [
  { a: "apple", b: 0.5, c: 4 },
  { a: "banana", b: 0.25, c: 6 },
];
const items = [
  { a: "cherry", b: 0.75, c: 2 },
  { a: "bna", b: 1, c: 3 },
];

var e = [...cart, ...items];
console.log(e);
var result = 0;
for (let i of e) {
  result += i.b * i.c;
}
console.log(result)[
  //output
  ({ a: "apple", b: 0.5, c: 4 },
  { a: "banana", b: 0.25, c: 6 },
  { a: "cherry", b: 0.75, c: 2 },
  { a: "bna", b: 1, c: 3 })
];
8; // it is the multiple of b and c .
//the result is the sum of all
```

## Task 2

Question :
// Ex 2: Rating 4.7 and above | Recommendations List

```js
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];
let arr = [];
for (let i of books) {
  if (i.rating >= 4.7) {
    arr.push(i.title);
  }
}
console.log(arr)[
  //output
  ("A Brief History of Time", "Sapiens", "Clean Code")
];
```

## Task 3

Question:

expected output:
[{ id: 2, status: 'Promoted' }, { id: 3, status: 'Promoted' }, { id: 4, status: 'Promoted' }]

```js
const employes = [
  { id: 1, name: "Alice", grade: 78 },
  { id: 2, name: "Bob", grade: 85 },
  { id: 3, name: "Charlie", grade: 92 },
  { id: 4, name: "David", grade: 88 },
  { id: 5, name: "Eva", grade: 76 },
];

// This should output:
// [{ id: 2, status: 'Promoted' }, { id: 3, status: 'Promoted' }, { id: 4, status: 'Promoted' }]
let arr = [];
for (let i of employes) {
  if (i.grade >= 85) {
    // console.log("id :",i.id,"status : Promoted");
    arr.push({ id: i.id, status: "Promoted" });
  }
}
console.log(arr);
//output
0
:
{id: 2, status: 'Promoted'}
1
:
{id: 3, status: 'Promoted'}
2
:
{id: 4, status: 'Promoted'}
```

## Task 4

Question: Top1 movie title

```js
const movies = [
        { title: "Inception", ratings: [5, 4, 5, 4, 5] },
        { title: "Interstellar", ratings: [5, 5, 4, 5, 4] },
        { title: "Dunkirk", ratings: [4, 4, 4, 3, 4] },
        { title: "The Dark Knight", ratings: [5, 5, 5, 5, 5] },
        { title: "Memento", ratings: [4, 5, 4, 5, 4] },
      ];

    var sum1=0;
    let arr=[]
    let arr1=[]
  function fun(ratings)
  {
    for(let j of ratings)
      {
        sum1+=j

      }
      arr.push(sum1);
      sum1=0;
  }
  for(let i of movies)
    {
       fun(i.ratings)
       arr1.push(i.title)
  }
  var max=0;
  var e=0;
   for(let k=0;k<arr.length; k++)
    {
      if(arr[k]>arr[k+1])
        {
          max=arr[k];
          e=k;
        }
    }
    console.log(arr1[e]);
//output
The Dark Knight
```
