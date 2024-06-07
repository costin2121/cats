const urls = ["https://cataas.com/cat?json=true", "https://cataas.com/cat/gif?json=true", "https://cataas.com/cat/cute?json=true", "https://cataas.com/cat/silly?json=true", "https://api.thecatapi.com/v1/images/search"]
const catImg = document.getElementById("cat_img");
const newCat = document.getElementById("new_cat")
console.log('%cHello😺', 'font-size: 36px; font-weight: bold');
window.onload = async () => {
    await newCatImage()
}

newCat.addEventListener('click', () => newCatImage())

async function newCatImage() {
    catImg.src = "./assets/loading32.gif"
    const url = urls[Math.floor(Math.random() * urls.length)];
    const isApiCATAAS = url.includes("cataas")

    try {
        const response = await fetch(url);
        const data = (await response.json());
        if (!isApiCATAAS) {
            catImg.src = data[0].url;
        } else {
            catImg.src = `https://cataas.com/cat/${data._id}${url.includes("gif") && ".gif"}`
        }
    } catch (e) {
        newCatImage();
    }
}