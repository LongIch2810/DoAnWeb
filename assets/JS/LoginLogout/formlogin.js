const putOut = document.querySelector(".form-login .login .btn");
let index_email;
let index_password;
let booleanEmailLogin = false;
let booleanPasswordLogin = false;


putOut.addEventListener("click", (e) => {
  e.preventDefault();
  const emailLogin = document.querySelector("#email");
  const passwordLogin = document.querySelector("#password");
  checkLo(emailLogin, passwordLogin);
  if (booleanEmailLogin && booleanPasswordLogin && index_email===index_password) {
    document.location.href="http://127.0.0.1:5500/DoAnWeb-main/views/web/Information.html";
    localStorage.setItem("index",JSON.stringify(index_email));
  } else {
    document.querySelector(".notification").innerHTML =
      "<i class='bx bx-error-circle'></i> Email hoặc mật khẩu không chính xác";
    document.querySelector(".notification").style.color =
      "red";
    document.querySelector(".notification").style.fontSize =
      "12px";
  }
});

function checkLo(emailLogin, passwordLogin){
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
      index_email=i;
    } else {
      booleanEmailLogin = false;
    }
    if(JSON.parse(localStorage.getItem("UsersInfo"))[i].passwordUser ===
    passwordLogin.value) {
      booleanPasswordLogin = true;
      index_password=i;
    }
    else {
      booleanPasswordLogin = false;
    }
    if(booleanEmailLogin == true && booleanPasswordLogin == true && index_email===index_password){
      break;
    }
  }
};

