// 1) Get array of names from given array of users
const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];

// #1
console.log("#1");
const user_names = [];
users.forEach((user) => user_names.push(user.name));
console.log(user_names);

// #1.1
console.log("#1.1");
const names = users.map((user) => user.name);
console.log(names);

// 2) Get only active users
console.log("#2");
const active_users = users
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log(active_users);

// 3) Sort users by age descending
console.log("#3");
const age_desc = users
  .sort((user1, user2) => user2.age - user1.age)
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log(age_desc);
