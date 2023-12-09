const putOut = document.querySelector(".form-login .login .btn");
let index_email;
let index_password;
let booleanEmailLogin = false;
let booleanPasswordLogin = false;
let checkEmail = false;
let checkPassword = false;
let checkEmailLogin = (emailLogin) => {
  if (emailLogin.value === "") {
    emailLogin.style.border = "1px solid red";
    document.querySelector(".email-error").style.color = "red";
    document.querySelector(".email-error").innerHTML = "Không bỏ trống !";
    document.querySelector(".email-error").style.fontSize = "12px";
    document.querySelector(".email-error").style.marginBottom = "5px";
  } else if (
    !emailLogin.value.match(/^[A-za-z][A-Za-z0-9._]+@[A-za-z]{4,}.com$/g)
  ) {
    emailLogin.style.border = "1px solid red";
    document.querySelector(".email-error").style.color = "red";
    document.querySelector(".email-error").innerHTML = "Email lỗi!";
    document.querySelector(".email-error").style.fontSize = "12px";
    document.querySelector(".email-error").style.marginBottom = "5px";
  } else {
    checkEmail = true;
  }
};
let checkPasswordLogin = (passwordLogin) => {
  if (passwordLogin.value === "") {
    passwordLogin.style.border = "1px solid red";
    document.querySelector(".password-error").style.color = "red";
    document.querySelector(".password-error").innerHTML = "Không bỏ trống !";
    document.querySelector(".password-error").style.fontSize = "12px";
    document.querySelector(".password-error").style.marginBottom = "5px";
  } else if (!password.value.match(/^[A-Za-z0-9.!@#$%^&*_]{8,16}$/g)) {
    passwordLogin.style.border = "1px solid red";
    document.querySelector(".password-error").style.color = "red";
    document.querySelector(".password-error").innerHTML =
      "Mật khẩu tối thiểu 8 kí tự, tối đa 16 kí tự !";
    document.querySelector(".password-error").style.fontSize = "12px";
    document.querySelector(".password-error").style.marginBottom = "5px";
  } else {
    checkPassword = true;
  }
};
putOut.addEventListener("click", (e) => {
  e.preventDefault();
  const emailLogin = document.querySelector("#email");
  const passwordLogin = document.querySelector("#password");
  checkEmailLogin(emailLogin);
  checkPasswordLogin(passwordLogin);
  if (checkEmail && checkPassword) {
    let account = JSON.parse(localStorage.getItem("UsersInfo"));
    console.log(account);
    if (account === null) {
      document.querySelector(".notification").innerHTML =
        "<i class='bx bx-error-circle'></i> Chưa có tài khoản, hãy đăng ký tài khoản";
      document.querySelector(".notification").style.color = "red";
      document.querySelector(".notification").style.fontSize = "12px";
    } else {
      checkLo(emailLogin, passwordLogin);
      if (
        booleanEmailLogin &&
        booleanPasswordLogin &&
        index_email === index_password
      ) {
        document.location.href =
          "http://127.0.0.1:5500/DoAnWeb-main/views/web/Information.html";
        localStorage.setItem("index", JSON.stringify(index_email));
      } else {
        document.querySelector(".notification").innerHTML =
          "<i class='bx bx-error-circle'></i> Email hoặc mật khẩu không chính xác";
        document.querySelector(".notification").style.color = "red";
        document.querySelector(".notification").style.fontSize = "12px";
      }
    }
  } else {
    document.querySelector(".notification").innerHTML =
      "<i class='bx bx-error-circle'></i> Hãy nhập chính xác thông tin !";
    document.querySelector(".notification").style.color = "red";
    document.querySelector(".notification").style.fontSize = "12px";
  }
});

function checkLo(emailLogin, passwordLogin) {
  for (
    let i = 0;
    i < JSON.parse(localStorage.getItem("UsersInfo")).length;
    i++
  ) {
    if (
      JSON.parse(localStorage.getItem("UsersInfo"))[i].emailUser ===
      emailLogin.value
    ) {
      booleanEmailLogin = true;
      index_email = i;
    } else {
      booleanEmailLogin = false;
    }
    if (
      JSON.parse(localStorage.getItem("UsersInfo"))[i].passwordUser ===
      passwordLogin.value
    ) {
      booleanPasswordLogin = true;
      index_password = i;
    } else {
      booleanPasswordLogin = false;
    }
    if (
      booleanEmailLogin == true &&
      booleanPasswordLogin == true &&
      index_email === index_password
    ) {
      break;
    }
  }
}
