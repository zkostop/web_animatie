var background = document.body;
var twinkleContainer = document.querySelector(".twinkle-container");
var boventekst = document.querySelector(".boventekst");
var ondertekst = document.querySelector(".ondertekst");
var slider = document.getElementById("myRange");
var value = slider.value;

slider.oninput = function () {
	if (this.value == 1) {
		// Oranje
		background.style.backgroundColor = "#eb9605";
		boventekst.style.color = "#793802";
		ondertekst.style.color = "#793802";
		twinkleContainer.classList.remove("twinkling");
	}
	if (this.value == 2) {
		// Zwart
		background.style.backgroundColor = "black";
		boventekst.style.color = "white";
		ondertekst.style.color = "white";
		twinkleContainer.classList.add("twinkling");
	}
	if (this.value == 3) {
		// Bruin
		background.style.backgroundColor = "#203354";
		boventekst.style.color = "#f4eeb1";
		ondertekst.style.color = "#f4eeb1";
		twinkleContainer.classList.remove("twinkling");
	}
}
