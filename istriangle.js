const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputDiv = document.querySelector("#output-div");


function calculatesumOfAngles(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3;
    return sum;
}

function isTriangle() {
    const sumOfAngles = calculatesumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if (sumOfAngles === 180)
        outputDiv.innerText = "The angles form a triangle ";
    else
        outputDiv.innerText = "The angles dont form a triangle";
}

isTriangleBtn.addEventListener("click", isTriangle);