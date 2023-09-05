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

    $( "#bola" ).draggable();
})


const sColor = document.querySelector('input')
let currentColor = 'white'
let canDraw = false
let mouseX = 0
let mouseY = 0

let screen = document.querySelector('canvas')
let ctx = screen.getContext('2d')

let select = document.getElementById('fundo')
let tituloModalidade = document.getElementById('modalidade')

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
    screen.width = window.innerWidth * 0.82
    screen.height = window.innerHeight * 0.79
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

    titulo = image.split("-")
    console.log(titulo[1])
    tituloModalidade.innerHTML = titulo[1]
    screen.style.backgroundImage = "url(images/"+ image + ".png)"
}



updateWidth()

