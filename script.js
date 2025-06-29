const games = ["math", "guess", "memory", "color", "typing"];

function login() {
  const name = document.getElementById("nameInput").value;
  const pass = document.getElementById("passwordInput").value;
  if (name && pass === "12345678") {
    localStorage.setItem("playerName", name);
    document.getElementById("playerName").innerText = name;
    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("spinnerScreen").classList.remove("hidden");
  } else {
    alert("Invalid credentials");
  }
}

function spinWheel() {
  const result = games[Math.floor(Math.random() * games.length)];
  document.getElementById("result").innerText = "Spinning...";
  setTimeout(() => {
    document.getElementById("result").innerText = "Game Selected: " + result.toUpperCase();
    setTimeout(() => window.location.href = result + ".html", 1500);
  }, 3000);
}