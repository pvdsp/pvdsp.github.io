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
		document.getElementsByTagName("h1")[0].style.color = "#57a11d"; // "#5DAB20";
		
		var list = document.getElementsByTagName("h2");
		for (let item of list) {
			item.style.color = "#5ba81e";
		}
		var list = document.getElementsByTagName("a");
		for (let item of list) {
			item.style.color = "#017d01";
		}
		// var list = document.getElementsByTagName("tr");
		// for (let item of list) {
		// 	item.style.color = "#006400";
		// }
		// var list = document.getElementsByTagName("a");
		// for (let item of list) {
		// 	item.style.color = "#006400";
		// }

		// document.getElementById("github").style.color = "#76AC4C";
		// document.getElementById("ctf").style.color = "#76AC4C";  
		// document.getElementById("ctf").style.visibility = "visible";
		// document.getElementById("ctf").style.display = null;
	}
}

function toggleScreen() {
	var n = document.getElementById("name");
	var r = document.getElementById("resume");
	var i = document.getElementById("info");
	var w = window.innerWidth

	if (n.style.display === "none") {
	  n.style.display = "grid";
	  r.style.display = "none";
	} else {
	  n.style.display = "none";
	  if (w > 780) r.style.display = "flex";
	  if (w <= 780) r.style.display = "block";
	}
}