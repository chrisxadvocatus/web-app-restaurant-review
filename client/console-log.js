// login to console
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  console.log(`Username: ${username} ; Password: ${password}`);
});

const signUpForm   = document.getElementById("sign-up-form");
const signUpButton = document.getElementById("sign-up-form-submit");

signUpButton.addEventListener("click", (e) => {
  e.preventDefault();
  const fullName  = signUpForm.fullName.value;
  const email     = signUpForm.email.value;
  const username  = signUpForm.username.value;
  const password  = signUpForm.password.value;
  const password2 = signUpForm.password2.value;

  console.log(`Full Name: ${fullName} ; Email: ${email} ; Username: ${username} ; Password: ${password} ; Password confirmation: ${password2}`);
});
// 