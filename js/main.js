import { allLocations } from "../views/location.js"
import { characters } from "../views/characters.js"
import { home } from "../views/home.js"

const container = document.getElementById("container-characters")
const dropDown = document.getElementById("dropDown")
const containerLocat = document.getElementById("container-location")
const title = document.getElementById("title")
const list = document.getElementById("list")

const homePage = document.getElementById("homePage")
const asideBar = document.getElementById("asideBar")

const req = new XMLHttpRequest()

//click en el logo nos redirecciona a la página principal.
const logo = document.getElementById("logo")
logo.addEventListener("click", ()=>{ home() })

//creo un objeto de la variable a utilizar en otros ficheros 
export const elements = {
  req: req,
  container: container,
  dropDown: dropDown,
  containerLocat: containerLocat,
  title: title,
  asideBar: asideBar,
  list: list,
  homePage: homePage
}

home()

//evento que detecta el cambio de dirección
window.addEventListener("hashchange", ()=>{ valid(window.location.hash)})

function valid(url){
  switch(url){
    case "#/":
      home()
      break;
    case "#/location":
      allLocations()
      break;
    case "#/characters":
      characters()
      break;
    default:
      console.log("something went wrong")
      break;      
  }
}

