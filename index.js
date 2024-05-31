const urls = ["https://cataas.com/api/cat", "https://cataas.com/api/cat/gif", "https://cataas.com/api/cat/cute", "https://cataas.com/api/cat/silly", "https://api.thecatapi.com/v1/images/search"]
const catImg = document.getElementById("cat_img");
const newCat = document.getElementById("new_cat")

window.onload = async () => {
    await newCatImage()
}

newCat.addEventListener('click', () => newCatImage())

async function newCatImage() {

    const url = "https://api.thecatapi.com/v1/images/search" /* urls[Math.floor(Math.random() * urls.length)]; */
    const isApiCATAAS = url.includes("cataas")

    try {
        const response = await fetch(url);
        const data = (await response.json())[0];
        if (!isApiCATAAS) {
            catImg.src = data.url;
        }
    } catch (e) {
        newCatImage();
    }
}