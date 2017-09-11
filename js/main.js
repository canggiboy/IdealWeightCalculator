(function () {
	window.addEventListener("tizenhwkey", function (ev) {
		var activePopup = null,
			page = null,
			pageid = "";

		if (ev.keyName === "back") {
			activePopup = document.querySelector(".ui-popup-active");
			page = document.getElementsByClassName("ui-page-active")[0];
			pageid = page ? page.id : "";

			if (pageid === "main" && !activePopup) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	});
}());

var w = document.getElementById("weight");
var h = document.getElementById("height");
var btnEnter = document.getElementById("btnEnter");
var btnAbout = document.getElementById("btnAbout");
var btnBack = document.getElementById("btnBack");

btnEnter.addEventListener("click", function() {
	if (w.value == ""){
		alert("Please input your weight(kg)");
	}else if (h.value == ""){
		alert("Please input your height(cm)");
	}else{
		tau.changePage('result-page');
		calc();
	}
});

btnAbout.addEventListener("click", function() {
	tau.changePage('about');
});

btnBack.addEventListener("click", function() {
	window.history.back();
});

btnBack1.addEventListener("click", function() {
	window.history.back();
	clear();
});

function calc() {
	var count;
	var count1;
	var radios = document.getElementsByName('gender');
	
	count = w.value/((h.value/100)*(h.value/100));
	
	for (var i = 0, length = radios.length; i < length; i++){
		if (radios[0].checked){
			if ((w.value !== "")&&(h.value !== "")){
				if (count<17){
					document.getElementById("result").innerHTML = "Thin";
					document.getElementById("logo-result").className = "icon-cc thin";
				}else if (count>=17 && count<=23){
					document.getElementById("result").innerHTML = "Normal";
					document.getElementById("logo-result").className = "icon-cc normal";
				}else if (count>23 && count<=27){
					document.getElementById("result").innerHTML = "Fat";
					document.getElementById("logo-result").className = "icon-cc fat";
				}else if (count>27){
					document.getElementById("result").innerHTML = "Obesity";
					document.getElementById("logo-result").className = "icon-cc obesity";
				}
			}
			else{
				clear();
			} 
		}
		else if(radios[1].checked){
			if ((w.value !== "")&&(h.value !== "")){
				if ((w.value !== "")&&(h.value !== "")){
					if (count<17){
						document.getElementById("result").innerHTML = "Thin";
						document.getElementById("logo-result").className = "icon-cc thin";
					}else if (count>=17 && count<=23){
						document.getElementById("result").innerHTML = "Normal";
						document.getElementById("logo-result").className = "icon-cc normal";
					}else if (count>23 && count<=27){
						document.getElementById("result").innerHTML = "Fat";
						document.getElementById("logo-result").className = "icon-cc fat";
					}else if (count>27){
						document.getElementById("result").innerHTML = "Obesity";
						document.getElementById("logo-result").className = "icon-cc obesity";
					}
				}
			}
			else{
				clear();
			}
		}	
	}
}

function clear() {
	w.value = "";
	h.value = "";
}