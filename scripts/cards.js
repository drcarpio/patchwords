function addCard() {
    var card = document.createElement('div')
    card.classList.add('card')
    card.classList.add('draggable')
    card.contentEditable = 'true'
    card.innerHTML = 'hello'
    document.getElementById('patch').appendChild(card)
}

module.exports = addCard;

