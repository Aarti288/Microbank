var Registration = /** @class */ (function () {
    function Registration(uname, email, password) {
        this.uname = document.getElementById("fullname").value;
        this.email = document.getElementById("email").value;
        this.password = document.getElementById("password").value;
    }
    return Registration;
}());
document.getElementById("createaccount").addEventListener("click", makerequest);
var uname = document.getElementById("fullname");
console.log(uname);
var email = document.getElementById("email");
var date = document.getElementById("dateofIncorporation");
var password = document.getElementById("password");
var conpassword = document.getElementById("conpassword");
function makerequest(e) {
    e.preventDefault();
    if (uname.value == "") {
        document.getElementById("fullname-error1").innerHTML =
            "**please fill the fullname field";
        return false;
    }
    else {
        document.getElementById("fullname-error1").innerHTML =
            " ";
    }
    if (uname.value.length <= 2 || uname.value.length > 20) {
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
        username: uname.value,
        email: email.value,
        password: password.value
    };
    console.log(data);
    fetch("https://microbankv3.getsandbox.com/users", {
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
