let container = document.querySelector(`.album`);
let playlist = document.querySelector(`.playlist`);

let album = albums[0];

let tracks = album.tracks;

container.innerHTML = `
<img src="${album.img}" class="img">
<div class="body-1" style="left: 30px;">
    <p class="card-text">${album.title}</p>
</div>
`;

for (let j = 0; j < tracks.length; j++) {
    let track = tracks[j];
    playlist.innerHTML += `
    <li class="d-flex align-items-center mb-3">
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