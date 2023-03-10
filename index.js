var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var login = /** @class */ (function () {
    function login() {
        this.fname = document.getElementById("login-email").value;
        this.password = document.getElementById("password").value;
    }
    login.prototype.buttonclick = function () {
        var _this = this;
        button.addEventListener("click", function (e) {
            e.preventDefault();
            if (fname.value == "") {
                document.getElementById("fullname-error1").innerHTML =
                    "*please fill the email field";
                return false;
            }
            else {
                document.getElementById("fullname-error1").innerHTML =
                    " ";
            }
            if (password.value == "") {
                document.getElementById("fullname-error2").innerHTML =
                    "*please fill the password field";
                return false;
            }
            else {
                document.getElementById("fullname-error2").innerHTML =
                    " ";
            }
            console.log(password.value);
            (function () { return __awaiter(_this, void 0, void 0, function () {
                var users;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fetch("https://microbankv3.getsandbox.com/users/".concat(fname.value, "/").concat(password.value)).then(function (response) { return response.json(); })];
                        case 1:
                            users = _a.sent();
                            console.log(users.email);
                            if (users.email == fname.value) {
                                localStorage.setItem("isLogin", "1");
                                localStorage.setItem("email", users.email);
                                localStorage.setItem("fullname", users.username);
                                window.location.href = "dashboard.html";
                            }
                            else {
                                alert("Invalid User");
                            }
                            return [2 /*return*/];
                    }
                });
            }); })();
        });
        var togglePassword = document.querySelector("#togglePassword");
        var inputpassword = document.querySelector("#password");
        togglePassword.addEventListener("click", function (e) {
            var type = inputpassword.getAttribute("type") === "password" ? "text" : "password";
            inputpassword.setAttribute("type", type);
            this.classList.toggle("fa-eye-slash");
        });
        function myFunction() {
            var fname = document.getElementById("login-email").value;
            document.getElementById("fullname-error1").innerHTML =
                "*please fill the email field";
            return false;
        }
    };
    return login;
}());
var fname = document.getElementById("login-email");
var password1 = document.getElementById("password");
var button = document.getElementById("login-btn1");
var obj = new login();
obj.buttonclick();
var fname1 = document.getElementById("login-email");
var x = document.getElementById("login");
x.addEventListener("focus", myFocusFunction, true);
function myFocusFunction() {
    if (fname1.value == "") {
        document.getElementById("fullname-error1").innerHTML =
            "*please fill the email field";
        return false;
    }
    else {
        document.getElementById("fullname-error1").innerHTML =
            " ";
    }
    if (password.value == "") {
        document.getElementById("fullname-error2").innerHTML =
            "*please fill the password field";
        return false;
    }
    else {
        document.getElementById("fullname-error2").innerHTML =
            " ";
    }
}
