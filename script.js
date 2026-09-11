//your JS code here. If required.
const sizeInfo = document.querySelector("#sizeInfo h1");

function updateSize() {
  sizeInfo.innerText =
    `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}

updateSize();

window.addEventListener("resize", updateSize);