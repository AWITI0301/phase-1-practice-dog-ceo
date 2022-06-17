// import fetch from 'node-fetch'
console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then(rec => rec.json())
.then(recv => app(recv))

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
.then(recv => recv.json())
.then(data => breed(data))



const app = (recv) => {
    let pics = recv.message
    console.log(pics)
    pics.forEach(data => {
        console.log(`Here the ayre ${data}`)
        loadImgToDom(data)
    })
}

const breed = (data) =>{
    let obj = data.message
    // console.log(obj)
    looping(obj)

}

const looping = (obj) => {
  
    for(const breed in obj){
        const list1 = document.getElementById('dog-breeds')
        const listing = document.createElement('li')
        listing.innerText = breed
        list1.appendChild(listing)
        list1.addEventListener('click', color)
        console.log(breed)
    }
}
const color = (event) => {
    event.target.style.color = "orange"
}

const  loadImgToDom = (data) => {
    let item =  document.getElementById('dog-image-container')
    let img = document.createElement('img')
    img.src = data
    item.appendChild(img)
    img.style.width= "500px";
    img.style.border= "23px solid orange"
    img.style.display="flex"

} 

const dropDown = () =>{
    const firt = document.getElementById('breed-dropdown')
    firt.addEventListener('change', changeBred(event))
} 
const changeBred = (letter) => {
    looping(breed.filter(breed => breed.startsWith(letter)))
}


document.addEventListener('DOMContentLoaded', app())
document.addEventListener('DOMContentLoaded', breed())