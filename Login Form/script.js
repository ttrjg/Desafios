const body = document.querySelector("body")
const backgroundImg = document.querySelector(".backgroundImg")
const mailImg = document.querySelectorAll(".mailImg")
const mail = document.querySelector("#email")
const passImg = document.querySelectorAll(".passImg")
const password = document.querySelector("#password")
const eye = document.querySelector(".eye")




window.addEventListener("load",getSize)
window.addEventListener("resize", getSize)

mail.addEventListener("focus", lockMail)
mail.addEventListener("focusout", lockMail)

password.addEventListener("focus", lockPass)
password.addEventListener("focusout", lockPass)

eye.addEventListener("click", seePass)

function getSize() {

    if ( body.clientWidth < 950) {
        
        if (backgroundImg.hasAttribute("hidden") === false) {

            backgroundImg.setAttribute("hidden","")
        }
    } else if  ( body.clientWidth >= 950) {

        if (backgroundImg.hasAttribute("hidden") === true) {

            backgroundImg.removeAttribute("hidden")
        }
    }
}

function lockMail() {
    mailImg.forEach(element => {
        element.toggleAttribute("hidden")
    });  
} 

function lockPass() {
    passImg.forEach(element => {
        element.toggleAttribute("hidden")
    });  
}

function seePass(){
   if ( password.getAttribute("type") === "password" ) {

    password.setAttribute("type", "text")

   } else if ( password.getAttribute("type") === "text" ) {

    password.setAttribute("type", "password")

   }

}

