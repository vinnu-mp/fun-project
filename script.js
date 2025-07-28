let url1 = "https://v2.jokeapi.dev/joke/Programming?type=single";
let url2 = "https://v2.jokeapi.dev/joke/Misc?type=single";
let url3 = "https://v2.jokeapi.dev/joke/Dark?type=single";
let jokeOutput = document.querySelector("#joke");
const clk = document.querySelector("#clk");

let dlt = document.querySelector(".dlt");

function display(url) {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      jokeOutput.textContent = data.joke;
    })
    .catch(function (err) {
      jokeOutput.textContent = "Error occured / joke API limit reached" + err;
    });
}

function showJoke() {
  const selected = document.querySelector('input[name="category"]:checked');
  if (selected) {
    const type = selected.value;
    jokeOutput.style.color = "black";

    if (type === "misk") {
      display(url2);
    } else if (type === "dark") {
      display(url3);
    } else if (type === "programming") {
      display(url1);
    } else {
      jokeOutput.textContent = "Unknown joke type selected!";
    }
  } else {
    jokeOutput.textContent = "Please select a joke type!";
    jokeOutput.style.color = "rgb(255, 0, 0)";
  }
}

clk.addEventListener("click", function () {
  clk.setAttribute("id", "duringclk");
  setTimeout(function () {
    clk.setAttribute("id", "clk");
  }, 300);
  showJoke();
});

// --------------------------------------------------------------------------------------------

let facturl = "https://uselessfacts.jsph.pl/random.json?language=en";
let fact = document.querySelector("#fact");
let light = document.querySelector(".light");

light.addEventListener("click", async function () {
  await change();
  await fetch(facturl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      fact.textContent = data.text;
    })
    .catch(function (err) {
      fact.textContent = "Error occured / joke API limit reached" + err;
    });
});

function changecolor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      light.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

async function change() {
  light.setAttribute("class", "lightclick");
  fact.textContent = "Loading....";
  await changecolor("rgb(255, 242, 0)", 150);
  await changecolor("rgb(255, 166, 0)", 150);
  await changecolor("rgb(255, 0, 0)", 150);
  await changecolor("rgb(255, 166, 0)", 150);
  await changecolor("rgb(255, 242, 0)", 150);
  await changecolor("rgba(255, 255, 255, 1)", 150);
  light.removeAttribute("class", "lightclick");
  light.setAttribute("class", "light");
}

// --------------------------------------------------------------------------------
// Preject by Vinod M.P

// Toggle modal----Vinod M.P
document.getElementById("infoBtn").onclick = function () {
  document.getElementById("infoModal").style.display = "block";
};

// Close modal----Vinod M.P
document.getElementById("closeModal").onclick = function () {
  document.getElementById("infoModal").style.display = "none";
};

// Close when clicked outside the modal----Vinod M.P
window.onclick = function (event) {
  const modal = document.getElementById("infoModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
