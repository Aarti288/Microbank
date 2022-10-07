var logoutbtn = document.getElementById("sub-menu-link1");
var isLogin = localStorage.getItem("isLogin");
if (isLogin === "0") {
    window.location.replace("../index.html");
}
logoutbtn.onclick = function () {
    var isLogin = localStorage.getItem("isLogin");
    localStorage.setItem("isLogin", "0");
    if (isLogin === "0") {
        window.location.replace("../index.html");
    }
};
function getprevious() {
    var x = document.getElementById("summary-page");
    var y = document.getElementById("details-container");
    y.style.display = "none";
    x.style.display = "flex";
}
function getnext() {
    var x = document.getElementById("summary-page");
    var y = document.getElementById("details-container");
    x.style.display = "none";
    y.style.display = "flex";
}
function togglemenu() {
    var z = document.getElementById("submenu");
    if (z.style.display === "none") {
        z.style.display = "block";
    }
    else {
        z.style.display = "none";
    }
}
fetch("https://microbankv2.getsandbox.com/services/1A", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(function (response) { return response.json(); })
    .then(function (data) {
    console.log("Success:", data);
    var count = data[0].starRating;
    var count1 = data[1].starRating;
    var count2 = data[2].starRating;
    console.log(count);
    console.log(count1);
    console.log(count2);
    var index1 = document.getElementById("star1");
    console.log(index1);
    for (var i = 1; i <= count1; i++) {
        var index1 = document.getElementById("account".concat(i));
        index1.style.color = "green";
    }
    for (var i = 1; i <= count; i++) {
        var index1 = document.getElementById("income".concat(i));
        index1.style.color = "green";
    }
    for (var i = 1; i <= count2; i++) {
        var index1 = document.getElementById("spends".concat(i));
        index1.style.color = "green";
    }
})["catch"](function (error) {
    console.error("Error:", error);
});
var rate = document.getElementById("rate");
rate.addEventListener("click", function (e) {
    var id = e.target.id.slice(7, 8);
    for (var j = 1; j <= 6; j++) {
        for (var i = 1; i <= id; i++) {
            var index1 = document.getElementById("account".concat(i));
            index1.style.color = "green";
        }
        var index = document.getElementById("account".concat(j));
        index.style.color = "black";
    }
    for (var j = 1; j <= 6; j++) {
        for (var i = 1; i <= id; i++) {
            var index1 = document.getElementById("account".concat(i));
            index1.style.color = "green";
        }
        var index = document.getElementById("account".concat(j));
        index.style.color = "black";
    }
});
var income = document.getElementById("income");
income.addEventListener("click", function (e) {
    var id1 = e.target.id.slice(6, 7);
    console.log(id1);
    for (var j = 1; j <= 6; j++) {
        for (var i = 1; i <= id1; i++) {
            var index1 = document.getElementById("income".concat(i));
            index1.style.color = "green";
        }
        var index = document.getElementById("income".concat(j));
        index.style.color = "black";
    }
    for (var j = 1; j <= 6; j++) {
        for (var i = 1; i <= id1; i++) {
            var index1 = document.getElementById("income".concat(i));
            index1.style.color = "green";
        }
        var index = document.getElementById("income".concat(j));
        index.style.color = "black";
    }
});
var spends = document.getElementById("spendsss");
spends.addEventListener("click", function (e) {
    var id2 = e.target.id.slice(8, 9);
    console.log(id2);
    for (var j = 1; j <= 6; j++) {
        for (var i = 1; i <= id2; i++) {
            var index1 = document.getElementById("spendsss".concat(i));
            index1.style.color = "green";
        }
        var index = document.getElementById("spendsss".concat(j));
        index.style.color = "black";
    }
    for (var j = 1; j <= 6; j++) {
        for (var i = 1; i <= id2; i++) {
            var index1 = document.getElementById("spendsss".concat(i));
            index1.style.color = "green";
        }
        var index = document.getElementById("spendsss".concat(j));
        index.style.color = "black";
    }
});
// function checkOddColumns() {
//   for (let i = 0; i < fa.length; i++) {
//     if (fa[i].style.color == "fa fa-star") {
//       fa[i].style.color = "green";
//     } else {
//       fa[i].style.color = "fa fa-star";
//     }
//   }
// }
