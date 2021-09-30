const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputDiv = document.querySelector("#output-div");


function calculateProductOfSides(a, b) {
    const prod = a * b;
    return prod;
}

function calculateArea() {
    const productOfSides = calculateProductOfSides(Number(sides[0].value), Number(sides[1].value));
    const Area = 1 / 2 * productOfSides;
    outputDiv.innerText = "The Area of Triangle is " + Area;

}



areaBtn.addEventListener("click", calculateArea);