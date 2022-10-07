(<HTMLInputElement>document.getElementById("createaccount")).addEventListener(
  "click",
  makerequest
);
var fname = document.getElementById("fullname")! as HTMLInputElement;
console.log(fname);
var email = document.getElementById("email")! as HTMLInputElement;
var date = document.getElementById("dateofIncorporation")! as HTMLInputElement;
var password = document.getElementById("password")! as HTMLInputElement;
var conpassword = document.getElementById("conpassword")! as HTMLInputElement;

function makerequest(e: any) {
  e.preventDefault();

  if (fname.value == "") {
    (<HTMLInputElement>document.getElementById("fullname-error1")).innerHTML =
      "**please fill the fullname field";
    return false;
  } else {
    (<HTMLInputElement>document.getElementById("fullname-error1")).innerHTML =
      " ";
  }
  if (fname.value.length <= 2 || fname.value.length > 20) {
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
    username: fname.value,
    email: email.value,
    password: password.value,
  };

  console.log(data);

  fetch("https://microbankv2.getsandbox.com/users", {
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
