const user = {
  id: 1,
  name: "John",
  age: 25,
};

function toStoreUserDetails(newUser) {
  localStorage.setItem("user", JSON.stringify(newUser));
}

toStoreUserDetails(user);
