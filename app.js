const dataUSA = [
    [3.83, 4.01, 17.1, 23.59, 7.39, 6.69],
    [5.04, 5.25, 17.1, 23.59, 9.95, 14.13],
    [8.43, 9.25, 18.9, 27.43, 28.92, 45.66],
    [11.73, 15.24, 22.19, 27.43, 32.69, 68.84],
    [15.04, 23.88, 29.98, 34.56, 43.04, 115.14],
    [18.19, 33.95, 48.63, 56.42, 76.28, 235.53]
]
const dataCanada = [
    [7.94, 8.15, 8.15, 12.46, 6.89, 11.09],
    [7.94, 8.15, 8.15, 12.46, 9.10, 18.74],
    [9.75, 10.16, 10.16, 14.74, 24.51, 52.44],
    [11.39, 11.83, 11.83, 16.66, 29.23, 78.79],
    [14.69, 15.5, 15.5, 20.81, 40.73, 123.59],
    [28.98, 30.39, 30.39, 37.70, 73.97, 238.64]
]

const photoAnnot = [
    "imgWeight/2oz.jpg",
    "imgWeight/1lb.jpg",
    "imgWeight/5lb.jpg",
    "imgWeight/10lb.jpg",
    "imgWeight/20lb.jpg",
    "imgWeight/50lb.jpg"
]
const textAnnot = [
    "Socket adapter",
    "Jacket",
    "Screen",
    "Vacuum cleaner",
    "Table",
    "Bicycle"
]



let targetCountry = ""
let NumbObj = 0

const country = document.querySelector(".USA_or_Canade")
const threeDay = document.getElementById("ThreeDay")
const productWeight = document.querySelector(".weight_product")
const weightItem = document.querySelectorAll(".weight_product_item")
const price = document.querySelectorAll(".priceProduct_cost")
const collectionPrise = document.querySelector(".priceProduct")
const imagesAnnot = document.querySelector(".examplePicturesProduct_img")
const titleAnnotat = document.querySelector(".titleImgAnnotation")

// Обработчик на страну
country.addEventListener("click", (event) => {
    // Предотвратим выделение нескольких стилей
    for (childElement of event.target.parentElement.children) {
        childElement.style.backgroundColor = "#4169E1"

        threeDay.style.display = "flex"
    }

    if (event.target.innerHTML.includes("USA")) {

        // Изменили стили
        event.target.style.backgroundColor = "grey"
        event.target.style.borderRadius = "10px"

        // Запишем страну в переменную
        targetCountry = "USA"

    } else if (event.target.innerHTML.includes("Canada")) {
        // Изменили стили
        event.target.style.backgroundColor = "grey"
        event.target.style.borderRadius = "10px"

        // Запишем страну в переменную
        targetCountry = "Canada"

        // Отключим третий день
        threeDay.style.display = "none"
    }
})

// Обработчик на вес заказа
productWeight.addEventListener("click", (event) => {

    // Вернуть цвета в норму
    for (item of weightItem) {
        item.style.backgroundColor = "#4169E1"
    }

    // Выделить цвет нажатого
    event.target.style.backgroundColor = "grey"

    // Работа со значениями
    NumbObj = event.target.getAttribute("value")

    // Присвоить картинку
    imagesAnnot.setAttribute("src", photoAnnot[NumbObj])

    // Присвоить заголовок
    titleAnnotat.innerHTML = textAnnot[NumbObj]

    if (targetCountry == "USA") {
        for (i = 0; i < 6; i++) {
            price[i].innerHTML = dataUSA[NumbObj][i] + "$"
        }
    }
    if (targetCountry == "Canada") {
        for (i = 0; i < 6; i++) {
            price[i].innerHTML = dataCanada[NumbObj][i] + "$"
        }
    }
})

// =====================Работа с вопросами=================
const ask = document.querySelector(".question")

ask.addEventListener("click", (event) => {
    event.target.classList.toggle("active")
    if (event.target.classList.contains('active')) {
        event.target.style.height = "100%"
        let strelka = event.target.parentElement.lastElementChild
        strelka.innerHTML = "▲"
    } else {
        event.target.style.height = "2.6em"
        let strelka = event.target.parentElement.lastElementChild
        strelka.innerHTML = "▼"
    }
})