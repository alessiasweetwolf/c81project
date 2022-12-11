canvas = document.getElementById("myCanvas");
color = "red";
ctx= canvas.getContext("2d")
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 45,0 , 2 * Math.PI);
ctx.stroke();

ctx= canvas.getContext("2d")
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(300, 260, 45,0 , 2 * Math.PI);
ctx.stroke();

ctx= canvas.getContext("2d")
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(350, 210, 45,0 , 2 * Math.PI);
ctx.stroke();

ctx= canvas.getContext("2d")
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(400, 260, 45,0 , 2 * Math.PI);
ctx.stroke();

ctx= canvas.getContext("2d")
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(450, 210, 45,0 , 2 * Math.PI);
ctx.stroke();


function clearArea()
{
ctx.clearRect(0,0,canvas.width,canvas.height);
}
