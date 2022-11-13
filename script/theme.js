let btnTheme = document.getElementById("btn")
let setColor = ["blue", "green", "yellow"]
let nColor = 0

btnTheme.addEventListener("click", () =>{  
    nColor = nColor +1
    if (nColor > 2){
        nColor = 0
    }
    document.body.removeAttribute("class")
    document.body.classList.toggle(setColor[nColor])
})

