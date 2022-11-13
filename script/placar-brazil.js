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

function creatGame(player1, placar1, placar2, player2) {
    return `
    <li>
        <img src="../assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>
            <span>${placar1}-${placar2}</span>
        </strong>
        <img src="../assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}

document.querySelector("#cards").innerHTML = 
   creatCard("24/11", "quinta", 
        creatGame("brazil", "" ,"" ,"serbia"))+
    creatCard("28/11","segunda", 
        creatGame("brazil", "" ,"" ,"switzerland"))+
    creatCard("02/12", "quarta", 
        creatGame("cameroon", "" ,"" ,"brazil"))