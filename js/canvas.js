const imgs = ["https://i.imgur.com/7mxGgGa.png",
			  "https://i.imgur.com/3niItVn.png",
			  "https://i.imgur.com/XwPSDLl.png",
			  "https://i.imgur.com/Uh9RWk1.png"]

function setup() {
  brcs = imgs.map(b => createImg(b, ''));
  brcs.forEach(function (b) { b.hide(); });
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  if (keyIsDown(66)) {
  	push();
  	var x = random(width);
  	var y = random(height);
  	translate(x, y);
	rotate(random(2 * PI));
	scale(random(0.25, 0.50));
	image(random(brcs), x, y);
	pop();
  }
}

function changeColour() {
	if (event.keyCode == 66) {
		document.getElementsByTagName("html")[0].style.background = "#F2FFE8";
		document.getElementsByTagName("h1")[0].style.color = "#5DAB20";
		document.getElementById("github").style.color = "#76AC4C"; 
		document.getElementById("telegram").style.color = "#76AC4C"; 
		document.getElementById("twitter").style.color = "#76AC4C"; 
		document.getElementById("linkedin").style.color = "#76AC4C"; 
		document.getElementById("resume").style.color = "#76AC4C";  
		document.getElementById("ctf").style.color = "#76AC4C";  
		document.getElementById("ctf").style.visibility = "visible";
		document.getElementById("ctf").style.display = null;
	}
}