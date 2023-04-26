//module to edit and change background color and innerText of a button

import { colors } from "../../config";

function disableBtn(btn, text = "wait...") {
  btn.innerText = text;
  btn.style.backgroundColor = colors.grey.medium;
  btn.style.cursor = "default";
}

function enableBtn(btn, text, backgroundColor) {
  btn.innerText = text;
  btn.style.backgroundColor = backgroundColor;
  btn.style.cursor = "pointer";
}

export { disableBtn, enableBtn };
