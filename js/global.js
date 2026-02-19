function setLocalItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getLocalItem(key) {
    return JSON.parse(localStorage.getItem(key)) || []
}

// Funktion køre kun ved load af siden
function setHearts() {
    const heartsDom = document.querySelectorAll(".heart")
    const favorites = getLocalItem("favorites")

    if (!heartsDom.length) return

    heartsDom.forEach(heart => {
        const id = heart.dataset.id
        if (favorites.includes(id)) {
            heart.classList.add("active")
        }
    })
}

function toggleHearts() {
    let heartDom = document.querySelectorAll(".heart")
    if (heartDom.length == 0) return

    heartDom.forEach(btn => {
        btn.addEventListener("click", () => {
            // find id
            const id = btn.dataset.id
            // getLocalItem function definet i global.js
            let favorites = getLocalItem("favorites")

            // fjern den hvis den findes 
            if (favorites.includes(id)) {
                // .filter() laver et nyt array. Den beholder kun værdier hvor fav !== id. Altså: den smider id væk
                favorites = favorites.filter(fav => fav !== id)
                btn.classList.remove("active")
            } else {
                // tilføj den hvis ikke findes
                favorites.push(id)
                btn.classList.add("active")
            }
            // funktion defineret i global.js
            setLocalItem("favorites", favorites)
        })
    })
}
