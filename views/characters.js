import { elements } from "../js/main.js"
import { charactersDetails } from "./charactDetail.js"

const url = "https://finalspaceapi.com/api/v0/character/"
  
export function characters(){
  
  //limpiar pantalla
  elements.dropDown.innerHTML = ""
  elements.homePage.innerHTML = ""
  elements.container.innerHTML = ""
  elements.list.innerHTML = ""  
  elements.title.innerHTML = "Characters"
  
  //creamos el primer desplegable para los estados de los personajes
  const selectStatus = document.createElement("select")
  selectStatus.id = "status"
  selectStatus.name = "status"
  
  //valor por defecto de primer desplagable
  const optionSt = document.createElement("option")
  optionSt.value = ""
  optionSt.innerHTML = "Status"
  selectStatus.appendChild(optionSt)
  elements.dropDown.appendChild(selectStatus)

  //creamos segundo select para los personajes
  const charac = document.createElement("select")
  charac.id = "charaters"
  charac.name = "character"
  //valor por defecto
  const option = document.createElement("option")
  option.value = ""
  option.innerHTML = "Character"
  charac.appendChild(option)
  elements.dropDown.appendChild(charac)

  //hacemos la petición
  elements.req.onreadystatechange = statuesChar
  elements.req.open("GET", url)
  elements.req.send()
  
  //funcion para insertar los estados de los personajes en el primer desplegable
  function statuesChar(){
    if((this.readyState === 4) && (this.status === 200)){

      const characDatas = JSON.parse(this.responseText)
      let st = []
      
      //evaluanos que no introduzcamos estados repitidos al desplegable
      characDatas.forEach(e => {

        const p = document.createElement("p")
        p.innerHTML = e.name
        p.classList.add("itemList")
        elements.list.appendChild(p)

        if(!st.includes(e.status)){
          const opt = document.createElement("option")
          opt.value = e.status
          opt.innerHTML = e.status
          st.push(e.status)
          selectStatus.appendChild(opt)
        }
      })
    }
  }
  //removemos los valores que se remplezaron(evento ocure cuando cambiados de estados de personaje) 
  selectStatus.addEventListener("change", ()=>{
    const clear = document.querySelectorAll(".select")

    clear.forEach((e)=>{ charac.removeChild(e) })
    searchByStatus(selectStatus.value)
  })

  //buscamos los personajes de un estado en específico
  function searchByStatus(status){
    
    elements.req.onreadystatechange = characters
    elements.req.open("GET", url)
    elements.req.send()

    function characters(){
      if((this.readyState === 4) && (this.status === 200)){
        let st2 = status
        const characDatas = JSON.parse(this.responseText)

        characDatas.forEach(e => {

          if(e.status === st2){
            const opt = document.createElement("option")
            opt.value = e.id
            opt.innerHTML = e.name
            charac.appendChild(opt)
            opt.classList.add("select")
          }
        })
      }
    }
  }
  //muestra la información del personaje selecciondo.
  charac.addEventListener("change", (e)=>{
    const id  = e.target.value
    if(id !== ""){ charactersDetails(id) }     
  })
}