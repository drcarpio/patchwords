var docViewMode = null

function loadFileAsText() {
    var fileToLoad = document.getElementById('fileToLoad').files[0]

    var fileReader = new FileReader()
    fileReader.onload = function (fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result
        document.getElementById('docView').innerHTML = textFromFileLoaded
        docViewMode = 'normal'
    }

    fileReader.readAsText(fileToLoad, 'UTF-8')
}

function makeNormal() {
    document.getElementById('docView').removeAttribute('style')
    docViewMode = 'normal'
}

function makeGradient() {
    makeNormal()
    document.getElementById('docView').style.background =
        'linear-gradient(45deg, #f3ec78, #af4261)'
    document.getElementById('docView').style.backgroundSize = '100%'
    document.getElementById('docView').style.webkitBackgroundClip = 'text'
    document.getElementById('docView').style.webkitTextFillColor = 'transparent'

    docViewMode = 'gradient'
}

function makeCircle() {
    makeNormal()
    document.getElementById('docView').style.width = '500px'
    document.getElementById('docView').style.height = '500px'
    document.getElementById('docView').style.borderRadius = '70%'
    document.getElementById('docView').style.textAlign = 'center'

    docViewMode = 'circle'
}

function makeUpsideDown() {
    makeNormal()
    document.getElementById('docView').style.transform = 'rotate(180deg)'
    docViewMode = 'upside-down'
}

function makeShadow() {
    makeNormal()
    document.getElementById('docView').style.textShadow = '1px 1px #0ff'
    docViewMode = 'shadow'
}
