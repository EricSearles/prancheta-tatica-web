$(document).ready(function() {

    /*******************************Quadra************************************/
    var canvas = $("#myCanvas")[0];


    /****************************Pincel**************************************/

    // Obtém o contexto de desenho 2D
    var ctx = canvas.getContext("2d");

    //imagem de fundo do canvas
    const image = new Image()
    image.src = 'images/quadra-azul-de-handebol-vista-aerea-vetor.png'
    image.onload = () => {
        ctx.drawImage(image, 0, 0)
    }

    // Define a cor e a largura da linha
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 5;


    /***************************Desenha Linha*********************************/
    // Variáveis para armazenar as coordenadas do mouse
    var mouseX, mouseY;

    // Adiciona um evento de clique do mouse no canvas
    $(canvas).mousedown(function(e) {
        // Obtém as coordenadas do clique
        mouseX = e.pageX - this.offsetLeft;
        mouseY = e.pageY - this.offsetTop;


        // Inicia o caminho de desenho
        ctx.beginPath();
        // Move o cursor para as coordenadas do clique
        ctx.moveTo(mouseX, mouseY);
        // Adiciona um evento de movimento do mouse no canvas
        $(canvas).mousemove(onMouseMove);
    });

    // Adiciona um evento de liberação do botão do mouse no canvas
    $(canvas).mouseup(function() {
        // Remove o evento de movimento do mouse
        $(canvas).off("mousemove", onMouseMove);
    });

    // Função chamada quando o mouse é movido no canvas
    function onMouseMove(e) {
        // Obtém as coordenadas do movimento do mouse
        var currentX = e.pageX - canvas.offsetLeft;
        var currentY = e.pageY - canvas.offsetTop;
        // Desenha uma curva de Bezier cúbica do ponto anterior para o ponto atual
        ctx.bezierCurveTo(
            mouseX + (currentX - mouseX) / 2, mouseY,
            currentX - (currentX - mouseX) / 2, currentY,
            currentX, currentY
        );
        // Traça a linha da curva
        ctx.stroke();
        // Atualiza as coordenadas do mouse
        mouseX = currentX;
        mouseY = currentY;


    }
});

$( function() {
    $( "#draggable1" ).draggable();
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
} );



//Pega coordenadas X e Y da div id
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X coords: " + x + ", Y coords: " + y;
    // document.getElementById("bola").innerHTML = coor;
}

function getCoor(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo2").innerHTML = coor;
}



