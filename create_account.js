document.getElementById("createaccount").addEventListener("click", makerequest);
var fname = document.getElementById("fullname");
console.log(fname);
var email = document.getElementById("email");
var date = document.getElementById("dateofIncorporation");
var password = document.getElementById("password");
var conpassword = document.getElementById("conpassword");
function makerequest(e) {
    e.preventDefault();
    if (fname.value == "") {
        document.getElementById("fullname-error1").innerHTML =
            "**please fill the fullname field";
        return false;
    }
    else {
        document.getElementById("fullname-error1").innerHTML =
            " ";
    }
    if (fname.value.length <= 2 || fname.value.length > 20) {
        document.getElementById("fullname-error1").innerHTML =
            "**user length must be between 2 and 20";
        return false;
    }
    else {
        document.getElementById("fullname-error1").innerHTML =
            " ";
    }
    if (date.value == "") {
        document.getElementById("fullname-error2").innerHTML =
            "**please fill the date field";
        return false;
    }
    else {
        document.getElementById("fullname-error2").innerHTML =
            " ";
    }
    if (email.value == "") {
        document.getElementById("fullname-error3").innerHTML =
            "**please fill the email field";
        return false;
    }
    else {
        document.getElementById("fullname-error3").innerHTML =
            " ";
    }
    if (password.value == "") {
        document.getElementById("fullname-error4").innerHTML =
            "**please fill the password field";
        return false;
    }
    else {
        document.getElementById("fullname-error4").innerHTML =
            " ";
    }
    if (password.value.length <= 5 || password.value.length > 20) {
        document.getElementById("fullname-error4").innerHTML =
            "**password length must be between 6 and 20";
        return false;
    }
    else {
        document.getElementById("fullname-error4").innerHTML =
            " ";
    }
    if (conpassword.value == "") {
        document.getElementById("fullname-error5").innerHTML =
            "**please fill the password field";
        return false;
    }
    else {
        document.getElementById("fullname-error5").innerHTML =
            " ";
    }
    if (password.value != conpassword.value) {
        document.getElementById("fullname-error5").innerHTML =
            "**password are not matching!";
        return false;
    }
    else {
        document.getElementById("fullname-error5").innerHTML =
            " ";
    }
    var data = {
        username: fname.value,
        email: email.value,
        password: password.value
    };
    console.log(data);
    fetch("https://microbankv2.getsandbox.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log("Success:", data);
    })["catch"](function (error) {
        console.error("Error:", error);
    });
}
