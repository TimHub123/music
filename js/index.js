let album = document.querySelector(`.album`);

for (let i = 0; i < albums.length; i++) {
    if (i == 0) {
        album.innerHTML += `
        <a href="album.html" class="me-3">
            <div class="img-text animate__animated animate__zoomIn">
                <img src="${albums[i].img}" class="img">
                <div class="body-1">
                    <p class="card-text">${albums[i].title}</p>
                </div>
            </div>
        </a>
        `;
    } else {
        album.innerHTML += `
        <a href="album.html" class="pe-3">
            <div class="img-text animate__animated animate__zoomIn">
                <img src="${albums[i].img}" class="img">
                <div class="body-2">
                    <p class="card-text">${albums[i].title}</p>
                </div>
            </div>
        </a>
        `;
    }
    
}