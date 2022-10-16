class Registration {
  uname: string;
  email: string;
  password: string;

  constructor(uname: string, email: string, password: string) {
    this.uname = (
      document.getElementById("fullname")! as HTMLInputElement
    ).value;
    this.email = (document.getElementById("email")! as HTMLInputElement).value;
    this.password = (
      document.getElementById("password")! as HTMLInputElement
    ).value;
  }
}

(<HTMLInputElement>document.getElementById("createaccount")).addEventListener(
  "click",
  makerequest
);
var uname = document.getElementById("fullname")! as HTMLInputElement;
console.log(uname);
var email = document.getElementById("email")! as HTMLInputElement;
var date = document.getElementById("dateofIncorporation")! as HTMLInputElement;
var password = document.getElementById("password")! as HTMLInputElement;
var conpassword = document.getElementById("conpassword")! as HTMLInputElement;

function makerequest(e: any) {
  e.preventDefault();

  if (uname.value == "") {
    (<HTMLInputElement>document.getElementById("fullname-error1")).innerHTML =
      "**please fill the fullname field";
    return false;
  } else {
    (<HTMLInputElement>document.getElementById("fullname-error1")).innerHTML =
      " ";
  }
  if (uname.value.length <= 2 || uname.value.length > 20) {
    (<HTMLInputElement>document.getElementById("fullname-error1")).innerHTML =
      "**user length must be between 2 and 20";
    return false;
  } else {
    (<HTMLInputElement>document.getElementById("fullname-error1")).innerHTML =
      " ";
  }

  if (date.value == "") {
    (<HTMLInputElement>document.getElementById("fullname-error2")).innerHTML =
      "**please fill the date field";
    return false;
  } else {
    (<HTMLInputElement>document.getElementById("fullname-error2")).innerHTML =
      " ";
  }

  if (email.value == "") {
    (<HTMLInputElement>document.getElementById("fullname-error3")).innerHTML =
      "**please fill the email field";
    return false;
  } else {
    (<HTMLInputElement>document.getElementById("fullname-error3")).innerHTML =
      " ";
  }

  if (password.value == "") {
    (<HTMLInputElement>document.getElementById("fullname-error4")).innerHTML =
      "**please fill the password field";
    return false;
  } else {
    (<HTMLInputElement>document.getElementById("fullname-error4")).innerHTML =
      " ";
  }

  if (password.value.length <= 5 || password.value.length > 20) {
    (<HTMLInputElement>document.getElementById("fullname-error4")).innerHTML =
      "**password length must be between 6 and 20";
    return false;
  } else {
    (<HTMLInputElement>document.getElementById("fullname-error4")).innerHTML =
      " ";
  }

  if (conpassword.value == "") {
    (<HTMLInputElement>document.getElementById("fullname-error5")).innerHTML =
      "**please fill the password field";
    return false;
  } else {
    (<HTMLInputElement>document.getElementById("fullname-error5")).innerHTML =
      " ";
  }
  if (password.value != conpassword.value) {
    (<HTMLInputElement>document.getElementById("fullname-error5")).innerHTML =
      "**password are not matching!";
    return false;
  } else {
    (<HTMLInputElement>document.getElementById("fullname-error5")).innerHTML =
      " ";
  }

  const data = {
    username: uname.value,
    email: email.value,
    password: password.value,
  };

  console.log(data);

  fetch("https://microbankv3.getsandbox.com/users", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  })
    .then((response) => response.json())

    .then((data) => {
      console.log("Success:", data);
    })

    .catch((error) => {
      console.error("Error:", error);
    });
}
