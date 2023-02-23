# Pre-class Notes

*Introduction to **JS201** &  Solid foundations*

## What is Javascript?

Javascript is one of the most popular and widely used programming languages.

It's growing as fast as python.

Giants like Netflix, Walmart, and Paypal are building entire applications around Javascript.

## What can you do with Javascript?

* Add interactivity to webpages
* Make full web/mobile apps with javascript
* Desktop applications
* Real-time networking applications
* Command-line tools
* Games
* Backend services
* Databases

## Where does Javascript code run?

* JS was originally designed to run only in client-side**browsers**
  * every browser has a j***avascript engine*** that can execute javascript code
  * google chrome's JS engine is**V8**
  * firefox's JS engine is**SpiderMonke** y
* **Node** is a cross-platform environment; Using node we can execute Javascript code in any operating system (desktops & servers); Node uses google chrome's V8 engine to execute JS code literally anywhere.

In other words, ***browsers*** and **n*ode*** provide a runtime environment for our Javascript code.

## What is the difference between JavaScript and ECMAScript?

ECMAScript is just a specification. Javascript is a **programming language** that conforms to the specifications.

An organization called **ECMA** is responsible for defining standards.

1997 started
2015 → ES6 (Many new features)
2016 → ES7
2017 → ES8

## Variables

We use **variables** to store data **temporarily** in the computer's memory. We store the data somewhere and give it a **name** . With this name, we can read the stored data in the future.

<img src='/assets/images/20230223_155249_image-44f2b97743ebb7fd849ca5e484c050f0.png' style={{width: 450, display: 'block', marginLeft: 'auto', marginRight: 'auto'}} />

@todo: make images easier to manage with some markdown extensions

data (value) = what we put inside the box

variable name = label that we put on the box

```jsx
// 3 ways to declare a variable - var, let, const
var firstName; // Declaration and auto-initialization
firstName = 'Vivek'; // Assignment
console.log(firstName);
```

* Variable names cannot contain spaces.
* Variable names must begin with a letter, an underscore (_) or a dollar sign ($).
* Variable names can only contain letters, numbers, underscores, or dollar signs.
* Variable names are case-sensitive.
* Certain words may not be used as variable names, because they have other meanings within JavaScript.

## `var`, `let` & `const`

There are three ways to declare a variable.

## What all types of values can be assigned to variables?

**Primitives (value types)**

`string`

`number`

`boolean`

`undefined`

`null`

`bigInt`

`symbol`

**Non Primitives (reference types)**

`object`

`array`

`function`

## Dynamic Typing

using the `typeof` operator to check types & change them dynamically

## Lecture

[](https://course.masaischool.com/lectures/40753)[https://course.masaischool.com/lectures/40753](https://course.masaischool.com/lectures/40753)
