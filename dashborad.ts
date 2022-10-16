var fname = <HTMLInputElement>document.getElementById("login-email");
var logoutbtn = document.getElementById("sub-menu-link1")! as HTMLInputElement;
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
  let x = document.getElementById("summary-page")! as HTMLInputElement;
  let y = document.getElementById("details-container")! as HTMLInputElement;

  y.style.display = "none";

  x.style.display = "flex";
  x.style.borderTop = "#0000FF";
}

function getnext() {
  let x = document.getElementById("summary-page")! as HTMLInputElement;
  let y = document.getElementById("details-container")! as HTMLInputElement;

  x.style.display = "none";
  y.style.display = "flex";
}

var values = `${username}`.split(" ");

var f_name = values[0];
var l_name = `${username}`.substring(`${username}`.indexOf(" ") + 1);

let profilecircle = document.getElementById(
  "profile-circle"
)! as HTMLInputElement;
profilecircle.innerText =
  `${f_name}`.charAt(0).toUpperCase() + `${l_name}`.charAt(0).toUpperCase();

function togglemenu() {
  var values = `${username}`.split(" ");

  var f_name = values[0];
  var l_name = `${username}`.substring(`${username}`.indexOf(" ") + 1);

  let pname = document.getElementById("pname")! as HTMLInputElement;
  pname.innerText =
    `${f_name}`.charAt(0).toUpperCase() + `${l_name}`.charAt(0).toUpperCase();

  let fullname = document.getElementById("person-name1")! as HTMLInputElement;
  fullname.innerText = `${username}`;

  let email = document.getElementById("email-id")! as HTMLInputElement;
  email.innerText = `${useremail}`;

  var z = document.getElementById("submenu")! as HTMLInputElement;
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
  // body: JSON.stringify(data),
})
  .then((response) => response.json())

  .then((data) => {
    console.log("Success:", data);
    let count = data[0].starRating;
    let count1 = data[1].starRating;
    let count2 = data[2].starRating;
    console.log(count);
    console.log(count1);
    console.log(count2);

    var index1 = document.getElementById("star1")! as HTMLInputElement;
    console.log(index1);

    for (let i = 1; i <= count1; i++) {
      var index1 = document.getElementById(`account${i}`)! as HTMLInputElement;
      index1.style.color = "green";
    }
    for (let i = 1; i <= count; i++) {
      var index1 = document.getElementById(`income${i}`)! as HTMLInputElement;
      index1.style.color = "green";
    }
    for (let i = 1; i <= count2; i++) {
      var index1 = document.getElementById(`spends${i}`)! as HTMLInputElement;
      index1.style.color = "green";
    }
  })

  .catch((error) => {
    console.error("Error:", error);
  });

var rate = document.getElementById("rate")!;
rate.addEventListener("click", (e) => {
  let id = e.target.id.slice(7, 8);
  const data = {
    "userid": "1A",
    "categoryID": "C1",
    "categoryName": "Current Account",
    "starRating": id,
  
  };

  console.log(data);

  fetch("https://microbankv3.getsandbox.com/service", {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  })
    .then((response) => response.json())

    .then((data) => {
      console.log("Success:", data);
    })

    .catch((error: any) => {
      console.error("Error:", error);
    });

  for (let j = 1; j <= 6; j++) {
    for (let i = 1; i <= id; i++) {
      let index1 = document.getElementById(`account${i}`)! as HTMLInputElement;
      index1.style.color = "green";
    }
    let index = document.getElementById(`account${j}`)! as HTMLInputElement;
    index.style.color = "black";
  }

  for (let j = 1; j <= 6; j++) {
    for (let i = 1; i <= id; i++) {
      let index1 = document.getElementById(`account${i}`)! as HTMLInputElement;
      index1.style.color = "green";
    }
    let index = document.getElementById(`account${j}`)! as HTMLInputElement;
    index.style.color = "black";
  }
});

var income = document.getElementById("income")!;
income.addEventListener("click", (e) => {
  let id1 = e.target.id.slice(6, 7);
  console.log(id1);

  const data = {
    "categoryID": "C2",
        "categoryName": "Payroll",
        "userid": "1A",
          "starRating": id1,
  };

  console.log(data);

  fetch("https://microbankv3.getsandbox.com/service", {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  })
    .then((response) => response.json())

    .then((data) => {
      console.log("Success:", data);
    })

    .catch((error: any) => {
      console.error("Error:", error);
    });

  for (let j = 1; j <= 6; j++) {
    for (let i = 1; i <= id1; i++) {
      let index1 = document.getElementById(`income${i}`)! as HTMLInputElement;
      index1.style.color = "green";
    }
    let index = document.getElementById(`income${j}`)! as HTMLInputElement;
    index.style.color = "black";
  }

  for (let j = 1; j <= 6; j++) {
    for (let i = 1; i <= id1; i++) {
      let index1 = document.getElementById(`income${i}`)! as HTMLInputElement;
      index1.style.color = "green";
    }
    let index = document.getElementById(`income${j}`)! as HTMLInputElement;
    index.style.color = "black";
  }
});

var spends = document.getElementById("spendsss")!;
spends.addEventListener("click", (e) => {
  let id2 = e.target.id.slice(8, 9);

  const data = {
       "categoryID": "C3",
        "categoryName": "Payment",
        "userid": "1A",
         "starRating": id2
    },

  console.log(data);

  fetch("https://microbankv3.getsandbox.com/service", {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  })
    .then((response) => response.json())

    .then((data) => {
      console.log("Success:", data);
    })

    .catch((error: any) => {
      console.error("Error:", error);
    });



  for (let j = 1; j <= 6; j++) {
    for (let i = 1; i <= id2; i++) {
      let index1 = document.getElementById(`spendsss${i}`)! as HTMLInputElement;
      index1.style.color = "green";
    }
    let index = document.getElementById(`spendsss${j}`)! as HTMLInputElement;
    index.style.color = "black";
  }

  for (let j = 1; j <= 6; j++) {
    for (let i = 1; i <= id2; i++) {
      let index1 = document.getElementById(`spendsss${i}`)! as HTMLInputElement;
      index1.style.color = "green";
    }
    let index = document.getElementById(`spendsss${j}`)! as HTMLInputElement;
    index.style.color = "black";
  }
});

let starrate = document.getElementById("rate")! as HTMLInputElement;
 let span1 = document.createElement("span")! as HTMLInputElement;
let span2 = document.createElement("span")! as HTMLInputElement;
let span3 = document.createElement("span")! as HTMLInputElement;
let span4 = document.createElement("span")! as HTMLInputElement;
let span5 = document.createElement("span")! as HTMLInputElement;

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

let starincome = document.getElementById("income")! as HTMLInputElement;
let span1 = document.createElement("span")! as HTMLInputElement;
let span2 = document.createElement("span")! as HTMLInputElement;
let span3 = document.createElement("span")! as HTMLInputElement;
let span4 = document.createElement("span")! as HTMLInputElement;
let span5 = document.createElement("span")! as HTMLInputElement;

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

let starspend = document.getElementById("spendsss")! as HTMLInputElement;
let span1 = document.createElement("span")! as HTMLInputElement;
let span2 = document.createElement("span")! as HTMLInputElement;
let span3 = document.createElement("span")! as HTMLInputElement;
let span4 = document.createElement("span")! as HTMLInputElement;
let span5 = document.createElement("span")! as HTMLInputElement;

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



