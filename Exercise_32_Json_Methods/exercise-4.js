const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const json = JSON.stringify(person, (key, value) => {
  if (key === "firstName" || key === "lastName") {
    return undefined;
  }
  return value;
});

console.log(json); // Should return: { id: 1, age: 25 }
