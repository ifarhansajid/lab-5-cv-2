const bootText =
[
"Initializing Farhan OS...",
"Loading Portfolio...",
"Loading Skills...",
"Loading Projects...",
"Welcome Farhan Sajid"
];

let i = 0;

function showBoot(){

if(i < bootText.length){

document.getElementById("bootText").innerHTML =
bootText[i];

i++;

setTimeout(showBoot,700);

}
else{

document.getElementById("bootScreen")
.style.display = "none";

}
}

showBoot();

function openWindow(id){

document.getElementById(id)
.style.display = "block";

}

function closeWindow(id){

document.getElementById(id)
.style.display = "none";

}

setInterval(()=>{

document.getElementById("clock")
.innerHTML =
new Date().toLocaleTimeString();

},1000);

const canvas =
document.getElementById("matrix");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const chars =
"01{}<>[]HTMLCSSJAVAGITHUB";

const drops = [];

for(
let x=0;
x<canvas.width/20;
x++
){

drops[x]=1;

}

function draw(){

ctx.fillStyle=
"rgba(10,25,47,.08)";

ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);

ctx.fillStyle="#64FFDA";

ctx.font="15px monospace";

for(let i=0;i<drops.length;i++){

let text =
chars[
Math.floor(
Math.random()*
chars.length
)
];

ctx.fillText(
text,
i*20,
drops[i]*20
);

if(
drops[i]*20 >
canvas.height
&&
Math.random() > .97
){
drops[i]=0;
}

drops[i]++;

}

}

setInterval(draw,50);