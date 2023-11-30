const number = document.querySelector(".js");
const advice = document.querySelector(".advice");
const button = document.querySelector(".button");
async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    number.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice;
}
button.addEventListener("click", () => {getAdvice();button.classList.toggle("triali");});