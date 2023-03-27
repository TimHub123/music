let album = document.querySelector(`.album`);

for (let i = 0; i < albums.length; i++) {
    album.innerHTML += `
    <a href="album.html?i=${i}" class="me-3">
        <div class="img-text animate__animated animate__zoomIn">
            <img src="${albums[i].img}" class="img">
            <div class="body-${i + 1}">
                <p class="card-text">${albums[i].title}</p>
            </div>
        </div>
    </a>
    `;
}