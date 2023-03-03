import "./style.css";
const DOMSelectors = {
  input: document.getElementById("input"),
  btn: document.getElementById("btn"),
  definition1: document.querySelector(".definition1"),
  button: document.getElementById("button"),
  word: document.getElementById("word"),
  definition2: document.querySelector(".definition2"),
  result: document.querySelector(".result"),
  combinebtn: document.querySelector(".combinebtn")
};

// const history = []
// DOMSelectors.history.insertAdjacentHTML=
// history.forEach(element => console.log(element));
// history.push(input);
// history.push(word)

DOMSelectors.btn.addEventListener("click", function () {

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`;

  async function getData(url, input) {
    try {
      const response = await fetch(url, input);
      if (response.status < 200 || response.status > 299) {
        throw new Error(response);
      } else {
        const data = await response.json();
        console.log(data);
        console.log("good");

        DOMSelectors.definition1.innerHTML=`
        <div class="definition1">
        <h1>${data[0].word}</h1>
        <p>${data[0].meanings[0].definitions[0].definition}</p>
        </div>`;
      }
    } catch (error) {
      console.log(error);
      console.log("bad");
    }
  }

  getData(url, input);
})

DOMSelectors.button.addEventListener("click", function () {
  
  const url = "https://random-word-api.herokuapp.com/word";

  const generated = [];
  for ( let i=0;i<5; i++){
  async function getData(url) {
    try {
      const response = await fetch(url);
      if (response.status < 200 || response.status > 299) {
        throw new Error(response);
      } else {
        const data = await response.json();
        console.log(data);
        console.log("good");

        DOMSelectors.definition2.innerHTML=`
        <div class="definition2">
        <h1>${data}</h1>
        </div>`

      }
    } catch (error) {
      console.log(error);
      console.log("bad");
    }
    
  }
  getData(url);
}
})

// DOMSelectors.combinebtn.addEventListener("click", function (){
//   DOMSelectors.result.innerHTML = input ;
// })

  


