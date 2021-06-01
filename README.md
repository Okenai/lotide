# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @okenai/lotide`

**Require it:**

`const _ = require('@okenai/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: function which compares the two arrays it takes in and print out a message telling us if they match or not.
* `function2(assertEqual)`: function which compares the two values it takes in and print out a message telling us if they match or not.
* `function3(assertObjetsEqual)`: function which compares the two objects it takes in and print out a message telling us if they match or not.
* `function4(countLetters)`: function which takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `function5(countOnly)`: function which takes in a collection of items and return counts for a specific subset of those items. 
* `function6(eqArrays)`: function which takes in two arrays and returns true or false, based on a perfect match.
* `function7(eqObjects)`: function which will take in two objects and returns true or false, based on a perfect match.
* `function8(findKey)`: function which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `function9(findKeyByValue)`: function which takes in an object and a value, scans the object and returns the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `function10(head)`: function which returns the first item in the array
* `function11(letterPositions)`: function which returns all the indices (zero-based positions) in the string where each character is found.
* `function12(map)`: map array method prototype, a function which takes in array and return a value described by a second arguement a callback function.
* `function13(middle)`: function which will take in an array and return the middle-most element(s) of the given array.
* `function14(tail)`: function which returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `function15(takeUntil)`: function which will keep collecting items from a provided array until the callback provided returns a truthy value.
* `function16(without)`: function which returns a subset of a given array, removing unwanted elements.