
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
			if (!color) {
				e.target.style.backgroundColor = "black";
			} else {
				var r = Math.floor(Math.random()*255);
				var g = Math.floor(Math.random()*255);
				var b = Math.floor(Math.random()*255);
				e.target.style.backgroundColor = "rgb("+r+","+g+","+b+")";
			};
		});
	};

	/*page initialization*/

	var border = document.getElementById("border");
	var newDiv = document.createElement("div");
	newDiv.id = "container";
	border.appendChild(newDiv);
	var container = document.getElementById("container");
	container.style.width = "600px";
	var button = document.getElementsByTagName("button");
	var color = 0;
	var originalTitleText = document.getElementsByTagName("h1")[0].innerHTML;

	makegrid(4);
	pixelate();

	/*clear button*/

	button[0].addEventListener("click", function(){
	var boxes = document.querySelectorAll(".box");

		for (j = 0; j < boxes.length; j ++){
		boxes[j].style.backgroundColor="white";
		};
	});

	/*resize button*/
	button[1].addEventListener("click", function(){
	var size = prompt("Squares per side?", "4");

		while (container.firstChild) {
			container.removeChild(container.firstChild);
		};

	makegrid(size);
	});

	/*color toggle button*/
	button[2].addEventListener("click", function(){
		var title = document.getElementsByTagName("h1")[0];
		if (!color) {
			color = 1;
			var titleText = title.innerHTML;
			title.innerHTML = '';
			for (l = 0; l < titleText.length; l++){
				var newSpan = document.createElement("span");
				newSpan.innerHTML = titleText[l];
				console.log(newSpan.innerHTML);
				var r = Math.floor(Math.random()*255);
				var g = Math.floor(Math.random()*255);
				var b = Math.floor(Math.random()*255);
				newSpan.style.color = "rgb("+r+","+g+","+b+")";
				title.appendChild(newSpan);
			}
		} else {
			color = 0;
			while (title.firstChild) {
				title.removeChild(title.firstChild);
			};
			title.innerHTML = originalTitleText;
		};
	});

});


