import "./style.css";
const DOMSelectors = {
  form: document.querySelector(".form"),
  input: document.getElementById(".input"),
  box: document.querySelector(".box"),
};
// let input = DOMSelectors.input.value;
const url = "https://api.quotable.io";

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

// DOMSelectors.form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(e);
//   let input = DOMSelectors.input.value;
//   console.log(input);
// });

// async function word(url, input) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     data.data
//       .filter((element) => element.word.includes(input))
//       .map((element) => {
//         DOMSelectors.box.insertAdjacentHTML(
//           "beforeend",
//           `<div class="card">
//           <h1>${element.definition}</h1>
//         </div>
//           `
//         );
//       });
//   } catch (error) {
//     console.log(error);
//     console.log("bad");
//   }
// }
// word();
