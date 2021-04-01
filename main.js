canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mousevent;
var x2,y2;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown (e){
mousevent="mousedown";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup (e){
mousevent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave (e){
mousevent="mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove (e){
x=e.clientX-canvas.offsetLeft;
y=e.clientY-canvas.offsetTop;
if(mousevent=="mousedown"){
ctx.beginPath;
ctx.strokeStyle="blue";
ctx.lineWidth="3";
ctx.moveTo(x2,y2);
ctx.lineTo(x,y);
ctx.stroke();
}
x2=x;
y2=y;
}
