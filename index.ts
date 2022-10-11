var fname = <HTMLInputElement>document.getElementById("login-email");
var password = document.getElementById("password")! as HTMLInputElement;

var button = document.getElementById("login-btn1")!;
console.log(button);

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (fname.value == "") {
    (<HTMLInputElement>document.getElementById("fullname-error1")).innerHTML =
      "*please fill the email field";
    return false;
  } else {
    (<HTMLInputElement>document.getElementById("fullname-error1")).innerHTML =
      " ";
  }
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (fname.value.match(validRegex)) {
    return true;
  } else {
    (<HTMLInputElement>document.getElementById("fullname-error1")).innerHTML =
      "*please check email address";
  }
  if (password.value == "") {
    (<HTMLInputElement>document.getElementById("fullname-error2")).innerHTML =
      "*please fill the password field";
    return false;
  } else {
    (<HTMLInputElement>document.getElementById("fullname-error2")).innerHTML =
      " ";
  }
  console.log(password.value);
  (async () => {
    var users = await fetch(
      `https://microbankv2.getsandbox.com/users/${fname.value}/${password.value}`
    ).then((response) => response.json());

    console.log(users.email);

    if (users.email == fname.value) {
      localStorage.setItem("isLogin", "1");
      localStorage.setItem("email", users.email);

      localStorage.setItem("fullname", users.username);

      window.location.href = "dashboard.html";
    } else {
      alert("Invalid User");
    }
  })();
});

const togglePassword = document.querySelector(
  "#togglePassword"
)! as HTMLInputElement;
const inputpassword = document.querySelector("#password")! as HTMLInputElement;

togglePassword.addEventListener("click", function (e) {
  const type =
    inputpassword.getAttribute("type") === "password" ? "text" : "password";
  inputpassword.setAttribute("type", type);

  this.classList.toggle("fa-eye-slash");
});

//https://javascript.plainenglish.io/implementing-login-case-using-localstorage-and-sessionstorage-bfddce5d2198#:~:text=var%20password%20%3D%20document.,(%E2%80%9Ccurrentloggedin%E2%80%9D%2Cusername)%3B
