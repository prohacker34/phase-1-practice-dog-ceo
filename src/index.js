console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then(response => response.json())
.then(data => {
    data.message.forEach(image => {
        let img = document.createElement('img')
        img.src = image
        document.querySelector('#dog-image-container').appendChild(img)
    })
})

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
.then(response => response.json())
.then(data => {
    breeds = Object.keys(data.message)
    renderBreeds(breeds)
})

let dogBreeds = document.querySelector('#dog-breeds')
function renderBreeds(breeds) {
    breeds.forEach(breed => {
        let li = document.createElement('li')
        li.innerText = breed
        dogBreeds.appendChild(li)
        li.addEventListener('click', function() {
            li.style.color = 'red'
        })
    })
}
let breedDropdown = document.querySelector('#breed-dropdown')
breedDropdown.addEventListener('change', function(e) {
    selectBreedsStartingWith(e.target.value)
})