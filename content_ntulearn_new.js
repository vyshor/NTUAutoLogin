const login = document.getElementById("userNameInput");
const password = document.getElementById("passwordInput");
const login_button = document.getElementById("submitButton");
login.value = creds.userName + '@student.main.ntu.edu.sg';
password.value = creds.password;
login_button.click();
