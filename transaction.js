var Transaction = [
    {
        TransactionID: "Transaction ID",
        Date: "Date",
        Amount: "Amount",
        Status: "Status",
        Action: "Action"
    },
    {
        TransactionID: "2011002039111",
        Date: "22-09-2021",
        Amount: "5,780",
        Status: "Approved"
    },
    {
        TransactionID: "2011002039111",
        Date: "19-09-2021",
        Amount: "1700",
        Status: "Approved"
    },
    {
        TransactionID: "2011002039111",
        Date: "20-08-2021",
        Amount: "2156",
        Status: "Rejected"
    },
    {
        TransactionID: "2011002039111",
        Date: "21-08-2021",
        Amount: "1,780",
        Status: "Approved"
    },
    {
        TransactionID: "2011002039111",
        Date: "20-08-2021",
        Amount: "8912",
        Status: "Rejected"
    },
];
var myTableDiv = document.getElementById("details-container");
var table = document.createElement("table");
table.setAttribute("id", "customers");
for (var _i = 0, Transaction_1 = Transaction; _i < Transaction_1.length; _i++) {
    var T = Transaction_1[_i];
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = T.TransactionID;
    tr.appendChild(td1);
    var td2 = document.createElement("td");
    td2.textContent = T.Date;
    tr.appendChild(td2);
    var td3 = document.createElement("td");
    td3.textContent = T.Amount;
    tr.appendChild(td3);
    var td4 = document.createElement("td");
    td4.textContent = T.Status;
    if (T.Status.includes("Approved")) {
        td4.style.color = "green";
    }
    else if (T.Status.includes("Rejected")) {
        td4.style.color = "red";
    }
    tr.appendChild(td4);
    var td5 = document.createElement("td");
    td5.textContent = T.Action;
    var img = document.createElement("img");
    var img1 = document.createElement("img");
    img.src = "src/Transaction_eye.png";
    img1.src = "src/download_img.png";
    td5.appendChild(img);
    td5.appendChild(img1);
    tr.appendChild(td5);
    table.appendChild(tr);
}
myTableDiv.appendChild(table);
