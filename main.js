let btnTheme = document.getElementById("btn")
let setColor = ["yellow", "blue", "green"]
let nColor = 0

btnTheme.addEventListener("click", () =>{  
    nColor = nColor +1
    if (nColor > 2){
        nColor = 0
    }
    document.body.removeAttribute("class")
    document.body.classList.toggle(setColor[nColor])
})

function creatGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li> 
    `
}

let delay = -0.4;
function creatCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}                  
        </ul>
    </div>
    `
}

document.querySelector("#cards").innerHTML = 
    creatCard("24/11", "quinta", 
        creatGame("brazil", "16:00", "serbia")) +
    creatCard("28/11", "segunda", 
        creatGame("brazil", "13:00", "switzerland")) +
    creatCard("02/12", "sexta", 
        creatGame("cameroon", "16:00", "brazil"))
