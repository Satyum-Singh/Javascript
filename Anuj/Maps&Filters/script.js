let student = [
  { name: "Anuj", age: 20, city: "Delhi", salary: 20000 },
  { name: "Rahul", age: 21, city: "Mumbai", salary: 30000 },
  { name: "Rohit", age: 22, city: "Chennai", salary: 40000 },
  { name: "Raj", age: 23, city: "Kolkata", salary: 50000 },
  { name: "Ravi", age: 24, city: "Banglore", salary: 60000 },
];

const newArrays = student.filter((item, index, student) => {
  if (item.age % 2 === 0) return true;
  else return false;
});

console.log(newArrays);
