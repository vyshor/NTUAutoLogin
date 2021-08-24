const login = document.getElementById("j_username");
const password = document.getElementsByName("j_password")[0];
login.value = creds.userName;
password.value = creds.password;
document.getElementById("login").submit();
