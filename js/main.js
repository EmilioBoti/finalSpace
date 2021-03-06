import { allLocations } from "../views/location.js"
import { allcharacters } from "../views/characters.js"
import { home } from "../views/home.js"

export const req = new XMLHttpRequest()

export const container = document.getElementById("container-characters")
export const containerLocat = document.getElementById("container-location")
export const title = document.getElementById("title")

export const menu = document.getElementById("open")
export const close = document.getElementById("closer")
export const asideBar = document.getElementById("asideBar")
const overlay = document.getElementById("overlay")

home()
menu.addEventListener("click", ()=>{
  asideBar.classList.add("open-menu")
  overlay.style.display = "block"
})
close.addEventListener("click", ()=>{
  asideBar.classList.remove("open-menu")
  overlay.style.display = "none"
})

window.addEventListener("hashchange", ()=>{ valid(window.location.hash)})

function valid(url){
  switch(url){
    case "#/":
      home()
      break;
    case "#/location":
      allLocations()
      break;
    case "#/episode":
      //allUrl()
      break;
    case "#/characters":
      allcharacters()
      break;
    default:
      console.log("something went wrong")
      break;      
  }
}

