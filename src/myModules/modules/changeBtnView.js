//module to edit and change background color and innerText of a button

function disableBtn(btn, text = "wait...") {
  btn.innerText = text;
  btn.style.backgroundColor = "#777";
  btn.style.cursor = "default";
}

function enableBtn(btn, text, backgroundColor) {
  btn.innerText = text;
  btn.style.backgroundColor = backgroundColor;
  btn.style.cursor = "pointer";
}

export { disableBtn, enableBtn };
