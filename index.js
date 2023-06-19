let player = {
    name: "Efe",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 1
    } else if (randomNumber >= 11 && randomNumber <= 13) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    if (isAlive === false) {
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards.push(firstCard)
        cards.push(secondCard)
        isAlive = true
        sum = firstCard + secondCard
        renderGame()
    }
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
        cards = []
    }
    messageEl.textContent = message 
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}