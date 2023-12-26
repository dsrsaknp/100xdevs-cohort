# Day 1

1. Javascript engine creates the execution context

2. the global object means all the code we'll be running will e insie this wrapper /this global execution context and creates a 'this' variable that points to window in browsers and global in server.

3. Any variable or functions that we write globally is not written under any function. It just sits on the global/ window object. They can be accessed directly in browser directly by their name or as a property on the window object.

4. Execution context creation phase

- global
- this
- outer env
- memory space for variables and functions setting them to undefined. (basically hoisting)

5. Not defined error and undefined are different in js. 'undefined' is a special value in js, means the variable exists in memory space as undefined, while the former means variable don;t exists in memory itself.

6. Never set variable to undefined manually as then we cannot figure out whether it has been set by hoisting or devloper, hence it's good not to do so for debugging purposes.

7. Execution context execution phase

- Every function creates execution context- makes uo an execution stack. When an execution context i finished, it is popped off the stack.

8. Lexical environment - where the code sits physically i.e. globally.

9. ES6 or ES2015 onwards, variables are declared using let and const. Follows TDZ, means variables exist in memory space but not allowed to use.

10. Function currying

- Creating a copy of a function but with some preset parameters.
- Very useful in mathematical situations such as when writing a library.

# DAY 2

1. Let's say we have a function as follows:

- function <function_name> (<parameter1>, <paramenter2>) {
  return <parameter1> + <parameter2>
  }

We now want to implement currying i.e. we want to invoke this function for different cases but with parameter1 as fixed, then syntax will be as below:

- <function_name>.bind(this, <parameter1>), where <parameter1> will be preset parameter

The above syntax is equivalent to the following:

- function <function_name>() {
  let parameter1 = <passed_value>;
  return <some_js_expression>;
  }

Now when this function's definition is called, it will be called with the second parameter while it will already contain the first parameter.

Walkthrough:

- A function called with bind will create a copy of function and set the initial parameter passed.
- This function is invoked later with other parameters.
- This invoked function will now have parameter1 as preset value for every copy of function generation on its subsequent invocation.
