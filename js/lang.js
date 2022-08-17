function changeFlag() {
	var currentLang = document.getElementById("lang").value;
	window.location.replace("index-"+currentLang+".php");
}