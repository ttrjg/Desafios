    const stats = document.querySelector("aside")
    const menuClick = document.querySelector(".imgMenu")
    const p = document.querySelectorAll("p")
    const logo = document.querySelector(".logo")
    const avatar = document.querySelector(".avatar")
    const liAll = document.getElementsByTagName("li")
    const page = document.querySelectorAll(".page")
     

menuClick.addEventListener("click", commute)

function commute() {

    if (stats.className === "desactive"){

        stats.classList.remove("desactive")
        stats.classList.add("active")
        for (let index of p) {
        index.removeAttribute("hidden")
        }
        logo.removeAttribute("hidden")
        avatar.removeAttribute("hidden")

    }  else if (stats.className === "active"){

        stats.classList.remove("active")
        stats.classList.add("desactive")
        for (let index of p) {
            index.setAttribute("hidden", "")
            }
        logo.setAttribute("hidden", "")
        avatar.setAttribute("hidden", "")
    }
}

function selected() {
    for (let element of liAll) {
        element.classList.remove("selected")

        if ( element == event.currentTarget) {
            element.classList.add("selected")
        }
    } 
}

function selectPage(){
    for ( let id of page){
       
        const active = document.querySelector(".selected")
        id.setAttribute("hidden", "")
        
        if (active.textContent === id.id){
            console.log(id)
            console.log(active.textContent)
            id.removeAttribute("hidden")
        }
    }
}

