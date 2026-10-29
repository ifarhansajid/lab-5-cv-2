/* ====================
   BOOT SCREEN
==================== */

const bootText = [

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

    }else{

        document.getElementById("bootScreen")
        .style.display = "none";
    }
}

showBoot();

/* ====================
   WINDOWS
==================== */

function openWindow(id){

    const win =
    document.getElementById(id);

    win.style.display = "block";

    if(window.innerWidth > 768){

        win.style.left =
        ((window.innerWidth - win.offsetWidth)/2)
        + "px";

        win.style.top = "90px";
    }
}

function closeWindow(id){

    document.getElementById(id)
    .style.display = "none";
}

/* ====================
   CLOCK
==================== */

setInterval(()=>{

    document.getElementById("clock")
    .innerHTML =
    new Date().toLocaleTimeString();

},1000);

/* ====================
   MATRIX EFFECT
==================== */

const canvas =
document.getElementById("matrix");

const ctx =
canvas.getContext("2d");

function resizeCanvas(){

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;
}

resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);

const chars =
"01{}<>[]HTMLCSSJAVAGITHUB";

const drops = [];

for(
let x = 0;
x < canvas.width / 20;
x++
){
    drops[x] = 1;
}

function draw(){

    ctx.fillStyle =
    "rgba(10,25,47,.08)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle =
    "#64FFDA";

    ctx.font =
    "15px monospace";

    for(
        let i = 0;
        i < drops.length;
        i++
    ){

        let text =
        chars[
            Math.floor(
                Math.random()
                * chars.length
            )
        ];

        ctx.fillText(
            text,
            i * 20,
            drops[i] * 20
        );

        if(
            drops[i] * 20
            > canvas.height
            &&
            Math.random() > 0.97
        ){
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw, 50);