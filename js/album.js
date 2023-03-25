let container = document.querySelector(`.img-text`);

container.innerHTML = `
<img src="${albums[0].img}" class="img">
<div class="body-1" style="left: 30px;">
    <p class="card-text">${albums[0].title}</p>
</div>
`;