const pageSearch = window.location.search
const params = new URLSearchParams(pageSearch)

const mainWrapper = document.querySelector("#main-wrapper")
fetch("data/destinations.json")
    .then((respons) => respons.json())
    .then((data) => {
        content(data.destinations)
    });

function content(destinations) {

    const desitnationString = destinations.map((destination) => {

        return /*html*/ `
            <figure class="destinations">
                <div class="destinations__img-wrapper">
                    <img src="./img/${destination.image}" alt="${destination.title}" class="destinations__img">
                </div>

                <figcaption class="destinations__caption">
                    <h2 class="destinations__title">${destination.title}</h2>

                    <div class="destinations__bottom">

                        <!-- Favorite block (genbrugelig) -->
                        <div class="favorite heart" data-id="${destination.id}">
                            <button class="favorite__btn" aria-label="Add to favorites">
                                <svg class="favorite__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" aria-hidden="true">
                                    <path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z" stroke="black" stroke-width="14" />
                                </svg>
                            </button>
                        </div>
                        <a class="destinations__link" href="detaljer.html?id=${destination.id}">More</a>
                    </div>
                </figcaption>
            </figure>`
    }).join("")

    const headerString = `<header class="hero"><h1 class="hero__title">Apartments for rent</h1></header>`
    mainWrapper.insertAdjacentHTML("beforeend", headerString)
    // Skab main dom og indsæt den
    const mainDom = document.createElement("main")
    mainWrapper.insertAdjacentElement("beforeend", mainDom)

    mainDom.insertAdjacentHTML("beforeend", desitnationString)
    setHearts()
    toggleHearts()
}

