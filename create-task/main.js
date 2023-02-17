import "./style.css";
const DOMSelectors = {
  form: document.querySelector(".form"),
  input: document.getElementById(".input"),
  box: document.querySelector(".box"),
};

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  let input = DOMSelectors.input;
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;

  async function getData(url) {
    try {
      const response = await fetch(url);
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
  getData(url);

  async function word(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      data
        .filter((data) => data.element.word.includes(input))
        .forEach((data) => {
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `<div class="definitions">
            <h1>${data.element.word}</h1>
            <h2>${data.element.meanings.definitions}</h2>
          </div>
            `
          );
        });
    } catch (error) {
      console.log(error);
      console.log("bad");
    }
  }
  word();
});

// function listAll() {
//   data.forEach((data) => {
//     DOMSelectors.box.insertAdjacentHTML(
//       "beforeend",
//       `<div class="definitions">
//        <h1>${data.element.meanings}</h1>
//       </div>
//       `
//     );
//   });
// }
// listAll();
