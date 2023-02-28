import "./style.css";
const DOMSelectors = {
  form: document.querySelector(".form"),
  input: document.getElementById("input"),
  box: document.querySelector(".box"),
  btn: document.getElementById("btn"),
  label: document.getElementById("label"),
};

DOMSelectors.form.addEventListener("submit", function () {
  let input = DOMSelectors.label.value;
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
  console.log(input);

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

  DOMSelectors.box.innerHTML(
    "beforeend",
    `<div class="definitions">
  <h1>${data.element.word}</h1>
  <h2>${data.element.meanings.definitions}</h2>
  </div>
   `
  );
});
//
//
//         );
//       });
//   });
// });
