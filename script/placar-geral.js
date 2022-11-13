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
    creatCard("21/11", "segunda", 
        creatGame("england", "" ,"" ,"iran") +  
        creatGame("senegal", "" ,"" ,"netherlands")+
        creatGame("united-states", "" ,"" ,"wales")) +
    creatCard("22/11", "terça", 
        creatGame("argentina", "" ,"" ,"saudi-arabia")+
        creatGame("denmark", "" ,"" ,"tunisia")+
        creatGame("mexico", "" ,"" ,"poland")+
        creatGame("france", "" ,"" ,"australia")) +
    creatCard("23/11", "quarta", 
        creatGame("morocco", "" ,"" ,"croatia")+
        creatGame("germany", "" ,"" ,"japan")+
        creatGame("spain", "" ,"" ,"costa-rica")+
        creatGame("belgium", "" ,"" ,"canada")) +
    creatCard("24/11", "quinta", 
        creatGame("switzerland", "" ,"" ,"cameroon")+
        creatGame("uruguay", "" ,"" ,"south-korea")+
        creatGame("portugal", "" ,"" ,"ghana")+
        creatGame("brazil", "" ,"" ,"serbia")) +
    creatCard("25/11", "sexta", 
        creatGame("wales", "" ,"" ,"iran")+
        creatGame("qatar", "" ,"" ,"senegal")+
        creatGame("netherlands", "" ,"" ,"ecuador")+
        creatGame("england", "" ,"" ,"united-states"))+
    creatCard("26/11", "sábado", 
        creatGame("tunisia", "" ,"" ,"australia")+
        creatGame("poland", "" ,"" ,"saudi-arabia")+
        creatGame("france", "" ,"" ,"denmark")+
        creatGame("argentina", "" ,"" ,"mexico"))+
    creatCard("27/11", "domingo", 
        creatGame("japan", "" ,"" ,"costa-rica")+
        creatGame("belgium", "" ,"" ,"morocco")+
        creatGame("croatia", "" ,"" ,"canada")+
        creatGame("spain", "" ,"" ,"germany"))+
    creatCard("28/11", "segunda", 
        creatGame("cameroon", "" ,"" ,"serbia")+
        creatGame("south-korea", "" ,"" ,"ghana")+
        creatGame("brazil", "" ,"" ,"switzerland")+
        creatGame("portugal", "" ,"" ,"uruguay"))+
    creatCard("29/11", "terça", 
        creatGame("ecuador", "" ,"" ,"senegal")+
        creatGame("netherlands", "" ,"" ,"qatar")+
        creatGame("iran", "" ,"" ,"united-states")+
        creatGame("wales", "" ,"" ,"england"))+
    creatCard("30/11", "quarta", 
        creatGame("tunisia", "" ,"" ,"france")+
        creatGame("australia", "" ,"" ,"denmark")+
        creatGame("poland", "" ,"" ,"argentina")+
        creatGame("saudi-arabia", "" ,"" ,"mexico"))+
    creatCard("01/12", "quinta", 
        creatGame("croatia", "" ,"" ,"germany")+
        creatGame("canada", "" ,"" ,"morocco")+
        creatGame("japan", "" ,"" ,"spain")+
        creatGame("costa-rica", "" ,"" ,"germany"))+
    creatCard("02/12", "quarta", 
        creatGame("south-korea", "" ,"" ,"portugal")+
        creatGame("ghana", "" ,"" ,"uruguay")+
        creatGame("serbia", "" ,"" ,"switzerland")+
        creatGame("cameroon", "" ,"" ,"brazil"))