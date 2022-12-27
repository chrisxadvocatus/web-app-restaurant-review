const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  console.log(`Username: ${username} ; Password: ${password}`);
})

// function sConsole(event) {
  // event.preventDefault();
  // let data = document.getElementByName("data");
  // console.log(data.value);
// }