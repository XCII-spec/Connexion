function login() {

  fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  })
  .then(res => res.json())
  .then(data => {

    if (data.admin) {
      document.querySelector(".box").style.display = "none";
      document.getElementById("menu").style.display = "flex";
    } else {
      result.innerText = data.error || "OK";
    }
  });
}

function loadData() {

  fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "HACKER21",
      password: "89304"
    })
  })
  .then(res => res.json())
  .then(data => {

    document.getElementById("adminData").textContent =
      JSON.stringify(data.data, null, 2);
  });
}