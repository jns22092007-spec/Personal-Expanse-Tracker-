let totalIncome = 0;
let totalExpense = 0;

function addIncome(){

    let income =
    Number(document.getElementById("incomeAmount").value);

    totalIncome += income;

    document.getElementById("totalIncome").innerText =
    totalIncome;

    updateBalance();

    document.getElementById("incomeAmount").value = "";
}

function addExpense(){

    let amount =
    Number(document.getElementById("expenseAmount").value);

    let category =
    document.getElementById("category").value;

    totalExpense += amount;

    document.getElementById("totalExpense").innerText =
    totalExpense;

    let li = document.createElement("li");

    li.innerText =
    category + " - ₹" + amount;

    document.getElementById("transactionList")
    .appendChild(li);

    updateBalance();

    document.getElementById("expenseAmount").value = "";
}

function updateBalance(){

    let balance =
    totalIncome - totalExpense;

    document.getElementById("balance").innerText =
    balance;
}
function showLogin() {
    document.getElementById("registerBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
}


function register() {
    let username = document.getElementById("regUser").value;
    let password = document.getElementById("regPass").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration Successful!");

    showLogin();
}


function login() {

    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if (username === savedUser && password === savedPass) {

        // Show welcome page
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("welcomeBox").style.display = "block";

        // Display username
        document.getElementById("welcomeUser").innerHTML =
            "Welcome, " + username + "!";

        // Open expense page after 3 seconds
        setTimeout(function () {
            window.location.href = "expense.html";
        }, 3000);

    } else {

        alert("Invalid Username or Password");

    }
}
