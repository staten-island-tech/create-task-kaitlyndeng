import "./style.css";
const DOMSelectors = {
  input: document.getElementById("input"),
  btn: document.getElementById("btn"),
  definition1: document.querySelector(".definition1"),
  button: document.getElementById("button"),
  word: document.getElementById("word"),
  definition2: document.querySelector(".definition2"),
  result: document.querySelector(".result"),
  combine: document.querySelector(".combine")
};


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
      DOMSelectors.definition1.insertAdjacentHTML("afterbegin", 
      `<h2 class="err">Word not found. Please check your spelling.</h2>`
      )
    }
  }

  getData(url, input);
})

DOMSelectors.button.addEventListener("click", function () {
  
  const url = "https://random-word-api.herokuapp.com/word";

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
      
        DOMSelectors.definition2.innerHTML +=
        `<div class="definition2">
        <h1>${data}</h1>
        </div>`
        

      }
    } catch (error) {
      console.log(error);
    }
    
  }
getData(url);

}
// const result = getData(url);
DOMSelectors.combine.addEventListener("click", function () {
  if (input.value.length >= 1>=1){
    const str1 = input.value;
    const firstThree = str1.substring(0,3);
   DOMSelectors.result.insertAdjacentHTML("beforeend",`<div class="results">${firstThree}</div>`)
    const str2 = valueOf`${data}`;

   

  
  }
})

})



// DOMSelectors.combinebtn.addEventListener("click", function (){
//   DOMSelectors.result.innerHTML = input ;
// })

  


