var fname = document.getElementById("login-email");
var logoutbtn = document.getElementById("sub-menu-link1");
var isLogin = localStorage.getItem("isLogin");
if (isLogin === "0") {
  window.location.replace("../index.html");
}
var username = localStorage.getItem("fullname");
console.log(username);
var useremail = localStorage.getItem("email");
console.log(useremail);
logoutbtn.onclick = function () {
  var isLogin = localStorage.getItem("isLogin");
  localStorage.setItem("isLogin", "0");
  if (isLogin === "0") {
    localStorage.removeItem("username");
    window.location.replace("../index.html");
  }
};
function getprevious() {
  var x = document.getElementById("summary-page");
  var y = document.getElementById("details-container");
  y.style.display = "none";
  x.style.display = "flex";
  x.style.borderTop = "#0000FF";
}
function getnext() {
  var x = document.getElementById("summary-page");
  var y = document.getElementById("details-container");
  x.style.display = "none";
  y.style.display = "flex";
}
var values = "".concat(username).split(" ");
var f_name = values[0];
var l_name = ""
  .concat(username)
  .substring("".concat(username).indexOf(" ") + 1);
var profilecircle = document.getElementById("profile-circle");
profilecircle.innerText =
  "".concat(f_name).charAt(0).toUpperCase() +
  "".concat(l_name).charAt(0).toUpperCase();
function togglemenu() {
  var values = "".concat(username).split(" ");
  var f_name = values[0];
  var l_name = ""
    .concat(username)
    .substring("".concat(username).indexOf(" ") + 1);
  var pname = document.getElementById("pname");
  pname.innerText =
    "".concat(f_name).charAt(0).toUpperCase() +
    "".concat(l_name).charAt(0).toUpperCase();
  var fullname = document.getElementById("person-name1");
  fullname.innerText = "".concat(username);
  var email = document.getElementById("email-id");
  email.innerText = "".concat(useremail);
  var z = document.getElementById("submenu");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}
fetch("https://microbankv3.getsandbox.com/services", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then(function (response) {
    return response.json();
  })
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
  })
  ["catch"](function (error) {
    console.error("Error:", error);
  });
var rate = document.getElementById("rate");
rate.addEventListener("click", function (e) {
  var id = e.target.id.slice(7, 8);
  var data = {
    userid: "1A",
    categoryID: "C1",
    categoryName: "Current Account",
    starRating: id,
  };
  console.log(data);
  fetch("https://microbankv3.getsandbox.com/service", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Success:", data);
    })
    ["catch"](function (error) {
      console.error("Error:", error);
    });
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
  var data = {
    categoryID: "C2",
    categoryName: "Payroll",
    userid: "1A",
    starRating: id1,
  };
  console.log(data);
  fetch("https://microbankv3.getsandbox.com/service", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Success:", data);
    })
    ["catch"](function (error) {
      console.error("Error:", error);
    });
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
  var data = {
      categoryID: "C3",
      categoryName: "Payment",
      userid: "1A",
      starRating: id2,
    },
    console,
    log;
  data;
  fetch("https://microbankv3.getsandbox.com/service", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Success:", data);
    })
    ["catch"](function (error) {
      console.error("Error:", error);
    });
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
var starrate = document.getElementById("rate");
var span1 = document.createElement("span");
var span2 = document.createElement("span");
var span3 = document.createElement("span");
var span4 = document.createElement("span");
var span5 = document.createElement("span");
span1.setAttribute("class", "fa fa-star");
span2.setAttribute("class", "fa fa-star");
span3.setAttribute("class", "fa fa-star");
span4.setAttribute("class", "fa fa-star");
span5.setAttribute("class", "fa fa-star");
span1.setAttribute("id", "account1");
span2.setAttribute("id", "account2");
span3.setAttribute("id", "account3");
span4.setAttribute("id", "account4");
span5.setAttribute("id", "account5");
starrate.appendChild(span1);
starrate.appendChild(span2);
starrate.appendChild(span3);
starrate.appendChild(span4);
starrate.appendChild(span5);
var starincome = document.getElementById("income");
var span1 = document.createElement("span");
var span2 = document.createElement("span");
var span3 = document.createElement("span");
var span4 = document.createElement("span");
var span5 = document.createElement("span");
span1.setAttribute("class", "fa fa-star");
span2.setAttribute("class", "fa fa-star");
span3.setAttribute("class", "fa fa-star");
span4.setAttribute("class", "fa fa-star");
span5.setAttribute("class", "fa fa-star");
span1.setAttribute("id", "income1");
span2.setAttribute("id", "income2");
span3.setAttribute("id", "income3");
span4.setAttribute("id", "income4");
span5.setAttribute("id", "income5");
starincome.appendChild(span1);
starincome.appendChild(span2);
starincome.appendChild(span3);
starincome.appendChild(span4);
starincome.appendChild(span5);
var starspend = document.getElementById("spendsss");
var span1 = document.createElement("span");
var span2 = document.createElement("span");
var span3 = document.createElement("span");
var span4 = document.createElement("span");
var span5 = document.createElement("span");
span1.setAttribute("class", "fa fa-star");
span2.setAttribute("class", "fa fa-star");
span3.setAttribute("class", "fa fa-star");
span4.setAttribute("class", "fa fa-star");
span5.setAttribute("class", "fa fa-star");
span1.setAttribute("id", "spendsss1");
span2.setAttribute("id", "spendsss2");
span3.setAttribute("id", "spendsss3");
span4.setAttribute("id", "spendsss4");
span5.setAttribute("id", "spendsss5");
starspend.appendChild(span1);
starspend.appendChild(span2);
starspend.appendChild(span3);
starspend.appendChild(span4);
starspend.appendChild(span5);
