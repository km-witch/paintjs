const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const fill = document.getElementById("jsFill");
const save = document.getElementById("jsSave");

let isClicking = false;

function onMouseMove(e) {
    if (!isClicking) return;

    const x = e.offsetX;
    const y = e.offsetY;

    context.lineTo(x, y);
    context.stroke();
}

function startClicking(e) {
    isClicking = true;
    context.beginPath();
}

function endClicking(e) {
    isClicking = false;
    context.closePath();
}

function changeColor(e) {
    console.log(e.target.style.backgroundColor);
    context.strokeStyle = e.target.style.backgroundColor;
}

function changeBrushSize(e) {
    console.log(e.target.value);
    context.lineWidth = e.target.value;
}

function fillCanvas(e) {
    console.log("fill");
    context.fillStyle = context.strokeStyle;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function handleContext(e) {
    e.preventDefault();
}

function saveImage(e) {
    const imageURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "paintJS.png";
    link.click();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startClicking);
    canvas.addEventListener("mouseup", endClicking);
    canvas.addEventListener("mouseout", endClicking);
    canvas.addEventListener("contextmenu", handleContext);

    canvas.width = 700;
    canvas.height = 700;

}

if (context) {
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = "black";
    context.lineWidth = 5;
}

if (colors) {
    Array.from(colors).forEach(x => x.addEventListener("click", changeColor));
}

if (range) {
    range.addEventListener("change", changeBrushSize);
}

if (fill) {
    fill.addEventListener("click", fillCanvas);
}

if (save) {
    save.addEventListener("click", saveImage);
}