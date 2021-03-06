import { container,containerLocat, req, asideBar, title } from "../js/main.js"

export function charactersDetails(charcId){

    containerLocat.innerHTML = ""
    title.innerHTML = ""
    asideBar.classList.remove("open-menu")
    document.body.classList.remove("bgHome")

    req.onreadystatechange = getDetail
    req.open("GET", `https://finalspaceapi.com/api/v0/character/${charcId}`)
    req.send()
  
  function getDetail(){
      
    if(this.readyState === 4 && this.status === 200){
      const characterDetail = JSON.parse(this.responseText)
      console.log(characterDetail)
      
      const box = `
        <section class= "descri">
          <article class = "description">
              <h3 class = "descrItems">Name: ${characterDetail.name}</h3>
              <p class = "descrItems"><span>Status:</span> ${characterDetail.status}</p>
              <p class = "descrItems"><span>Hair:</span> ${characterDetail.hair}</p>
              <p class = "descrItems"><span>Gender:</span> ${characterDetail.gender}</p>
              <p class = "descrItems"><span>Species:</span> ${characterDetail.species}</p>
              <p class = "descrItems"><span>Origin:</span> ${characterDetail.origin}</p>
              <p class = "descrItems"><span>Abilities:</span> ${characterDetail.abilities[0]}</p>
          </article>
          <div class = "boxImg">
            <img src ="${characterDetail.img_url}">
          </div>
        </section>
      `
      container.innerHTML = box
    }  
  }
}