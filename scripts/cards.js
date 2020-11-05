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

function addImgCard(img) {
    var card = document.createElement('div')
    card.classList.add('card')
    card.classList.add('draggable')

    var image = document.createElement('img')
    image.src = img
    image.alt = 'image card'
    image.style.width = '100%'
    image.style.height = 'auto'

    card.appendChild(image)

    document.getElementById('patch').appendChild(card)
}

function uploadImages(files) {
    var imgFile

    for (imgFile of files) {
        const reader = new FileReader()
        reader.addEventListener('load', (f) => {
            let img = f.target.result
            addImgCard(img)
        })
        reader.readAsDataURL(imgFile)
    }

    hideImgInput()
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

function showImgInput() {
    document.getElementById('image-input').style.visibility = 'visible'
    document.getElementById('imageInputToggle').innerHTML = 'cancel upload'
    document.getElementById('imageInputToggle').onclick = hideImgInput
}

function hideImgInput() {
    document.getElementById('image-input').style.visibility = 'hidden'
    document.getElementById('image-input').value = ''
    document.getElementById('imageInputToggle').innerHTML = 'add image card'
    document.getElementById('imageInputToggle').onclick = showImgInput
}

module.exports = {
    addCard,
    addTxtCard,
    addImgCard,
    uploadImages,
    showTxtInput,
    hideTxtInput,
    showImgInput,
    hideImgInput,
}
