![Demo](./demo.png)

## Figma URL

[Menu](https://www.figma.com/file/PwlnSJXCuo4qD2o6EJiuj9/Menu?node-id=0%3A1&t=oaKVwYVqc9Oon2Ts-1)

## Usage

```sh
npm install
npm run dev
```

#### Set Object

[JS Nuggets - new Set()](https://www.youtube.com/watch?v=H4NnCItCZWE&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=26)

In JavaScript, the Set object is a collection of unique values. It allows you to store values of any type, such as primitive types (numbers, strings, booleans) and object references.

Here's a simple example of using a Set:

```js
// Create a new set
let mySet = new Set()

// Add values to the set
mySet.add(1)
mySet.add(2)
mySet.add(3)

// Add a duplicate value (ignored)
mySet.add(1)

// Get the size of the set (3)
console.log(mySet.size)

// Check if a value is in the set (true)
console.log(mySet.has(2))

// Remove a value from the set
mySet.delete(2)

// Get an array of all values in the set
let myArray = Array.from(mySet)
console.log(myArray) // [1, 3]
```

```js
const tempCategories = menu.map((item) => item.category)
const tempSet = new Set(tempCategories)
const tempItems = ['all', ...tempSet]
console.log(tempItems)
```
