window.onload = function(){
	cpelota = document.getElementById("canvasPelota").getContext("2d"); //cotexto en 2d
	cpelota.fillStyle= "rgba(10,150,150,0.5)";
	cpelota.beginPath();  //lo que va aqui en medio se dibuja
	cpelota.arc(75,75,50,0,Math.PI*2); //dibuixem una pilota (ARC(posiciox, posicioy, radi, angleinicial, anglefinal))
	cpelota.closePath();
	cpelota.fill(); //pilota pintada de color
	cpelota.fillStyle= "rgba(253, 254, 254,0.5)";
	cpelota.font = "20px verdana ";
	cpelota.fillText("C++/C",40,80);

	cpelota2 = document.getElementById("canvasPelota2").getContext("2d"); //cotexto en 2d
	cpelota2.fillStyle= "rgba(10,150,150,0.5)";
	cpelota2.beginPath();  //lo que va aqui en medio se dibuja
	cpelota2.arc(75,75,50,0,Math.PI*2); //dibuixem una pilota (ARC(posiciox, posicioy, radi, angleinicial, anglefinal))
	cpelota2.closePath();
	cpelota2.fill(); //pilota pintada de color
	cpelota2.fillStyle= "rgba(253, 254, 254,0.5)";
	cpelota2.font = "20px verdana ";
	cpelota2.fillText("Java",50,80);

	cpelota3 = document.getElementById("canvasPelota3").getContext("2d"); //cotexto en 2d
	cpelota3.fillStyle= "rgba(10,150,150,0.5)";
	cpelota3.beginPath();  //lo que va aqui en medio se dibuja
	cpelota3.arc(75,75,50,0,Math.PI*2); //dibuixem una pilota (ARC(posiciox, posicioy, radi, angleinicial, anglefinal))
	cpelota3.closePath();
	cpelota3.fill(); //pilota pintada de color
	cpelota3.fillStyle= "rgba(253, 254, 254,0.5)";
	cpelota3.font = "20px verdana ";
	cpelota3.fillText("HTML",50,80);

	cpelota4 = document.getElementById("canvasPelota4").getContext("2d"); //cotexto en 2d
	cpelota4.fillStyle= "rgba(10,150,150,0.5)";
	cpelota4.beginPath();  //lo que va aqui en medio se dibuja
	cpelota4.arc(75,75,50,0,Math.PI*2); //dibuixem una pilota (ARC(posiciox, posicioy, radi, angleinicial, anglefinal))
	cpelota4.closePath();
	cpelota4.fill(); //pilota pintada de color
	cpelota4.fillStyle= "rgba(253, 254, 254,0.5)";
	cpelota4.font = "20px verdana ";
	cpelota4.fillText("CSS",50,80);

	cpelota5 = document.getElementById("canvasPelota5").getContext("2d"); //cotexto en 2d
	cpelota5.fillStyle= "rgba(10,150,150,0.5)";
	cpelota5.beginPath();  //lo que va aqui en medio se dibuja
	cpelota5.arc(75,75,50,0,Math.PI*2); //dibuixem una pilota (ARC(posiciox, posicioy, radi, angleinicial, anglefinal))
	cpelota5.closePath();
	cpelota5.fill(); //pilota pintada de color
	cpelota5.fillStyle= "rgba(253, 254, 254,0.5)";
	cpelota5.font = "15px verdana ";
	cpelota5.fillText("JavaScript",35,80);
}

function botoenviar() {
    //$("#mail").placeholder="caca ";
    //$("#textmail").placeholder="caca ";
    $("#mail").val("");
    $("#textmail").val("");
    alert("BEN FET");
}