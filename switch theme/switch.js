const main = document.querySelector("main")
const checkbox = document.querySelector("input[name=theme]")

function theme() {
if (checkbox.checked === true){
        main.classList.add("dark")
} else if (main.className === "dark"){
       main.classList.remove("dark") 
}
}


