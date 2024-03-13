const buttonA = document.querySelector("#button-a");
const buttonB = document.querySelector("#button-b");
const result = document.querySelector("#result");

function print(message) {
  const ts = Date.now();
  const line = document.createElement("div");
  line.innerText = ts + ": " + message;
  result.append(line);
}

function handleButtonAClickEvent() {
  print("Btton A Clicked");
}

function handleButtonBClickEvent() {
  print("Button B Clicked");
}

buttonA.addEventListener("click", handleButtonAClickEvent);
buttonB.addEventListener("click", handleButtonBClickEvent);

window.addEventListener("load", () => {
  print("Window loaded");
});
