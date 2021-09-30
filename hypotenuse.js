const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputDiv = document.querySelector("#output-div");


function calculateSumOfSquares(a, b) {
    const sum = a * a + b * b;
    return sum;
}

function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputDiv.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse;

}



hypotenuseBtn.addEventListener("click", calculateHypotenuse);