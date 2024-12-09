function submit() {
  const user = document.querySelector("#input").value;
  const parentElement = document.querySelector("#result");
  parentElement.innerHTML = "";
  for (let i = 1; i < 10; i++) {
    const newElement = document.createElement("p");
    newElement.textContent = `${user}X${i}=${user * i}`;
    parentElement.appendChild(newElement);
  }
}
