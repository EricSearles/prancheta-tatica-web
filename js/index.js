$( function() {
    $("#draggable1").draggable();
    $( "#draggable2" ).draggable();
    $( "#draggable3" ).draggable();
    $( "#draggable4" ).draggable();
    $( "#draggable5" ).draggable();
    $( "#draggable6" ).draggable();
    $( "#draggable7" ).draggable();

    $( "#draggable8" ).draggable();
    $( "#draggable9" ).draggable();
    $( "#draggable10" ).draggable();
    $( "#draggable11" ).draggable();
    $( "#draggable12" ).draggable();
    $( "#draggable13" ).draggable();
    $( "#draggable14" ).draggable();
    $( "#draggable15" ).draggable();
    $( "#draggable16" ).draggable();
    $( "#draggable17" ).draggable();
    $( "#draggable18" ).draggable();
    $( "#draggable19" ).draggable();
    $( "#draggable20" ).draggable();
    $( "#draggable21" ).draggable();
    $( "#draggable22" ).draggable();

    $( "#bola-a" ).draggable();
    $( "#bola-b" ).draggable();
})

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

});


const sColor = document.querySelector('input')
let currentColor = 'white'
let canDraw = false
let mouseX = 0
let mouseY = 0

let screen = document.querySelector('canvas')
let ctx = screen.getContext('2d')

let select = document.getElementById('fundo')
let tituloModalidade = document.getElementById('modalidade')

let bolaA = document.getElementById('bola-a')
let bolaB = document.getElementById('bola-b')

let imgBolaA = document.querySelector("#bolaA");
let imgBolaB = document.querySelector("#bolaB");

select.addEventListener('change', function(){
    changeBackground(select.value)
})

window.addEventListener('resize', () => updateWidth())

sColor.onchange = () => currentColor = sColor.value
screen.addEventListener('mousedown', mouseDownEvent)
screen.addEventListener('mousemove', mouseMoveEvent)
screen.addEventListener('mouseup', mouseUpEvent)

//Deixa o canvas responsivo
function updateWidth() {
    screen.width = window.innerWidth * 0.80
    screen.height = window.innerHeight * 0.82
}

function mouseDownEvent(e) {
    canDraw = true
    mouseX = e.pageX - screen.offsetLeft
    mouseY = e.pageY - screen.offsetTop
}

function mouseMoveEvent(e) {
    if(canDraw) {
        draw(e.pageX, e.pageY)
    }
}

function mouseUpEvent() {
    canDraw = false
}

function draw(x, y) {
    let pointX = x - screen.offsetLeft
    let pointY = y - screen.offsetTop

    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.lineJoin = "round"
    ctx.moveTo(mouseX, mouseY)
    ctx.lineTo(pointX, pointY)
    ctx.closePath()
    ctx.strokeStyle = currentColor
    ctx.stroke()

    mouseX = pointX
    mouseY = pointY

}

function clearScreen() {
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

function changeBackground(image) {
    let imgBall = 'bolahand'
    titulo = image.split("-")
    tituloModalidade.innerHTML = titulo[1]
    screen.style.backgroundImage = "url(images/"+ image + ".png)"

    if(titulo[1] == 'Handball'){
        imgBall = 'bolahand'
    }else if(titulo[1] == 'Voleyball'){
        imgBall = 'bolavoley'
    }else if(titulo[1] === 'Basketball'){
        imgBall = 'bolabasket'
    }else if(titulo[1] === 'Futebol'){
        imgBall = 'bolafutebol'
    }else if (titulo[1] === 'Futsal'){
        imgBall = 'bolafutsal'
    }
    imgBolaA.setAttribute("src", "images/"+ imgBall + ".png");
    imgBolaB.setAttribute("src", "images/"+ imgBall + ".png");

    console.log(titulo[1], image, imgBall)
}

function changeBallImage(image){
   console.log(image)
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}



updateWidth()






