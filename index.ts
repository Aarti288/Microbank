
class login {
  public fname: string = (
    document.getElementById("login-email")! as HTMLInputElement
  ).value;
  private password: string = (
    document.getElementById("password")! as HTMLInputElement
  ).value;
  

 


buttonclick(): void | boolean {
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
      `https://microbankv3.getsandbox.com/users/${fname.value}/${password.value}`
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

function myFunction() {
 let fname= (
    document.getElementById("login-email")! as HTMLInputElement
  ).value;
 (<HTMLInputElement>document.getElementById("fullname-error1")).innerHTML =
      "*please fill the email field";
    return false;
}
}

var fname= document.getElementById("login-email")! as HTMLInputElement;
const password1 = document.getElementById("password")! as HTMLInputElement;
var button = document.getElementById("login-btn1")!;

const obj = new login();
obj.buttonclick();



let fname1 = document.getElementById("login-email")! as HTMLInputElement;
var x = document.getElementById("login")! as HTMLInputElement;
x.addEventListener("focus", myFocusFunction, true);

function myFocusFunction() {
  if (fname1.value == "") {
    (<HTMLInputElement>document.getElementById("fullname-error1")).innerHTML =
      "*please fill the email field";
    return false;
  }
  else{
    (<HTMLInputElement>document.getElementById("fullname-error1")).innerHTML =
      " ";
  }


   if (password.value == "") {
    (<HTMLInputElement>document.getElementById("fullname-error2")).innerHTML =
      "*please fill the password field";
    return false;
  } else {
    (<HTMLInputElement>document.getElementById("fullname-error2")).innerHTML =
      " ";
  }
}



