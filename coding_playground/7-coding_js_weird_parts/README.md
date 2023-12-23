# Javascript engine creates the execution context

# the global object means all the code we'll be running will e insie this wrapper /this global execution context and creates a 'this' variable that points to window in browsers and global in server.

# Any variable or functions that we write globally is not written under any function. It just sits on the global/ window object. They can be accessed directly in browser directly by their name or as a property on the window object.

# 1. Execution context creation phase

- global
- this
- outer env
- memory space for variables and functions setting them to undefined. (basically hoisting)

# not defined error and undefined are different in js. 'undefined' is a special value in js, means the variable exists in memory space as undefined, while the former means variable don;t exists in memory itself.

# never set variable to undefined mnually as then we cannot figure out whether it has been set by hoisting or devloper, hence it's good not to do so for debugging purposes.

# 2. Execution context execution phase

# every function creates execution context- makes uo an execution stack. When an execution context i finished, it is popped off the stack.

# Lexical environment - where the code sits physically i.e. globally.

# ES6 or ES2015 onwards, variables are declared using let and const. Follows TDZ, means variables exist in memory space but not allowed to use.
