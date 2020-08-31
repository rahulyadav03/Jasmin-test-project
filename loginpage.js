const loginForm = document.getElementById("login-form");
const loginBtn = document.getElementById("submit");
const loginErrorMsg = document.getElementById("error-message");

/**
 * Adding event listner to login button
 */
loginBtn.addEventListener("click", e => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  let login = checkCredentials(username, password);

  if (login) {
    alert("You have successfully logged in.");
    location.reload();
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});

function checkCredentials(username, password) {
  if (username === "rahul" && password === "abc") {
    return true;
  } else {
    return false;
  }
}
