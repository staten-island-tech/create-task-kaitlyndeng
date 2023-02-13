import "./style.css";
const DOMSelectors = {
  form: document.querySelector(".form"),
  input: document.getElementById(".input"),
  box: document.querySelector(".box"),
};

const word = "hello";
const url = `https://api.dictionaryapi.dev/api/v2/entries/en/<word>`;
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
  const input = DOMSelectors.input.value;
});

function listAll() {
  data.forEach((data) => {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="definitions">
    <h4>Result here</h4>
    <p>${data.word}, ${data.meanings}</p>
  </div>
  `
    );
  });
}
listAll();
