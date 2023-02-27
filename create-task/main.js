import "./style.css";
const DOMSelectors = {
  form: document.querySelector(".form"),
  input1: document.getElementById(".input1"),
  box: document.querySelector(".box"),
  btn: document.querySelector(".btn"),
};

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  let input = DOMSelectors.form.value;
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;

  async function getData(url, input) {
    try {
      const response = await fetch(url, input);
      if (response.status < 200 || response.status > 299) {
        throw new Error(response);
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
  getData(url, input);

  DOMSelectors.btn.addEventListener("click", function (e) {
    data
      .filter((data) => data.element.word.includes(input))
      .forEach((data) => {
        DOMSelectors.box.innerHTML(
          "beforeend",
          `<div class="definitions">
      <h1>${data.element.word}</h1>
      <h2>${data.element.meanings.definitions}</h2>
    </div>
      `
        );
      });
  });
});
