function display(image) {
	var fullimg = document.getElementById('fullimage');
	fullimage.src = image.src;
	var container = document.getElementById('holder').style.visibility = "visible";
}