1. Pure functions :

- These functions returns the same output everytime when called with the same arguments.
- For example - A function that appends elements to array without altering the original array.
  [refer [1] in question3.js]

2. '.push' method mutates arrays and objects. Use spread operator instead.
3. We cannot sort objects, but we can sort the properties inside those objects.
4. Array(10) is same as writing => new Array(10). Creates an empty array of length 10;
5. Shuffle fuunction motive is to alter the position of the elements to some random position. (Be it for primitives, object, arrays or array of arrays)

# Efficient Code snippets:

1.  [...Array(end - start + 1).keys()].map((el) => el + start);
