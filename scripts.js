//get elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress_filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

//build functions
function togglePlay() {
    //ES6
    // video[video.paused ? "play": "pause"]();
    
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

function updateButton() {
    //ES6
    // toggle.textContent = this.paused ? '►' : '❚ ❚';

    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

//hook up event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay);