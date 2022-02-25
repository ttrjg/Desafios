import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from '/api.js'

const srcButton = document.querySelector('.srcButton')
srcButton.addEventListener("click", search)
const banner = document.querySelector('.banner')
const overview = document.querySelector(".overview")
const title = document.querySelector(".title")
const rated = document.querySelector("#rated")

async function search() {

  var index = Math.floor(Math.random()*20)
  banner.removeAttribute("hidden")

  try {
    var response = await (await fetch(BASE_URL+API_KEY+language)).json()
  } catch (error) {
    console.error(error)
  }
  
  console.log(response)
  const imgPath = (IMG_URL+response.results[index].poster_path)

  banner.setAttribute("src", imgPath)
  title.innerHTML = response.results[index].title
  overview.innerHTML = response.results[index].overview
  rated.innerHTML = '<img src="https://img.icons8.com/fluency/48/000000/christmas-star.png" alt=""></img>'+response.results[index].vote_average

}




