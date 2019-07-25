// arrays empty and defined
const picture = []
const popArray = []
const imgDes = ['Thumbnail1', 'Thumbnail2', 'Thumbnail3', 'Thumbnail4', 'Thumbnail5', 'Thumbnail6', 'Thumbnail7', 'Thumbnail8', 'Thumbnail9', 'Thumbnail10', 'Thumbnail11', 'Thumbnail12']
const galleryImg = ['bluesmoke', 'brightpaint', 'colorbar', 'colorzoom', 'orangesmoke', 'pinkflower', 'pinksmoke', 'pinkspots', 'redbluemix', 'redfish', 'splatofcolor', 'waterpaint']

//grabing respective divs to call at later date
const grid = document.getElementById('bigby')
const pop = document.getElementById('picPop')
const $close = document.querySelector('.close')

//pushes content into gallery 
for (const galImg of galleryImg) {
    picture.push(`<picture class="pic"><img src="img/${galImg}.jpg" alt="${galImg}"></picture>`)

}
grid.innerHTML = picture.join(" ")
//creates modal images and thumbnails
for (const gal of galleryImg) {
    popArray.push(`<span class="close">&times;</span><div class="content">
    <img id="${gal}" src="img/${gal}.jpg" alt="${gal}">
    <div class="infoText">${imgDes}</div>
    </div>`)
}
pop.innerHTML = popArray.join(" ")

//event listner too display or remove chosen gallery picture
grid.addEventListener('click', function (e) {
    gal = e.target.closest('.pic')
    const source = event.target.closest('img').src;
    const id = event.target.closest('img').id
    const array = []
    if (gal) {
        pop.style.display = "block";
        array.push(`<div class="content">
    <img id="${id}" src="${source}" alt="${gal}">
    <div class="infoText">${imgDes[id]}</div>
    </div>`);
    }
    pop.innerHTML = array.join(" ")
    pop.addEventListener('click', function (e) {
        if (pop) {
            pop.style.display = "none";
        }

    })

})
