import { elements } from "../js/main.js"

export function home(){
  
  //limpiamos la pantalla
  window.location.hash = "#/"
  elements.container.innerHTML = ""
  elements.title.innerHTML = ""
  elements.dropDown.innerHTML = ""
  elements.list.innerHTML = "" 

  const principal = `
    <div id="home">
      <p class="p"> Final Space is an American adult animated space opera comedy-drama television series created by Olan Rogers for TBS. The series involves a prisoner named Gary Goodspeed and his alien friend, Mooncake, and focuses on their intergalactic adventures as they try to solve the mystery of the titular "Final Space".</p>
    </div>
    <div class = "homeItems">
      <a href="https://www.youtube.com/watch?v=4EHbt_kSkG8" target="_blank">Season 1</a>
      <a href="https://www.youtube.com/watch?v=Fy2wlCa31-M" target="_blank">Season 2</a>
      <a href="https://www.youtube.com/watch?v=Z4MGJI2zeRs" target="_blank">Season 3</a>
    </div>
  `
  elements.homePage.innerHTML = principal
}