import { container, containerLocat, asideBar, title } from "../js/main.js"

const req = new XMLHttpRequest()

export function allLocations(){

  asideBar.classList.remove("open-menu")
  document.body.classList.remove("bgHome")

  req.onreadystatechange = location
  req.open("GET", `https://finalspaceapi.com/api/v0/location/`)
  req.send()

  function location(){
    if(this.readyState === 4 && this.status === 200){
      const dataLocation = JSON.parse(this.responseText)
        
      container.innerHTML = ""
      title.innerHTML = "LOCATIONS"
      
      dataLocation.forEach(e => {

        const arrayInhabitans = e.inhabitants
        let inhabitants
        if(arrayInhabitans.length > 0){
          inhabitants = arrayInhabitans.reduce((b, a)=>{ return b +", "+a })
        }

        if(inhabitants === undefined) inhabitants = "Unknow"

        const box = document.createElement("div")
        box.innerHTML =    `
          <article class = "cards">
            <img src ="${e.img_url}">
            <p>${e.name}</p>
            <p><strong>Inhabitants by:</strong><small>${inhabitants}</small></p>
          </article>
        ` 
        containerLocat.appendChild(box)
      });
    }
  }
}