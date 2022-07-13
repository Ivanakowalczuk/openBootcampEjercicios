const cards = document.querySelectorAll(".card")
const secciones = document.querySelectorAll(".seccion")

cards.forEach(card => {
    card.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el párrafo: " + card.innerText)
        card.classList.add("dragging")
        event.dataTransfer.setData("id", card.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    card.addEventListener("dragend", () => {
    
        card.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy" 
        
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop")
        const id_card= event.dataTransfer.getData("id")
        const card = document.getElementById(id_card)
        seccion.appendChild(card)
    })
})

const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", event => {
    const id_card = event.dataTransfer.getData("id")
    document.getElementById(id_card).remove()
})