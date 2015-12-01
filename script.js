
window.addEventListener("load", function(){

	/*grid creation function*/
	function makegrid(n){

		var dimensions = 600/n + "px";
		var container = document.getElementById("container");

		for (i = 0; i < n*n; i++){
			var newDiv = document.createElement("div");
			newDiv.className = "box";
			newDiv.style.width = dimensions;
			newDiv.style.height = dimensions;
			container.appendChild(newDiv);
		};
	};

	/*change square color function*/
	function pixelate() {
		container.addEventListener("mouseover", function(e){
		e.target.classList.add("black"); 
		});
	};

	/*page initialization*/
	
	var newDiv = document.createElement("div");
	newDiv.id = "container";
	document.body.appendChild(newDiv);
	var container = document.getElementById("container");
	container.style.width = "600px";

	makegrid(4);
	pixelate();

	/*clear + recreate button*/
	var button = document.getElementsByTagName("button");
	var boxes = document.querySelectorAll(".box");

	button[0].addEventListener("click", function(){

		for (j = 0; j < boxes.length; j ++){
		boxes[j].classList.remove("black");
		};

	var size = prompt("Squares per side?", "4");
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	};
	makegrid(size);
	pixelate();
	});

});
