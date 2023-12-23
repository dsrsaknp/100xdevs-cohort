DAY 1 ====================================================================================================

# Object oriented programming - paradigm centered around objects

# 4 pillars

    # Encapsulation - Reduce complexity/ INcrease reusability
    # Abstraction - Reduce complexity + isolate impact of changes
    # inheritence - Eliminate redundant code
    # polymorphism - Refactor ugly switch/case statements

# the best functions are those with no parameters

# Hot reloading

# properties/ members/ instance variables

# Methods/ functions

# Ways to create Object in javascript

    # Object literal syntax
    # Factory function - If we return an object from a regular function, then it is a factory function.
    # Constructor function - If we use 'this' keyword along with 'new' operator, then it is a constructor function.

# if you forget 'new' then, function would be factory function and properties with 'this' keyword will defined on global object. In modern javascript such action gives error. In traditional js, it used to get defined on window object when 'new' was omitted or forgotten.

# Every object has 'constructor' property, whcih refers to the function that created it.

DAY 2 ====================================================================================================

# bind, call and apply - Allow your object(first parameter) to borrow methods from other objects and invoke them as their own.

# bind polyfill, call polyfill, apply polyfill

# function properties

    - name, length, prototype, call, bind, apply, caller,
    -  __proto__, constructor, hasOwnProperty, isPrototypeOf, propertyIsEnumerable, toString, toLocaleString, valueOf

# object properties -

    -  __proto__, constructor, isprototypeOf, propertyIsEnumerable, hasOwnProperty, toString, toLocaleString, valueOf

# arguments - array-ike object, not array

# arguments object has property named 'callee'. Allows the anonymous functions to call recursively.

# Suppose, F is function. It will have a prototype property by default -> it contains an object -> useful only if this function is used as a constructor -> any object created using this constructor function will have access to the properties of "F.prototype -> some_obj", as if it were its own.

# Built-in objects as divided into 3 categories:

        - Data Wrapper objects - Object, Array, Function, Boolean, Number String
        - Utility objects - Math, Date, RegExp
        - Error objects - Error object

# Polyfills: Implementation of features that are given by our browsers, but may not be present in the previous versions of it.

# [DEPRECATED] - arguments object has property named 'callee'. Allows the anonymous functions to call recursively.

DAY 3 ====================================================================================================

# Refer: https://www.javascripttutorial.net/javascript-object-properties/

# once you define a property as non-configurable, you cannot change it to configurable.

# the enumerable attribute of all the properties defined on an object is true. t means that you can iterate over all object properties using the for...in loop

# Object.defineProperty() can modify attributes of both an existing or newly defined object's property in the same method.

# But the accessor properties have the [[Get]] and [[Set]] attributes instead of [[Value]] and [[Writable]].

# When you read data from an accessor property, the [[Get]] function is called automatically to return a value. The default return value of the [[Get]] function is undefined.

# If you assign a value to an accessor property, the [[Set]] function is called automatically.

# In ES5, you can define multiple properties in a single statement using the Object.defineProperties() method.

# JavaScript object property descriptor

    # The  Object.getOwnPropertyDescriptor() method allows you to get the descriptor object of a property.
    # The Object.getOwnPropertyDescriptor() method takes two arguments:
        - An object
        - A property of the object

# if you add 'accessor property' fullname here, it will be converted to data property and get/ set will be replaced bby writable and value

DAY 4 ====================================================================================================

# Exercise - Stopwatch

# **proto** vs. [[Prototype]]

    # **proto** is the property of instance. Ex: obj.**proto**
    # [[prototype]] is the property of constructor functions.

# Ex. 'gadget1.**proto**' is same as writing 'gadget1.constructor.prototype'

DAY 7 ====================================================================================================

# Hoisting - function declarationn are hoisted but function expressions are not.

            - class declaration ad class expression not hoisted

# static method inside a class does not exists inside the object but, the class.

# ES6 internally follows 'use strict'

# In ES6 class syntax, private properties and methods using symbols and weakmaps.

# Symbol() returns a unique identifier. Do not use new Symbol(), that's a constructor.

# Weakmap is a dictionary with keys as objects and value as anything. The term 'weak' means if a key (i.e.object) is unreferenced, then it will be garbage collected.

# Use new Weakmap()

# Modules

- No modules in ES5

  Types of module formats:

- AMD: Asynchronous Module Definition
- Common Js
- UMD: Universal Module Definition
- ES6 Modules

# there's no et ot const in ES5

# Babel is a transpiler, used to translate the js codeinto ES5 supported version for cross browser compatibility.

# Every js file is translated by babel nd doding it manually is not possible, hence we use bundling of js files using webpack, which enables every file to be transpiled by babel before bundling.
