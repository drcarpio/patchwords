function changeColor(newColor) {
    document.body.style.backgroundColor = newColor
}

function changeColumns(columns) {
    document.getElementById('patch').style.columnCount = columns
}

module.exports = {
    changeColor,
    changeColumns,
}
