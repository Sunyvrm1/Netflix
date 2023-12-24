//-------------------------- Sign in Username & Password --------------------------

const loginBtn = document.querySelector(".loginBtn");

const users = {
  Suny: "Suny123",
  Sushil: "Sushil456",
  sv: "Sv789",
};

loginBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  
  if (users.hasOwnProperty(email) && users[email] === pass) {
    window.location.href = "home.html";
  } else {
    console.log("fail");
  }
})