const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score =JSON.parse(localStorage.getItem("score"));
// we now use the JSON.parse to change a string back to a numner

if (!score){
    score = 0;
}

scoreEl.innerText = "Score: " + score;

questionEl.innerText = "What is " + num1 + " multiply by " + num2 + "?";

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    // the + is to show that the input value is a number not a string
    const userAns = +inputEl.value
    if (userAns === correctAns) {
        score++
        updateLocalStorage()

    } else {
        score--
        updateLocalStorage()
    }

})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
    // we use the json.stringify to convert number to a string
    // the setimet is use to save our value inside a local Storage
}