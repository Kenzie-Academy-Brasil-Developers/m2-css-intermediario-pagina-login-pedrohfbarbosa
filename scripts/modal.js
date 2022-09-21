const allButtons = document.querySelectorAll("button")
for (let i = 0; i < allButtons.length; i++){
    allButtons[i].addEventListener("click", function(event){
        event.preventDefault()
    })
}

const modalButtons = document.querySelectorAll("[data-modal-control]")

for (let i = 0; i < modalButtons.length; i++){
    let button = modalButtons[i]
    button.addEventListener("click", function(){        
        let modalId = button.getAttribute("data-modal-control")        
        document.getElementById(modalId).classList.toggle("show-modal")
    })
}

