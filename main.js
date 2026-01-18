const jokes = document.getElementById("jokes");
let lock = false;
function get() {
  if (lock == true) {
    return;
  }
  lock = true;
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      jokes.textContent = data.joke;
    })
    .catch(() => {
      jokes.textContent = "Failed";
    })
    .finally(() => {
      lock = false;
    });
}
