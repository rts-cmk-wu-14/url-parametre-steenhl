let params = new URLSearchParams(window.location.search)
const id = params.get("id")
const mainWrapper = document.querySelector("#main-wrapper")

const url = `./data/${id}.json`
// console.log(url);
// console.log(id);

fetch(url)
    .then((respons) => respons.json())
    .then((data) => {

        showData(data)
        setHearts()
    })

function showData(data) {

    let content = /*html*/ `
    <section class="destination">
        <figure class="destination__figure">
            <div class="destination__img-wrapper">
                <!-- Favorite block -->
                <a href="index.html">BACK</a>
                <div class="favorite heart" data-id=${data.id}>
                    <button class="favorite__btn " aria-label="Add to favorites" >
                        <svg class="favorite__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" aria-hidden="true">
                            <path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z" stroke="black" stroke-width="14" />
                        </svg>
                    </button>
                </div>
                <img src="./img/${data.image}" class="destination__img" alt="${data.title}">
            </div>

            <figcaption class="destination__caption">
                <header class="destination__header">
                    <h2 class="destination__title">${data.title}</h2>
                    <h3 class="destination__location">${data.destination}</h3>
                </header>
                
                <section class="destination__content">
                    <h3 class="destination__subtitle">${data.subtitle}</h3>
                    <p class="destination__text">${data.text}</p>
                </section>
            </figcaption>
        </figure>
    </section>
    `
    mainWrapper.insertAdjacentHTML("beforeend", content)
    toggleHearts()
}



