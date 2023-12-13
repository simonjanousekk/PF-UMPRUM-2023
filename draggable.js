// document.addEventListener('DOMContentLoaded', function () {
//     makeElementDraggable('prani_parent', 'prani_handle');
// });

// function makeElementDraggable(draggableId, handleId) {
//     var isDragging = false;
//     var offset = { x: 0, y: 0 };

//     var draggableElement = document.getElementById(draggableId);
//     var handleElement = document.getElementById(handleId);

//     if (draggableElement && handleElement) {
//         handleElement.style.cursor = 'grab';

//         handleElement.addEventListener('mousedown', function (e) {
//             isDragging = true;

//             // Calculate the offset between mouse position and the top-left corner of the element
//             offset.x = e.clientX - draggableElement.offsetLeft;
//             offset.y = e.clientY - draggableElement.offsetTop;
//         });

//         document.addEventListener('mousemove', function (e) {
//             if (isDragging) {
//                 drawing = false;
//                 draggableElement.style.left = e.clientX - offset.x + 'px';
//                 draggableElement.style.top = e.clientY - offset.y + 'px';
//             }
//         });

//         document.addEventListener('mouseup', function () {
//             isDragging = false;
//             drawing = true;
//         });
//     }
// }


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

        handleElement.addEventListener('mousedown', startDrag);
        handleElement.addEventListener('touchstart', startDrag);

        function startDrag(e) {
            e.preventDefault(); // Prevent default touch behavior

            isDragging = true;

            if (e.type === 'mousedown') {
                offset.x = e.clientX - draggableElement.offsetLeft;
                offset.y = e.clientY - draggableElement.offsetTop;
            } else if (e.type === 'touchstart' && e.touches.length === 1) {
                var touch = e.touches[0];
                offset.x = touch.clientX - draggableElement.offsetLeft;
                offset.y = touch.clientY - draggableElement.offsetTop;
            }
        }

        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag);

        function drag(e) {
            if (isDragging) {
                e.preventDefault(); // Prevent default touch behavior
                drawing = false;

                if (e.type === 'mousemove') {
                    draggableElement.style.left = e.clientX - offset.x + 'px';
                    draggableElement.style.top = e.clientY - offset.y + 'px';
                } else if (e.type === 'touchmove' && e.touches.length === 1) {
                    var touch = e.touches[0];
                    draggableElement.style.left = touch.clientX - offset.x + 'px';
                    draggableElement.style.top = touch.clientY - offset.y + 'px';
                }
            }
        }

        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchend', stopDrag);

        function stopDrag() {
            isDragging = false;
            drawing = true;
        }
    }
}
