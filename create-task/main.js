import "./style.css";
const DOMSelectors = {
  btn: document.getElementById("btn"),
  definition1: document.querySelector(".definition1"),
  button: document.getElementById("button"),
  definition2: document.querySelector(".definition2"),
  result: document.querySelector(".result"),
  combine: document.querySelector(".combine"),
  history: document.querySelector(".history"),
  reset: document.querySelector(".reset")
};

const generated = [];


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

          generated.push(input.value);  

          function preventRepeat(generated) {
            let clean = [];
            generated.forEach(element => {
            if (!clean.includes(element)) {
               clean.push(element);
            }
          });
          return clean;
          }
          
          console.log(preventRepeat(generated));
          
        function history(){
          DOMSelectors.history.innerHTML = `<div class="history"><h2> Words Used</h2>${preventRepeat(generated)}</div>`
        }
      history()
        
      }
    } catch (error) {
      console.log(error);
      console.log("bad");
      DOMSelectors.definition1.insertAdjacentHTML("afterbegin", 
      `<h2 class="err">Word not found. Please check your spelling.</h2>`
      )}
    }
  getData(url, input);
})

DOMSelectors.button.addEventListener("click", function () {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input2.value}`;
  async function getData(url, input2) {
    try {
      const response = await fetch(url, input2);
      if (response.status < 200 || response.status > 299) {
        throw new Error(response);
      } else {
        const data = await response.json();
        console.log(data);
        console.log("good");

        DOMSelectors.definition2.innerHTML=`
        <div class="definition2">
        <h1>${data[0].word}</h1>
        <p>${data[0].meanings[0].definitions[0].definition}</p>
        </div>`;

          generated.push(input2.value);  
          console.log(generated)
         
          function preventRepeat(generated) {
            let clean = [];
            generated.forEach(element => {
            if (!clean.includes(element)) {
              clean.push(element);
            }
          });
          return clean;
          }
          
          console.log(preventRepeat(generated));
        
        function history(){
            DOMSelectors.history.innerHTML = `<div class="history"><h2> Words Used</h2>${preventRepeat(generated)}</div>`
          }
        history()

      }
    } catch (error) {
      console.log(error);
      console.log("bad");
      DOMSelectors.definition2.insertAdjacentHTML("afterbegin", 
      `<h2 class="err">Word not found. Please check your spelling.</h2>`
      )}
    }
  getData(url, input2);
})

DOMSelectors.combine.addEventListener("click", function () {
  if (input.value.length < 4 && input2.value.length < 4){
    const str1 = input.value;
    const firstTwo = str1.substring(0,2);
    const str2 = input2.value;
    const lastTwo = str2.substring(str2.length - 2);
   DOMSelectors.result.innerHTML = `<div class="results"><h2>Your Word Baby</h2>${firstTwo}${lastTwo}</div>`
  }else if (input.value.length > 3 && input2.value.length > 3){
    const str1 = input.value;
    const firstThree = str1.substring(0,3);
    const str2 = input2.value;
    const lastThree = str2.substring(str2.length - 3);
    DOMSelectors.result.innerHTML=`<div class="results"><h2>Your Word Baby</h2>${firstThree}${lastThree}</div>`
  }else if (input.value.length < 4 && input2.value.length > 3){
    const str1 = input.value;
    const firstTwo = str1.substring(0,2);
    const str2 = input2.value;
    const lastThree = str2.substring(str2.length - 3);
    DOMSelectors.result.innerHTML=`<div class="results"><h2>Your Word Baby</h2>${firstTwo}${lastThree}</div>`
  }else if (input.value.length > 3 && input2.value.length < 4){
    const str1 = input.value;
    const firstThree = str1.substring(0,3);
    const str2 = input2.value;
    const lastTwo = str2.substring(str2.length - 2);
    DOMSelectors.result.insertAdjacentHTML=`<div class="results"><h2>Your Word Baby</h2>${firstThree}${lastTwo}</div>`
  }})

DOMSelectors.reset.addEventListener("click", function(){
  input.value="";
  input2.value="";
  DOMSelectors.definition1.innerHTML="";
  DOMSelectors.definition2.innerHTML="";
  DOMSelectors.result.innerHTML=""
})