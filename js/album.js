let container = document.querySelector(`.album`);
let playlist = document.querySelector(`.playlist`);
let play = document.querySelector(`.play`);
let go = document.querySelector(`.img-go`);
let audio = document.querySelector(`.audio`);
let imgTrack = document.querySelector(`.img-track`);
let timeNode = document.querySelector(`.time`);

let search = new URLSearchParams(window.location.search);

let i = search.get(`i`);

let album = albums[i];

let tracks = album.tracks;

let d;

let isPlaying = false;

container.innerHTML = `
<img src="${album.img}" class="img">
<div class="body-${Number(i) + 1}" style="left: 30px;">
    <p class="card-text">${album.title}</p>
</div>
`;

for (let j = 0; j < tracks.length; j++) {
    let track = tracks[j];
    playlist.innerHTML += `
    <li class="track d-flex align-items-center mb-3">
        <span class="me-3">0${j + 1}</span>
        <img class="me-3" src="${track.img}" width="50px" height="50px">
        <div class="text me-5">
            <div>${track.title}</div>
            <div class="d-flex">
                <img src="assets/profile-no.png" width="12px" height="12px">
                <div class="text-secondary ms-1">${track.author}</div>
            </div>
        </div>
        <span class="time ms-2">${track.time}</span>
        <span class="time text-secondary ms-auto me-4">${track.more}</span>
    </li>
    `;
}

let trackNodes = document.querySelectorAll(`.track`);

for (let i = 0; i < trackNodes.length; i++) {
    trackNodes[i].addEventListener(`click`, function () {
        let track = tracks[i];
        if (d == i) {
            if (isPlaying) {
                go.src = `assets/play.png`;
                isPlaying = false;
                audio.pause();
            } else {
                go.src = `assets/pause.png`;
                isPlaying = true;
                audio.play();
                updateProgress();
            }
        } else {
            isPlaying = false;
            timeNode.innerHTML = tracks[i].time;
            audio.src = tracks[i].src;
            imgTrack.src = tracks[i].img;
            d = i;
            play.classList.remove(`d-none`);
            if (isPlaying) {
                go.src = `assets/play.png`;
                isPlaying = false;
                audio.pause();
            } else {
                go.src = `assets/pause.png`;
                isPlaying = true;
                audio.play();
                updateProgress();
            }
        }
    });
}

function updateProgress() {
    timeNode.innerHTML = audio.currentTime;
    if (isPlaying) {
        requestAnimationFrame(updateProgress);
    }
  }