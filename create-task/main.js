import "./style.css";
import { DOMSelectors } from "./dom.js";

const word = "hello";
const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.status < 200 || response.status > 299) {
      throw new error(response);
    } else {
      const data = await response.json();
      console.log(data);
      console.log("good");
    }
  } catch (error) {
    console.log(error);
    console.log("bad");
  }
}
getData(url);

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  let input = DOMSelectors.input.value;
});
