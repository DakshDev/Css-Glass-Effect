let code_transparency;
let code_bgcolor;
let code_radius;
let code_blur;
let code_outline;




function codeDisplay(){
	const displayBox = document.querySelector("[displayBox]");

	let transparency__range = document.querySelector("[transparency__range]");
	transparency__range.addEventListener("mousemove",transparencyFun);

	let radius__range = document.querySelector("[radius__range]");
	radius__range.addEventListener("mousemove",radiusFun);

	let blur__range = document.querySelector("[blur__range]");
	blur__range.addEventListener("mousemove",blurFun);

	let color__bar = document.querySelector("[color__bar]");
	color__bar.addEventListener("input",colorFun);
	
	let outline__range = document.querySelector("[outline__range]");
	outline__range.addEventListener("input",outlineFun);
	

	// Default Val
	transparency__range.value = 20
	radius__range.value = 50;
	blur__range.value = 20;
	color__bar.value = "#ffffff";
	outline__range.value = 30;



	let bgColorOuter;
	let transOuterVal;
	let outlineOuterVal;
	

	// Transparency
	function transparencyFun(){
		let val = transparency__range.value / 100;
		displayBox.style.background = `rgba(${bgColorOuter}, ${val})`;;
		transOuterVal = val;
		code_transparency = val;
		textareaFun();
	}transparencyFun();


	// Border Radius
	function radiusFun(){
		let val = Math.floor(radius__range.value / 2.5);
		displayBox.style.borderRadius = `${val}px`;
		code_radius = val;
		textareaFun();
	}radiusFun();


	// Blur
	function blurFun(){
		let val = Math.floor(blur__range.value / 5);
		displayBox.style.backdropFilter = `blur(${val}px)`;
		code_blur = val;
		textareaFun();
	}blurFun();


	// Color
	function colorFun(){
		let hex = color__bar.value;

		var hex_color = hex;
		var hex_color = hex_color.replace("#", "")
			, r = parseInt(hex_color.substring(0, 2), 16)
			, g = parseInt(hex_color.substring(2, 4), 16)
			, b = parseInt(hex_color.substring(4, 6), 16);
		let x = r + ',' + g + ',' + b;
		bgColorOuter = x;
		let rgbCode = x + "," + transOuterVal;
		let borderClr = x + "," + outlineOuterVal;

		displayBox.style.background = `rgba(${rgbCode})`;
		displayBox.style.border = `1px solid rgba(${borderClr})`;
		code_bgcolor = x;
		transparencyFun();
	}colorFun();


	// Outline
	function outlineFun(){
		let val = outline__range.value / 100;
		outlineOuterVal = val;
		displayBox.style.border = `1px solid rgba(${bgColorOuter},${val})`;
		code_outline = val;
		textareaFun();
		colorFun();
	}outlineFun();

}
codeDisplay();






function copyCode() {
	// Get the text field
	var copyText = document.querySelector("[codeBox] textarea");
  
	// Select the text field
	copyText.select();
	copyText.setSelectionRange(0, 99999); // For mobile devices
  
	// Copy the text inside the text field
	navigator.clipboard.writeText(copyText.value);
	
}








function textareaFun(){
	let textarea = document.querySelector("[codeBox] textarea");

textarea.innerHTML = `background: rgba(${code_bgcolor},${code_transparency});
border-radius: ${code_radius}px;
backdrop-filter: blur(${code_blur}px);
-webkit-backdrop-filter: blur(${code_blur}px);
border: 1px solid rgba(${code_bgcolor},${code_outline});
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
-webkit-box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);`;
	
}
textareaFun();