import { container, containerLocat, asideBar ,req, title } from "../js/main.js"
import { charactersDetails } from "./charactDetail.js"

  
export function allcharacters(){
  
  container.innerHTML = ""
  containerLocat.innerHTML = ""
  asideBar.classList.remove("open-menu")
  document.body.classList.remove("bgHome")
  
  req.onreadystatechange = characters
  req.open("GET", `https://finalspaceapi.com/api/v0/character/`)
  req.send()
  
  function characters(){
    if((this.readyState === 4) && (this.status === 200)){

      const characDatas = JSON.parse(this.responseText)
      title.innerHTML = "GALLERY"
      characDatas.forEach(e => {

        const cardChar = document.createElement("div")
        cardChar.innerHTML =  `
          <article class = "cards">
            <a href="#/description"><img src ="${e.img_url}" data-id =${e.id}></a>
            <p>${e.name}</p>
          </article>
        ` 
        container.appendChild(cardChar)
      });   
    }
  }
  container.addEventListener("click", (e)=>{
    const id  = e.target.dataset.id
    
    if(id !== undefined){ charactersDetails(id) }     
  })
}
