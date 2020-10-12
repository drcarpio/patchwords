function addCard(text = 'hello') {
    var card = document.createElement('div')
    card.classList.add('card')
    card.classList.add('draggable')
    card.contentEditable = 'true'
    card.innerHTML = text
    document.getElementById('patch').appendChild(card)
}

function addTxtCard(file) {
    const txtFile = file

    const reader = new FileReader()
    reader.addEventListener('load', (f) => {
        let txt = f.target.result
        addCard(txt)
    })
    reader.readAsText(txtFile)

    hideTxtInput()
}

function showTxtInput() {
    document.getElementById('file-input').style.visibility = 'visible'
    document.getElementById('fileInputToggle').innerHTML = 'cancel upload'
    document.getElementById('fileInputToggle').onclick = hideTxtInput
}

function hideTxtInput() {
    document.getElementById('file-input').style.visibility = 'hidden'
    document.getElementById('file-input').value = ''
    document.getElementById('fileInputToggle').innerHTML =
        'add a card from txt file'
    document.getElementById('fileInputToggle').onclick = showTxtInput
}

module.exports = {
    addCard,
    addTxtCard,
    showTxtInput,
    hideTxtInput,
}
