const user = {
  id: 1,
  name: "John",
  age: 25,
};

function toStoreUserDetails(newUser) {
  localStorage.setItem("user", JSON.stringify(newUser));
}

toStoreUserDetails(user);

function toPullOutUserDetails() {
  let userDetails = JSON.parse(localStorage.getItem("user"));
  console.log(userDetails);
}

toPullOutUserDetails();
