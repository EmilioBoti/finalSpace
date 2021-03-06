import { container, containerLocat, asideBar, title } from "../js/main.js"


export function home(){
  
  window.location.hash = "#/"
  containerLocat.innerHTML = ""
  title.innerHTML = ""
  document.body.classList.add("bgHome")
  asideBar.classList.remove("open-menu")

  const principal = `
    <div id="home-title">
      <h1 class="title" id="title">Final Space</h1>
      <p class="p"> Final Space is an American adult animated space opera comedy-drama television series created by Olan Rogers for TBS. The series involves a prisoner named Gary Goodspeed and his alien friend, Mooncake, and focuses on their intergalactic adventures as they try to solve the mystery of the titular "Final Space".</p>
    </div>
  `
  container.innerHTML = principal
}