import { elements } from "../js/main.js"
import { getInhabitants } from "./location.js"

export function charactersDetails(charcId){

  //limpiado pantalla
  elements.container.innerHTML = ""
  window.location.hash = "#/description"

  //hacemos una petición de un persnaje seleccionado.
  elements.req.onreadystatechange = getDetail
  elements.req.open("GET", `https://finalspaceapi.com/api/v0/character/${charcId}`)
  elements.req.send()
  
  function getDetail(){
      
    if(this.readyState === 4 && this.status === 200){
      const characterDetail = JSON.parse(this.responseText)
      
      //obtenenor un string con las abilidades de los personajes atraves de la función
      let abilities =  getInhabitants(characterDetail.abilities)
      
      //temple
      const box = `
        <section class= "descri">
          <article class = "description">
              <h3 class = "descrItems">Name: ${characterDetail.name}</h3>
              <p class = "descrItems"><span>Status:</span> ${characterDetail.status}</p>
              <p class = "descrItems"><span>Hair:</span> ${characterDetail.hair}</p>
              <p class = "descrItems"><span>Gender:</span> ${characterDetail.gender}</p>
              <p class = "descrItems"><span>Species:</span> ${characterDetail.species}</p>
              <p class = "descrItems"><span>Origin:</span> ${characterDetail.origin}</p>
              <p class = "descrItems"><span>Abilities:</span> ${abilities}</p>
          </article>
          <div class = "boxImg">
            <img src ="${characterDetail.img_url}">
          </div>
        </section>
      `
      elements.container.innerHTML = box
    }  
  }
}
