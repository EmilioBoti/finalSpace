import { elements } from "../js/main.js"

const url = "https://finalspaceapi.com/api/v0/location/"

export function getInhabitants(arrayInhabitans){
  
  let inhabitants = ""
  if(arrayInhabitans.length > 0){
    inhabitants = arrayInhabitans.reduce((b, a)=>{ return b +", "+a })
  }

  if(inhabitants === undefined || inhabitants === "") inhabitants = "Unknown"

  return inhabitants
}

export function allLocations(){

  window.location.hash = "#/description"
  elements.container.innerHTML = ""
  elements.list.innerHTML = ""
  elements.homePage.innerHTML = ""
  elements.dropDown.innerHTML = ""
  elements.title.innerHTML = "LOCATIONS"

  const selectPlanet = document.createElement("select")
  selectPlanet.id = "status"
  selectPlanet.name = "status"
  
  const optionPlanet = document.createElement("option")
  optionPlanet.value = ""
  optionPlanet.innerHTML = "Planet"
  selectPlanet.appendChild(optionPlanet)
  elements.dropDown.appendChild(selectPlanet)

  elements.req.onreadystatechange = location
  elements.req.open("GET", url)
  elements.req.send()

  
  function location(){
    if(this.readyState === 4 && this.status === 200){
      const dataLocation = JSON.parse(this.responseText)
      
      dataLocation.forEach(e => {
        const opt = document.createElement("option")
          opt.value = e.id
          opt.innerHTML = e.name
          selectPlanet.appendChild(opt)
      })      
    }
    selectPlanet.addEventListener("change", (e)=>{
      const id  = e.target.value
      if(id !== ""){ locationDetails(id) }     
    })
  }
}
function locationDetails(id){

  elements.req.onreadystatechange = getLocation
  elements.req.open("GET", `${url}${id}`)
  elements.req.send()


  function getLocation(){
    if(this.readyState === 4 && this.status === 200){
      const location = JSON.parse(this.responseText)
      console.log(location)

      
      const arrayInhabitans = location.inhabitants
      let inhabitants = getInhabitants(arrayInhabitans)
      console.log(inhabitants)

      const box =   `
        <section class= "descri">
          <article class = "description">
              <h3 class = "descrItems">Name: ${location.name}</h3>
              <p class = "descrItems"><span>Type:</span> ${location.type}</p>
              <p class = "descrItems"><span>Inhabitants:</span> ${inhabitants}</p>
          </article>
          <div class = "boxImg">
            <img src ="${location.img_url}">
          </div>
        </section>
      `
      elements.container.innerHTML = box
    }
  }
}