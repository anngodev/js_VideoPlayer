// Get the Elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip");
const ranges = player.querySelectorAll(".player__slider");

// build the functions
function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
	// if(video.paused) {
	// 	video.play();
	// } else {
	// 	video.paused();
	// }
}

function updateButton() {
	const icon = this.paused ? "play" : "pause";
	toggle.textContent = icon;
}



// hook up the event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", togglePlay);
