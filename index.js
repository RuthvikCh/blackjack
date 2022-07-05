let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let slideEl = document.getElementById("slide-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let sgbtnEl = document.getElementById("sgbtn-el")
let ncbtnEl = document.getElementById("ncbtn-el")
let rsbtnEl = document.getElementById("rsbtn-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    return randomNumber
}

function hide(btn){
    btn.style.display = "none";
}

function show(btn){
    btn.style.display = "block";
}
function startGame() {
    hasBlackJack = false
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    show(ncbtnEl)
    hide(sgbtnEl)
    hide(rsbtnEl)
    show(cardsEl)
    show(sumEl)
    show(slideEl)
    renderGame()
    
}

function renderGame() {
    cardsEl.textContent = ""
    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML += gencard(cards[i]) + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        show(rsbtnEl)
        hide(ncbtnEl)
    } else {
        message = " Oops you're out of the game!"
        isAlive = false
        hide(ncbtnEl)
        show(rsbtnEl)
        

    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

function gencard(card){
    let ans = ""
    let ico = "hearts"
    
    let rand = Math.floor( Math.random()*4 ) + 1
if(rand===1){
    ico = "clubs"
}else if(rand===2){
    ico = "hearts"
}else if(rand===3){
    ico = "diamonds"
}else{
    ico = "spades"
}

    if(card>1 && card<=10){
    ans = ` <span class='slidercontent' >  
                <img src='./Images/faces/${card}_of_${ico}.svg' alt=''>   <p> ${card} </p>
            </span> 
            `
    }
    else if(card===1){
        ans = ` <span class='slidercontent' >  
                <img src='./Images/faces/ace_of_${ico}.svg' alt=''>   <p> ${card} </p>
            </span> 
            `
    }
    else if(card===11){
            ans = ` <span class='slidercontent' >  
                <img src='./Images/faces/jack_of_${ico}.svg' alt=''>   <p> ${card} </p>
            </span> 
            `

    }
    else if(card===12){
            ans = ` <span class='slidercontent' >  
                <img src='./Images/faces/queen_of_${ico}.svg' alt=''>   <p> ${card} </p>
            </span> 
            `
            
    }
    else if(card===13){
            ans = ` <span class='slidercontent' >  
                <img src='./Images/faces/king_of_spades.svg' alt=''>   <p> ${card} </p>
            </span> 
            `
            
    }
    return ans
}
    

