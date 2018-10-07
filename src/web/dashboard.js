//Variables
var wbutton = document.getElementById('w');
var abutton = document.getElementById('a');
var sbutton = document.getElementById('s');
var dbutton = document.getElementById('d');
var wheel = document.getElementById('steeringwheel');
var wheelangle = 0;
//Key Listener
window.addEventListener('keydown', function (e) {
	var key = e.keyCode ? e.keyCode : e.which;
	//W key
	if (key == 87) {
		wbutton.style.backgroundColor = 'white';
		wbutton.style.color = 'gray';
		wbutton.style.borderColor = 'gray';
	} 
   //A key: rotate wheel -45 degrees
   if (key == 65) {
   	abutton.style.backgroundColor = 'white';
   	abutton.style.color = 'gray';
   	abutton.style.borderColor = 'gray';
   	wheelangle -= 1;
   	rotate(wheel, wheelangle);
   }
   //S key
   if (key == 83) {
   	sbutton.style.backgroundColor = 'white';
   	sbutton.style.color = 'gray';
   	sbutton.style.borderColor = 'gray';
   }
   //D key: rotate wheel 45 degrees
   if (key == 68) {
   	dbutton.style.backgroundColor = 'white';
   	dbutton.style.color = 'gray';
   	dbutton.style.borderColor = 'gray';
   	wheelangle += 1;
   	rotate(wheel, wheelangle);
   }
})
window.addEventListener('keyup', function (e) {
	var key = e.keyCode ? e.keyCode : e.which;
	//W key
	if (key == 87) {
		wbutton.style.backgroundColor = 'transparent';
		wbutton.style.color = 'white';
		wbutton.style.borderColor = 'white';
	} 
   //A key
   if (key == 65) {
   	abutton.style.backgroundColor = 'transparent';
   	abutton.style.color = 'white';
   	abutton.style.borderColor = 'white';
   	returnToZero(wheel, 1);
   }
   //S key
   if (key == 83) {
   	sbutton.style.backgroundColor = 'transparent';
   	sbutton.style.color = 'white';
   	sbutton.style.borderColor = 'white';
   }
   //D key
   if (key == 68) {
   	dbutton.style.backgroundColor = 'transparent';
   	dbutton.style.color = 'white';
   	dbutton.style.borderColor = 'white';
   	returnToZero(wheel, -1);
   }           
})
function rotate(obj, angle) {
	if (Math.abs(wheelangle) <= 15) {
		obj.style.transform = "scale(.35) translate(-1250px,-1000px) rotate("+angle*5+"deg)";
	}
	else {
	}
}
function returnToZero(obj, dir) {
	var timer = setInterval(function() {
		if (wheelangle == 0) {
			clearInterval(timer);
		}
		if (wheelangle > 0) {
			wheelangle -= 1;
		}
		else if (wheelangle < 0) {
			wheelangle += 1;
		}
		obj.style.transform = "scale(.35) translate(-1250px,-1000px) rotate("+wheelangle+"deg)";
	}, 20);
}