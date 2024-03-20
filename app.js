const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const counterEl = document.querySelector("p");

const ClearAllbtn = document.querySelector("#clear-all");

ClearAllbtn.addEventListener(`click`, () => {
  ul.innerHTML = "";

  const music = new Audio("./music5.mp3"); // Boshqa musiqa
  music.play();
});

form.addEventListener("submit", (e) => {
  let counter = 0;
  e.preventDefault();
  const inputValue = input.value;

  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newDeleteButton = document.createElement("button");
  const newdoneButton = document.createElement("button");

  newDeleteButton.textContent = "delete";
  newdoneButton.textContent = "Done";
  newSpan.textContent = inputValue;

  newLi.appendChild(newSpan);
  newLi.appendChild(newdoneButton);
  newLi.appendChild(newDeleteButton);

  ul.appendChild(newLi);

  newdoneButton.addEventListener("click", () => {
    newLi.classList.toggle("done");

    const music = new Audio("./music2.mp3"); // Boshqa musiqa
    music.play();
  });

  newDeleteButton.addEventListener("click", () => {
    newLi.remove();
    counter = ul.children.length;
    counterEl.textContent = counter;
    const music = new Audio("./music4.mp3"); // Boshqa musiqa
    music.play();
  });

  counter = ul.children.length;
  counterEl.textContent = counter;

  input.value = "";

  const music = new Audio("./music1.mp3");
  music.play();
});
