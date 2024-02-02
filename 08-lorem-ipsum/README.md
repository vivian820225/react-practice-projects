![Demo](./demo.png)

## Figma URL

[Lorem Ipsum](https://www.figma.com/file/JRDDc3aN6uiBS3yvjbkk0s/Lorem-ipsum?node-id=0%3A1&t=cLtQmBowNmb4V0jP-1)

## Usage

```sh
npm install
npm run dev
```

#### Array.slice()

array.slice is a method in JavaScript that returns a shallow copy of a portion of an array into a new array object. The slice() method takes two arguments: the starting index and the ending index of the portion of the array that you want to copy. The starting index is inclusive, meaning the element at the starting index is included in the copied portion, and the ending index is exclusive, meaning the element at the ending index is not included in the copied portion.

Here's an example:

```js
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']

const slicedFruits = fruits.slice(1, 4) // copies elements 1, 2, and 3 (but not 4) into a new array

console.log(slicedFruits) // ['banana', 'cherry', 'date']
```

In this example, the slice() method is called on the fruits array, with arguments of 1 and 4. This copies elements 1, 2, and 3 of the fruits array into a new array object, which is assigned to the slicedFruits variable. The console.log() statement then outputs the new slicedFruits array to the console.

#### nanoid

nanoid is a small, fast, and secure library for generating unique IDs in JavaScript. It is designed to be as compact as possible while still providing a unique, unpredictable, and collision-resistant identifier.

The library generates random IDs that consist of a combination of uppercase and lowercase letters, as well as numbers. The default ID length is 21 characters, but this can be changed by passing a different length as an argument.

Here's an example of how to use nanoid to generate a unique ID:

```sh
npm i nanoid
```

```js
import { nanoid } from 'nanoid'

const id = nanoid() // Generates a 21-character random ID

console.log(id) // Output: "Uakgb_J5m9g-0JDMbcJqL"
```

In this example, we first import the nanoid function from the nanoid library. We then call the nanoid() function to generate a new, random ID. Finally, we output the ID to the console.

One of the benefits of using nanoid is that it generates IDs that are highly unlikely to collide, even when generating a large number of them. This is achieved by using a combination of randomness and a predefined set of characters, which ensures that each ID is unique and unpredictable.
