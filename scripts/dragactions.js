/*global interact*/
/*eslint no-undef: "error"*/

interact('.draggable').draggable({
    // keep the element within the area of its parent
    modifiers: [
        interact.modifiers.restrictRect({
            endOnly: true,
        }),
    ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
        // call this function on every dragmove event
        move: dragMoveListener,

        // call this function on every dragend event
        end() {},
    },
})

function dragMoveListener(event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
    overlap: 0.1,

    // listen for drop related events:
    ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active')
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')
    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
    },
    ondrop: function (event) {
        console.log(event.relatedTarget)
        document.getElementById('patch').removeChild(event.relatedTarget)
    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
    },
})

interact('.drag-drop').draggable({
    inertia: true,
    modifiers: [
        interact.modifiers.restrictRect({
            endOnly: true,
        }),
    ],
    autoScroll: true,
    listeners: { move: dragMoveListener },
})
