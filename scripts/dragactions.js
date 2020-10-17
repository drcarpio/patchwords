/*global interact*/
/*eslint no-undef: "error"*/

interact('.draggable').draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of its parent
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent',
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
