function changeFlag() {
	var currentLang = document.getElementById("lang").value;
	var langs = ["ukr", "rus", "eng"]

	for (const lang of langs) {
		document.getElementById(lang + "-flag").style.display = "none";
	}

	document.getElementById(currentLang + "-flag").style.display = "block";
}