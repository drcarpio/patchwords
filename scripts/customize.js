/** Changes the document background color. */
function changeColor(newColor) {
    document.body.style.backgroundColor = newColor
}

/** Changes the number of columns. */
function changeColumns(columns) {
    document.getElementById('patch').style.columnCount = columns
}

module.exports = {
    changeColor,
    changeColumns,
}
