const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");

let isClicking = false;

function onMouseMove(e){
    const x = e.offsetX;
    const y = e.offsetY;

    if(!isClicking){
        //context.beginPath();
        //context.moveTo(x, y);
    } else{
        context.lineTo(x, y);
        context.stroke();
    }
}

function startClicking(e) {
    isClicking = true;
    context.beginPath();
}

function endClicking(e) {
    isClicking = false;
    context.closePath();
}

function changeColor(e){
    console.log(e.target.style.backgroundColor);
    context.strokeStyle = e.target.style.backgroundColor;
}

function changeBrushSize(e){
    console.log(e.target.value);
    context.lineWidth = e.target.value;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startClicking);
    canvas.addEventListener("mouseup", endClicking);
    canvas.addEventListener("mouseout", endClicking);

    canvas.width = 700;
    canvas.height = 700;
}

if(context){
    context.strokeStyle = "black";
    context.lineWidth = 5;
}

if(colors){
    Array.from(colors).forEach(x => x.addEventListener("click", changeColor));
}

if(range){
    range.addEventListener("change", changeBrushSize);
}