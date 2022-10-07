var logoutbtn = document.getElementById("sub-menu-link1")! as HTMLInputElement;
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
  let x = document.getElementById("summary-page")! as HTMLInputElement;
  let y = document.getElementById("details-container")! as HTMLInputElement;

  y.style.display = "none";
  x.style.display = "flex";
}

function getnext() {
  let x = document.getElementById("summary-page")! as HTMLInputElement;
  let y = document.getElementById("details-container")! as HTMLInputElement;

  x.style.display = "none";
  y.style.display = "flex";
}

function togglemenu() {
  var z = document.getElementById("submenu")! as HTMLInputElement;
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}

fetch("https://microbankv2.getsandbox.com/services/1A", {
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
  console.log(id2);

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

// function checkOddColumns() {
//   for (let i = 0; i < fa.length; i++) {
//     if (fa[i].style.color == "fa fa-star") {
//       fa[i].style.color = "green";
//     } else {
//       fa[i].style.color = "fa fa-star";
//     }
//   }
// }
