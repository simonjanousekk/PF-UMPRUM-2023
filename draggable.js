document.addEventListener('DOMContentLoaded', function () {
    makeElementDraggable('prani_parent', 'prani_handle');
});

function makeElementDraggable(draggableId, handleId) {
    var isDragging = false;
    var offset = { x: 0, y: 0 };

    var draggableElement = document.getElementById(draggableId);
    var handleElement = document.getElementById(handleId);

    if (draggableElement && handleElement) {
        handleElement.style.cursor = 'grab';

        handleElement.addEventListener('mousedown', function (e) {
            isDragging = true;

            // Calculate the offset between mouse position and the top-left corner of the element
            offset.x = e.clientX - draggableElement.offsetLeft;
            offset.y = e.clientY - draggableElement.offsetTop;
        });

        document.addEventListener('mousemove', function (e) {
            if (isDragging) {
                drawing = false;
                draggableElement.style.left = e.clientX - offset.x + 'px';
                draggableElement.style.top = e.clientY - offset.y + 'px';
            }
        });

        document.addEventListener('mouseup', function () {
            isDragging = false;
            drawing = true;
        });
    }
}