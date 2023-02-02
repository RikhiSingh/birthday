var numberOfConfetti = 50;
var confettiContainer = document.getElementById("confetti-container");
var colors = ["red", "blue", "green", "yellow", "purple", "pink"];

for (var i = 0; i < numberOfConfetti; i++) {
  var confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = Math.floor(Math.random() * 100) + "%";
  confetti.style.top = Math.floor(Math.random() * 100) + "%";
  confetti.style.width = Math.floor(Math.random() * 10 + 5) + "px";
  confetti.style.height = confetti.style.width;
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.transform = "rotate(" + Math.floor(Math.random() * 360) + "deg)";
  confetti.style.opacity = Math.random();
  confettiContainer.appendChild(confetti);
}
function resetParticle(particle, width, height) {
	particle.color = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
	particle.color2 = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
	particle.x = Math.random() * width;
	particle.y = Math.random() * height - height;
	particle.diameter = Math.random() * 10 + 5;
	particle.tilt = Math.random() * 10 - 10;
	particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
	particle.tiltAngle = Math.random() * Math.PI;
	return particle;
}

function toggleConfettiPause() {
	if (pause)
		resumeConfetti();
	else
		pauseConfetti();
}

function isConfettiPaused() {
	return pause;
}

function pauseConfetti() {
	pause = true;
}