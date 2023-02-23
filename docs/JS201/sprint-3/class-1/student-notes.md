# Student notes

## Essential Javascript Concepts [Class 1,2]

Course intro slides: [https://docs.google.com/presentation/d/1jnxlu82zKUp9QZ0b1Czo9frdmcIPaSJ_JyiTIYoBaTI/edit?usp=sharing](https://docs.google.com/presentation/d/1jnxlu82zKUp9QZ0b1Czo9frdmcIPaSJ_JyiTIYoBaTI/edit?usp=sharing) 

## Every programming language/library has 2 parts

- **Happy Easy parts**: used for toy application, easy to teach & learn, most of these never asked in technical interviews
- **Real Hard parts**: used in the real Industry, very hard to teach & requires some effort to learn, Technical interviews are full of question related to the hard parts

![Untitled](assets/Untitled.png)

## Student task

- Why do you think “real hard parts” of a language is asked in technical interviews?
- What would you like to learn from me?
- Is it going to be easy?

## How to make the best use of this course

- Try your best to solve the problems that I give you, even if its beyond your capacity. It’s okay to make new mistakes.  Trust me, I wont give up on you. I will keep explaining until you get it.
- Don’t depend too much on re-watching the recording. Be very attentive. Use the combination of the notes/code that I provide as much as possible.
- Be an active participant. If we passively listen, we think that we are learning, but actually there’s a very little learning going on. Try to answer every thing that I ask you - yes / no, true / false whatever. Make it a 2-way learning.
- “finding a concept hard to understand” **vs** “not being sincere”. I will never give-up on you if you sincere, I have Zero tolerance for insincerity.
- Remind me to give you all a 5 mins break every hour. We don’t want our focus & attention in the class to dip even for a minute. Short breaks are very important.
- ✔️ Read carefully & acknowledge messages coming from important channels

## Session with one of the best performers of the last Batch

- Questions for Rishab Kr. Chaurasiya
    
    From your perspective, What can students expect from this course? 	
    
    Which parts of your JS201 course did you like the most? Are you feeling empowered & a step closer to your goals?	
    
    How important do you think is Practice? can simply watching me solve problems live make someone a great engineer?	
    
    Most of our evaluations happens over CP. How important do you think is to solve assignments before evaluations? 	
    
    Would you like to give any suggestions / guidance to everyone here so that they can all shine like you? what is your secret of success? Would you like to showcase some ways in which you implemented your learnings?
    

## **Suggested Watch (optional)**

- [Growth Mindset](https://www.khanacademy.org/college-careers-more/learnstorm-growth-mindset-activities-us)
- [Mastery learning](https://www.khanacademy.org/khan-for-educators/indiacourse/xb6e0f5a42f01e035:get-started-with-khan-academy-eng/xb6e0f5a42f01e035:advanced-introduction-to-mastery-learning/v/khan-academy-view-of-mastery-learning)

![Untitled](assets/Untitled%201.png)

---

## Block Structure (Sprint 1 to 3)

- **Sprint-1**
    - Class-1 : Essential Javascript Concepts - I
    - Class-2 : Essential Javascript Concepts - II
    - Class-3 : Array methods in depth - I
    - Class-4: Array methods in depth - II
- **Sprint-2**
    - Class-5 : Functions & Objects in depth
    - Class-6 : Prototypical Inheritance - I
    - Class-7 : Prototypical Inheritance - II
    - Class-8 : Mastering the this keyword
- **Sprint-3**
    - Class-9 : Asynchronous Javascript - I
    - Class-10 : Asynchronous Javascript - II
    - Class-11 : Asynchronous Javascript - III
    - Class-12 : Testing Javascript & Road to React

### Sprint-4 [Mid Term Revision Sprint]

- What is Mid Term Revision (MTR) Sprint
    
    ![Untitled](assets/Untitled%202.png)
    
- Why MTR Sprint
    - Interviews are fundamentally different and difficult than Evals - on the spot solution, respond to unpredictable circumstances (imagine evals being like a harry potter newspaper where text keeps changing), communication is key, confidence / body lang etc
    - Had lot of success in new Revision batch but that happens only after U6
    - Also need to get reality check of how strong the learning is: lot of overestimation of abilities right now (sprint eval expected scores)
    - (by Rajesh) Revision at end of every block is one of the most requested features requested by students
    - IV Data of 3 people from this gdrive folder: [https://drive.google.com/drive/folders/1EK-90b-DLOz3uvH_sIFy5JAmU8cFSiTI?usp=share_link](https://drive.google.com/drive/folders/1EK-90b-DLOz3uvH_sIFy5JAmU8cFSiTI?usp=share_link)
    - Whatever topics you learnt till now, you didnt get enough time to revise it, you are revising few things by doing assignments , but you might have missed few important things, we will try to cover those things in MTR
- What does MTR consist of
    - MTR will consists of all topics of JS101, WEB101, JS201. All important topics of these courses will be discussed in detail
    - It will contain some additional advanced JS201 concepts which are commonly asked in interviews

## Sprint-5 Construct week

todo: examples

[https://docs.google.com/spreadsheets/d/1q01_jsf4MmaWd8FtJKVACgdCOQfiYizRT0WAWpZyVdY/edit#gid=1805352756](https://docs.google.com/spreadsheets/d/1q01_jsf4MmaWd8FtJKVACgdCOQfiYizRT0WAWpZyVdY/edit#gid=1805352756) 

---

## Type of problems, you must be able to solve `easily` by the mid of this course:

These coding problems (with minimal modifications) are often asked in coding interviews. Even if you have never encountered them, give them a try. It opens up mind for some brand new information & its proved by science.

### Problem 1.

Guess the output

```jsx
function chips() {
  console.log('sync: chips');
}

function pizza() {
  setTimeout(()=>{
    console.log('async: pizza');
  },0);
}

function main() {
  chips();
  pizza();
  chips();
  chips();
  chips();
}

main();
```

### Problem 2.

Guess the output

```jsx
function sayGoodbye() {
  console.log("Good bye! ", this);
}

function sayHello() {
  console.log("Helloo! ", this);
  sayGoodbye();
}

sayHello();
```

### Problem 3.

Guess the output

```jsx
function main() {

    function sayRegularHello() {
      console.log("Regular Hello ", this);
    }
    
    sayRegularHello();

    
    var sayArrowHello = () => {
      console.log("Arrow Hello ", this);
    };

    sayArrowHello();
}

main.call({name: 'Vivek'})
```

### Problem 4.

What is the output of the script?

```jsx
let name = "Ilya";
alert( `hello ${1}` ); // ?
alert( `hello ${"name"}` ); // ?
alert( `hello ${name}` ); // ?
```

### Problem 5.

What are the values of `a` and `x` after the code below?

```jsx
let a = 2;
let x = 1 + (a *= 2);

console.log(a,x);
```

### Problem 6.

What will the result be?

```jsx
console.log( null || (2 && 3) || 4 );
```

### Problem 7.

What will the result be?

```jsx
let x = (1 && 2) ?? 3;
alert(x);
```

… and many more …

## Declaration, Declaration with Initialisation, Assignment, Reassignment

```jsx
//declare or define a variable called firstName
let firstName; 

// initialize or assign value to a variable
firstName = 'John'

// declare & initialize | define a variable and assign a value
let lastName = 'Smith';

// re-assign value to a variable
firstName = 'Will'

// Access or showing or logging or looking up the variable content
console.log(firstName, lastName)
```

## What all types of values can be assigned to variables?

**Primitives (value types)**

string

number

boolean

undefined

null

---

bigInt

symbol

**Non Primitives (reference types)**

object

array

function

## Dynamic Typing

using the `typeof` operator to check types & change them dynamically (with two exeptions)

```jsx
let xyz = 'Vivek';
let xyz = 1;
let xyz = true;
let xyz = undefined;
let xyz = 1234567890123456789012345678901234567890n;
let xyz = Symbol('hello');
let xyz = null; // a bug in JS :)

let xyz = {name: 'Vivek'};
let xyz = [1,2,3]; // you should use Array.isArray(xyz) and not typeof
let xyz = function(){console.log('Hello')}
```

- bigint
    
    In JavaScript, the “number” type cannot safely represent integer values larger than `(2^53-1)`  (that’s `9007199254740991`), or less than `-(2^53-1)`for negatives. 
    
    `BigInt` type was recently added to the language to represent integers of arbitrary length. A `BigInt` value is created by appending `n` to the end of an integer:
    
    ```jsx
    // the "n" at the end means it's a BigInt
    const aVeryBigNumber = 1234567890123456789012345678901234567890n;
    console.log(typeof aVeryBigNumber)
    ```
    
- symbols
    
    The `symbol` type is used to create unique identifiers for objects.  Javascript object has keys of type `String` . Modern Javascript provides a second type that you can use for object keys - the `Symbol` type. Symbols are a new primitive type in ES6. 
    
    We can create a symbol in any of the following ways:
    
    ```jsx
    let symbol1 = Symbol('hello'); // Guarenteed unique value
    let symbol2 = Symbol.for('world');
    ```
    
    Symbols can also be created with a label, by passing a string as the first argument. The **label** doesn’t affect the value of the symbol, but is useful for debugging, and is shown if the symbol’s toString() method is called.
    
    if you try to use a new Symbol using `Symbol('hello')` it will be a new symbol and won't interface with the existing one even if the **descriptor** is the same. On the other hand,  if you try to create a new Symbol using `Symbol.for('world')` , since the descriptor string is same, we will end up overwriting the existing symbol.
    
    Understanding the problem that `Symbol`s are designed to solve:
    
    ![Untitled](assets/Untitled%203.png)
    
    Symbols are unique and this is the principal advantage of symbols. If we needed to have a string key that is guaranteed to be unique, we may add a counter or a timestamp or a random number, but Symbols looks to be a much cleaner and scalable solution.
    
    Since symbols are not strings, we cannot use a dot notation for symbol keys. Instead, we use a bracket operator:
    
    ```jsx
    let obj = {
      [symbol1]: 'world'
    }
    
    obj[symbol1] = 'Something else'
    ```
    
    Symbols being guaranteed unique is especially useful when multiple middlewares are updating the same object. It ensures that a new plugin or module will not accidentally overwrite another important property of the object. 
    
    Just for the sake of a simple example and some practice Let's say we have a really simple form in our application that takes just two inputs from every anonymous user. 
    
    It collects in their first name & the way they are feeling today `['bad', 'okay' or 'great']`.
    
    At the end of every day, we need a summary of the data. We have one big object and all the data must be stored in that object in a key-value pair.
    
    Here's a possible solution:
    
    ```jsx
    let feelingData = {
      addData: function (name, feeling) {
        this[name] = feeling;
      }
    }
    
    feelingData.addData('John', 'bad');
    feelingData.addData('Michael', 'good');
    feelingData.addData('John', 'bad');
    feelingData.addData('John', 'great');
    
    console.log(feelingData);
    
    // John: "great"
    // Michael: "good"
    ```
    
     
    
    As we can see we are getting a really perverted view of our users mood. This is a really good use case of Javascripts Symbols.
    
    ```jsx
    let feelingData = {
      addData: function (name, feeling) {
        this[Symbol(name)] = feeling;
      }
    }
    
    feelingData.addData('John', 'bad');
    feelingData.addData('Michael', 'good');
    feelingData.addData('John', 'bad');
    feelingData.addData('John', 'great');
    
    console.log(feelingData);
    
    // Symbol(John): "bad"
    // Symbol(John): "bad"
    // Symbol(John): "great"
    // Symbol(Michael): "good"
    ```
    
    This looks much more accurate. We only changed line 3 where instead of using the string name of a user as a key to store their response, use used a Symbol with the String descriptor to store their mood.
    
    Another use-case of Symbols is to partially hide a property in an object.  Take the following example object:
    
    ```jsx
    let passcodeSym = Symbol('passcode');
    let roleSym = Symbol.for('role');
    
    let obj = {
      name: 'John doe',
      age: 36,
      [passcodeSym]: 'world',
      [roleSym]: 'trainee'
    }
    
    obj[Symbol('passcode')] = 'Hello'; // will not overwrite but create a new property with the same descriptor
    obj[Symbol.for('role')] = 'developer'; // will overwrite the existing one with the same descriptor
    ```
    
    The properties with a Symbol as their key is partially hidden in a way that they can not be directly accessed in these obvious ways: 
    
    ```jsx
    console.log(obj.passcodeSym); // undefined
    console.log(Object.getOwnPropertyNames(obj)); // (2) ['name', 'age']
    
    for (const key in obj) {
      console.log(key);
    }
    // name
    // age
    
    console.log(Object.keys(obj))
    console.log(JSON.stringify(obj))
    ```
    
    However, they are not actually truly hidden because there are ways to see them:
    
    ```jsx
    console.log(Object.getOwnPropertySymbols(obj));
    // (3) [Symbol(passcode), Symbol(role), Symbol(passcode)]
    
    console.log(Reflect.ownKeys(obj));
    //(5) ['name', 'age', Symbol(passcode), Symbol(role), Symbol(passcode)]
    ```
    
    The Global registry: 
    
    `Symbol.for(key)` retrieves the symbol for a given key from the registry. If a symbol doesn’t exist for the key, a new one is returned. As you might expect, subsequent calls for the same key will return the same symbol.
    
    `Symbol.keyFor(symbol)` allows you to retrieve the key for a given symbol. Calling the method with a symbol that doesn’t exist in the registry returns undefined
    

Todo: Provide recording here (Vivek)

## `var`, `let` & `const`

There are three ways to declare a variable.

- variables declared with `let` are block scoped, `var` are function scoped
    
    ```jsx
    function scopeTest() {
      var outerVar = 'outer var';
      let outerLet = 'outer let';
    
      if (true) {
        var innerVar = 'inner var'; // function scoped
        let innerLet = 'inner let'; // block scoped
      }
    
      console.log(innerVar); // inner var
      console.log(innerLet); // Uncaught ReferenceError: innerLet is not defined
      
    }
    
    scopeTest();
    ```
    
    ```jsx
    const name = "Vivek";
    name = "Akash"; // Uncaught TypeError: Assignment to constant variable.
    
    const user = {
      name: 'Vivek'
    }
    
    user.name = "Akash"; // this is called mutating not re-assigning a variable
    console.log(user); // {name: 'Akash'}
    
    const users = ['a', 'b', 'c']
    users.push('d');
    console.log(users); // ['a', 'b', 'c', 'd']
    ```
    
    ### `var` 's are function scoped and not block scoped
    
    ```jsx
    var firstName = 'Vivek';
    
    if (true) {
      var firstName = "Akash";
      console.log(firstName); // Akash
    }
    
    console.log(firstName); // Akash
    ```
    
    ```jsx
    var firstName = 'Vivek';
    
    (function () {
      var firstName = "Akash";
      console.log(firstName); // Akash
    })();
    
    console.log(firstName); // Vivek
    ```
    
    ### `let` 's & `const` 's are block scoped
    
    ```jsx
    var firstName = 'Vivek';
    
    if (true) {
      **let** firstName = "Akash";
      console.log(firstName); // Akash
    }
    
    console.log(firstName); // Vivek
    ```
    
    Another example: 
    
    ```jsx
    // function
    function student() {
      var studentName = 'Akash';
      console.log(studentName);
    }
    
    console.log(studentName); // Uncaught ReferenceError: studentName is not defined
    
    student()
    
    // block 
    if (1 === 1) {
      var studentAge = 26;
      console.log(studentAge) // 26
    }
    
    console.log(studentAge) // 26
    
    // block
    for (let i = 1; i<=1; i++ ) {
      var favSubject = 'Javascript';
      console.log(favSubject) // Javascript
    }
    
    console.log(favSubject) // Javascript
    ```
    
- `let` does not allow re-declaration, `var` allows
    
    ```jsx
    var a = 5; // 5
    var a = 3; // 3
    ```
    
    ```jsx
    let a = 5;
    let a = 3; // error
    ```
    
    `Uncaught SyntaxError: Identifier 'a' has already been declared`
    
    Redeclaring a variable with `var` in a different scope or block changes the value of the outer variable too. For example,
    
    ```jsx
    var a = 5;
    console.log(a); // 5
    {
        var a = 3;
        console.log(a); // 3
    }
    console.log(a); // 3
    ```
    
    When a variable declared with `var` is used in a loop, the value of that variable changes. For example,
    
    ```jsx
    var a = 2;
    for(var a = 0; a < 3; a++) {
        console.log('hello world');
    }
    console.log(a); // 3
    ```
    
- Variables declared with `let` , can not be accessed before initialisation
    
    ```jsx
    function f() {
        console.log(a); // ReferenceError: Cannot access 'a' before initialization
        let a = 5;
    }
    
    f();
    ```
    

For most parts, let & const works the same way, the only difference is that the variables declared with const can not be re-assigned.

## Functions

a Function is a set of statements that either perform a task or calculates and returns a value;

A function is a set of statements in JS which is

- Callable (executable)
- It can take arguments
- has a set of statements that can either perform **tasks** or calculations
- return a value

```jsx
function addNumbers(n1, n2) {
  // task
  let sum = n1 + n2;
  console.log('sum', sum)

  // return
  return sum;
}

let total = addNumbers(3,2);
console.log('total', total)
```

```
// function declaration
function doSomething() {
  // tasks | return something
}

// function expression
let fun = function() {
  // tasks | return something
}

let arrFun = () => {
  // tasks | return something
}

// discuss variations in arrow functions
```

Discuss the terms `defining` a function vs `executing` or `invoking` or `running` a function.

What does a function return if we do not explicitly return any thing?

```jsx
// what will it return
function add(a,b) {
  let c = a + b;
}

let result = add();
console.log(result)
```

**Student Task**

A short refresher on `null` vs `undefined`

[https://codepen.io/drupalastic/pen/mdKMadx?editors=0012](https://codepen.io/drupalastic/pen/mdKMadx?editors=0012) 

```jsx
// nuller is expected to return boolean value null 
function nuller() {

}

console.log(nuller());
```

Steps to use codepen: 

- make sure to login/signup using your github account
- fork the codepen
- read the problem statement, solve it, save it
- share your codepen url into the chat

## Introduction to CP

[https://cp.masaischool.com/assignments/458/view](https://cp.masaischool.com/assignments/458/view)

- Your assignments & evaluations would be on CP
- It’s very important to solve your **assignments** to be ready for your **evaluations**
- The problems would me more real world
- You need to get comfortable **with reading & understanding problem statements**
- The only way to get good at reading problem statements is practicing them as much as possible.

Note: Remember to make the folder names shorter (without spaces)

## CP - Steps

pre-requisites: 

- Node version 14+ should be installed in your machine
- You must be on the directory
- Download & extract the zip file to the course directory [[https://github.com/masai-course/<your_directory>/tree/master/unit-3/sprint-1/day-1/assignments](https://github.com/masai-course/ayush_kumar_pandey_fw22_1143/tree/master/unit-3/sprint-1/day-1/assignments)]
- Open the project in VSCode
- Make sure that the `pwd` is the root directory of the project
- `npm i`
- `npm t -- --watchAll`
- Solve
- Save, add, commit & push your code
- Submit the URL of your solution
- Make sure that there are no spaces in any of the directories or file names
- **Remember to make the folder names shorter (without spaces) else git may throw unexpected errors with some files.**
- **Keep a json file & node modules folder in one of the parent directories, so that we don’t have to do `npm i` for all the projects.**

[package.json](assets/package.json)

*(There are two different types of problem in CP, this should work for both the types)*

## Things & the places where we store them

![Untitled](assets/Untitled%204.png)

![Untitled](assets/Untitled%205.png)

![Untitled](assets/Untitled%206.png)

![Untitled](assets/Untitled%207.png)

![Untitled](assets/Untitled%208.png)

![Untitled](assets/Untitled%209.png)

Just like different things are stored in a different way, Javascript stores primitives and non-primitives in a very different way.

**Primitives (value types)**

string, number, boolean, undefined, null, bigInt, symbol

**Non Primitives (reference types)**

object, array, function

let’s see an example with a string & arrays

## Storing `strings` vs storing `arrays`

![Untitled](assets/Untitled%2010.png)

Variable created + value directly put on `vs` Variable created + value referenced 

Animation: [https://vivmagarwal.github.io/course-animations/animations/by-ref-by-val-2/index.html#0](https://vivmagarwal.github.io/course-animations/animations/by-ref-by-val-2/index.html#0) 

Python tutor: [link](https://pythontutor.com/render.html#code=let%20str%20%3D%20%22Vivek%22%3B%0Alet%20num%20%3D%20%22999%22%3B%0Alet%20bool%20%3D%20false%3B%0Alet%20nl%20%3D%20null%3B%0Alet%20ud%20%3D%20undefined%3B%0A%0Alet%20obj%20%20%3D%20%7Bname%3A%20'vivek'%7D%3B%0Alet%20arr%20%3D%20%5B1,2,3%5D%3B%0Alet%20fun%20%3D%20function%28a,b%29%7B%20return%20a%2Bb%3B%20%7D&cumulative=false&curInstr=8&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)

## Primitive Types vs Reference Types

### Primitive types:

String, Number, Boolean, Null, Undefined, Symbol & Bigint are stored/accessed **directly.** These values are fixed.

### Reference types:

Arrays, Functions & Objects are stored/accessed **by reference**. These can be mutated & hence stored in a much larger area.

![Untitled](assets/Untitled%2011.png)

## Truthy/falsey Values

We saw in the last lecture that The values that can be assigned to a variable can be classified into **primitive** vs **non-primitive** categories. They can also be classified as **truthy** vs **falsey** values.

<aside>
💡 There are only six ***falsey*** values in JavaScript: `undefined` , `null` , `NaN` , `0` , `""` (empty string), and `false`. Anything that is not falsey it truthy.

</aside>

The easiest way to verify: 

```jsx
let a = null;

if (a) {
  console.log(`${a} is Truthy.`)
} else {
  console.log(`${a} is Falsey.`)
}

//? null is Falsey.
```

These kind of questions are very common for the entry level technical interviews. Try to answer if the following values are truthy or falsey:

```jsx
1
""
"null"
"0"
[]
{}
```

## Type conversions

### String conversion

We can also call the `String(value)` function to convert a value to a string

```jsx
let original = true;
let converted = String(original);
```

### Numeric conversion

- We can use the `Number(value)` function to explicitly convert a `value` to a number
- Non valid strings passed into `Number` returns `NaN`

**Edge cases:** 

`undefined` becomes `NaN`

`null` becomes `0`

`true` becomes `1`

`false` becomes `0`

 `123`  becomes `123`

### ParseInt

The `parseInt` method parses a value as a string and returns the first integer. If it finds anything other than a number or empty spaces first, it returns `NaN`

`parseInt('400 Rs.')` becomes `400`

`parseInt('Rs. 400')` becomes `NaN`

### Technique most used in the industry (coercion technique)

Put a `+` Mathematical operator in front of a number & it will convert value to a number automatically. If the string represents a non number, `NaN` is returned.

```jsx
console.log(+"123")
```

### Student task:

When will you use `ParseInt` instead of coercion technique in your code?

## Boolean Conversion

The `Boolean` function converts falsey values to `false` and the rest of the values to `true`

```jsx
console.log(Boolean("ABC")); // true
console.log(Boolean("")); // false
```

Boolean conversion technique most used in the industry (coercion technique, double negation)

```jsx
console.log(!!("ABC")); // true
console.log(!!("")); // false
```

> do not be scared by the heavy word coercion. It simply means automatic type conversion
> 

## Ternary Operator

```jsx
let status = marks > 50 ? 'pass' : 'fail';
```

Syntax:

```jsx
condition ? exprIfTruthy : exprIfFalsy
```

## Logical operators [with booleans]

It was taught in Unit-1 Just check if students are able to solve these problems, move ahead. Else make sure that they understand it completely. It’s used a lot in react.

 

- **What will these expressions return:**
    
    *When we use logical OR (||) , javascript looks for the first truthy value and returns it as soon as it finds it. If it does not find any truthy value, it returns the last falsy value it finds.*
    
    *****************************************in other words, logical OR (||) is eager to find one truthy value, once it finds it - it happily returns. It does not even look any further. But if it does not find any - with lots of sadness it returns the last falsey value.*****************************************
    

```jsx
let a = false;
let b = 0;
let c = null;

let z = a || b || c;

console.log(z);
```

```jsx
let a = false;
let b = 'Vivek';
let c = 'Rishi';

let z = a || b || c;

console.log(z);
```

```jsx
let defaultUser = "Vivek";
let user = "Akash"
console.log(defaultUser || user)
```

```jsx
let defaultUser = false;
let user = "Akash"
console.log(defaultUser || user)
```

- **What will these expressions return**
    
    *When we use logical AND (&&), Javascript either returns the first falsey value it finds, else if all the operands are truthy, it returns the last truthy value.*
    
    *****************************************in other words, logical AND (&&) is eager to find one falsey value, once it finds it - it happily returns. It does not even look any further. But if it does not find any - with lots of sadness it returns the last truthy value.*****************************************
    

```jsx
let a = 'Prachi';
let b = 'Vivek';
let c = 'Rishi';

let z = a && b && c;

console.log(z);
```

```jsx
let a = 0;
let b = 'Vivek';
let c = 'Rishi';

let z = a && b && c;

console.log(z);
```

```jsx
let bankbalance = 100;
let accountactive = true;

(bankbalance > 0) && (accountactive) && console.log('active');
```

```jsx
let bankbalance = 100;
let accountactive = false;

(bankbalance > 0) && (accountactive) && console.log('not active');
```

The precedence of AND `&&` is higher than `||`, so it executes first.

## ****Nullish coalescing operator '??'****

The nullish coalescing operator is written as two question marks `??`.

As it treats `null` and `undefined` similarly. ()

The result of `a ?? b` is:

- if `a` isn’t null or undefined, then `a`,
- if `a` is null or undefined, then `b`.

In other words, `??` returns the first argument if it’s not `null/undefined`. Otherwise, the second one.

```jsx
let user;
alert(user ?? "Anonymous"); // Anonymous
```

```jsx
let user = "John";
alert(user ?? "Anonymous"); // John (user is not null/undefined)
```

- What do you think may be the purpose of introducing `??` , isn’t it similar to `||` . When would you use it over `||`
    
    `||` treats all falsey values as empty values. it includes `""` , `0` & `false`
    
     
    
    When we want to treat these values as different from `null` or `undefined` its best to use `??`
    
    example we would certainly want to treat these differently
    
    ```jsx
    let isUserActive = false; // the user is blocked for some reason
    ```
    
    ```jsx
    let isUserActive; // as nothing is set, user is probably active
    ```
    
    Similarly, if `userBalance` is `0`, then, may be we want to treat if differently from `null`, We may want to treat `""` differently from `undefined` 
    
    if `userBalance` is `null` you want to output the string `please deposit some initial amount` but if the `userBalance` is `0` you want to output the string `your balance is 0`
    
    The important difference between them is that:
    
    - `||` returns the first *truthy* value.
    - `??` returns the first (non null/undefined) value.
    

## Loops

### For

```jsx
// For loop
for(initialExpression; conditionExpression; incrementExpression){
  statements
}
```

```jsx
for (let i = 0; i < 5; i++) {
  console.log('Hello world')
}
```

### While

```jsx
let i = 0; // external loop counter

while (condition) {
  statement
  incrementExpression
}
```

```jsx
let i = 0;
while ( i < 5) {
	console.log('Hello world');
  i++;
}
```

### do … while

```jsx
let i = 0; // external loop counter

do {
  if (i % 2 !== 0) { console.log(i) } // Statement executed at least once
  i++; // increment expression
} while (i <= 10); // condition expression
```

### for … in

**Iterating** over the **properties (keys) of an object** or **indexes of an array**

```jsx
for (let propertyVariable in ObjectOrArray){
  // statement
}
```

```jsx
const student = {
  firstName: 'Vivek',
  rank: 1,
  age: 36
}

for (let key in student) {
  console.log(key);
  console.log(student[key]);
}

const subjects = ['javascript', 'html', 'css'];

for (let index in subjects) {
  console.log(index);
  console.log(subjects[index]);
}
```

### for … of

Iterating over **arrays** & not concerned about index

```jsx

const subjects = ['javascript', 'html', 'css'];

for (let subject of subjects) {
  console.log(subject);
}
```

## Arrow functions

```jsx
// Regular function
function greet(greeting, name) {
  return `${greeting}, from ${name}`;
}

// Arrow function
let newGreet = (greeting, name) => {
  return `${greeting}, from ${name}`;
}
```

implicit return: If all you have is a single expression that returns a value, you can get rid of the braces and the return keyword. Its a very common usage.

```jsx
let newGreet = (greeting, name) => `${greeting}, from ${name}`
```

**Edge case:** To implicitly return an object, surround it with parentheses.

```jsx
const userData = () => ({
  name: 'Vivek',
  email: 'vivek@example.com'
})

console.log(userData()); // {name: 'Vivek', email: 'vivek@example.com'}
```

## Object shorthand

If the name of the key matches the name of the variable that's going into that key, you can get rid of the value and just use the variable name

```jsx
const userData = (name, email) => ({
  name,
  email
})
```

## Statements vs Expressions

An expression is anything that evaluates to a value. Expressions are usually on the right-hand side of statements. 

examples:

```jsx
1+2
true ? 'yes' : 'no'
[1,2,3]
{name: 'Vivek'}
```

statements:

```jsx
let sum = 1+2;
if .. else
while
try .. catch
let arr = [1,2,3]
let obj = {name: 'Vivek'}
```

## Lexical Scope

There are three scopes. Look at the screenshot and try to make a sense of it.

![Untitled](assets/Untitled%2012.png)

Javascript is a **two-pass** system. The code is processed (or compiled or parsed) first. In this first phase, the scopes are set up and the grammar of your code is validated. Then in the second phase, the code is executed. 

Javascript organizes scopes with **functions** and **blocks**. In the processing phase, the scope for every identifier (variable) is set.

In a lexically scoped language (which Javascript is), all of the identifiers & scopes that we dealing with, are determined in the first pass (compile-time). The decisions that I make about scope are author time decisions. When I write a function & put a variable there, it means that the variable is always gonna be scoped to that function. The place where the variable "**sits**" physically in your code and the variables that **"surrounds"** it physically is **important**. 

Another, important thing about lexical scopes is that if the compiler cannot find a variable's declaration within the scope, it looks up to its parents and ancestor's scope.

In a non-strict environment, if a variable is used and never declared, JS auto declares it in the global scope. it's a bad part of JS. We should always operate in strict mode.

## Rest and Spread

```jsx
// rest operator helps collect all the arguments in an array
function doSomething(first, second, ...rest) {
  console.log(first, second, rest); // rest is guarenteed to be an array
}

doSomething('one', 'two', 'three', 'four', 'five');
```

```jsx
// The spread operator explodes array or objects in place
let arr = [1, 3, 5, 7, 9];
console.log(...arr); //-> 1 3 5 7 9

let user = {
  firstName: 'Vivek',
  lastName: 'Agarwal'
}

console.log({
  ...user,
  fullName: `${user.firstName} ${user.lastName}`
});
//-> {firstName: 'Vivek', lastName: 'Agarwal', fullName: 'Vivek Agarwal'}
```

## Destructuring Arrays and Objects

```jsx
const arr = [1, 3, 5, 7, 9];

const [first, second, ...rest] = arr;
console.log(first, second, rest);
```

```jsx
let user = {
  firstName: 'Vivek',
  lastName: 'Agarwal',
  age: 38,
  posts: [
    {title: 'Post 1', comments: 10},
    {title: 'Post 2', comments: 11}
  ]
}

const { firstName:first, lastName, age=40, ...rest } = user;
console.log(first, lastName, age, rest);

// only the deepest keys become variables
const { posts: [{ title }, {title: t2}] } = user;
console.log(title, t2);
```

```jsx
// a function that returns an array of a number and a function
function useState(num) {
  let count = num;
  let setCount = function () {
    console.log(`setting the count: ${count}`);
  }

  return [count, setCount]
}

// way 1
let resultArr = useState(20);
let resultCount = resultArr[0];
let resultSetFunction = resultArr[1];

resultSetFunction(); //-> setting the count: 20

// the destructuring way, super neat
let [count, setCount] = useState(30);

setCount(); //-> setting the count: 30
```

```jsx
// we know that the function will receive an object with keys firstName & lastName

function printFullName({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`);
}

printFullName({
  firstName: 'Vivek',
  lastName: 'Agarwal'
})

//-> Vivek Agarwal
```

```jsx
const user = {
  id: 339,
  name: 'John',
  age: 42,
  education: {
    degree: 'Masters'
  }
};

const  { name, education: {degree}}  = user;
```

```jsx
const user = {
  id: 339,
  name: 'John',
  age: 42,
  education: {
    degree: {
      name: 'BCA'
    }
  }
};

const {name:fname, education: {degree: {name:degreeName}}} = user;
```

```jsx
const user = {
  id: 339,
  name: 'John',
  age: 42,
  subjects: ['HTML', 'CSS', 'Javascript'],
  education: {
    degree: {
      name: 'BCA'
    }
  }
};

const {
  name:fname, 
  education: {degree: {name:degreeName}},
  subjects: [sub1,,sub3]
} = user;
```

## Hoisting

In the compilation/parsing phase (phase-1), We have all the tokens/identifiers available before the execution phase starts. Of course, the assignment happens in the execution phase, but yes, all the variables are available to us, they exist in the memory,  immediately after the parsing phase (phase-1)

- `let`s and `const`s hoist to a block, whereas `var`s hoist to a function.
- In case of `var`, in the compilation/parsing phase, it is initialized to `undefined`
- In case of `let`, in the compilation/parsing phase, a token is created, but it is not initialized at all (TDZ error - uninitialized)

## IIFE - Immediately invoked function expression

We keep our code inside a function, in order to prevent pollution of the global scope. We execute it immediately to make sure that our code actually runs.

```jsx
(function () {
  // our code here
})();
```

*Very important note: Make sure that the statement above it ends with a semicolon else javascript engine might teat it as a continuation of that statement and throw weird errors.*

## Resources:

[JS-the-execution-context.pptx](assets/JS-the-execution-context.pptx)

[JS-the-execution-context.pdf](assets/JS-the-execution-context.pdf)

## Make sure that students watch both the pre-class videos for the ARRAY Methods. Very important, else it will be difficult to complete Array methods in 1 class.

## The one thing

- There are just a few things; if you master them; every thing else becomes easy;

Javascript - 

- Using Arrays & Objects efficiently
- Mastering the `this` keyword
- Prototypical inheritance


