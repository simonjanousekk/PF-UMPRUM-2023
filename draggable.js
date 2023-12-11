class DraggableElement {
    constructor(element) {
        this.element = element;
        this.isDragging = false;
        this.offsetX = 0;
        this.offsetY = 0;

        this.element.addEventListener('mousedown', this.startDragging.bind(this));
        document.addEventListener('mousemove', this.drag.bind(this));
        document.addEventListener('mouseup', this.stopDragging.bind(this));
    }

    startDragging(e) {
        this.isDragging = true;
        this.element.style.bottom = "auto";
        this.element.style.right = "auto";
        this.offsetX = e.clientX - this.element.getBoundingClientRect().left;
        this.offsetY = e.clientY - this.element.getBoundingClientRect().top;

        this.element.style.cursor = 'grabbing';
    }

    drag(e) {
        if (this.isDragging) {
            this.element.style.left = e.clientX - this.offsetX + 'px';
            this.element.style.top = e.clientY - this.offsetY + 'px';
        }
    }

    stopDragging() {
        if (this.isDragging) {
            this.isDragging = false;
            this.element.style.cursor = 'grab';
        }
    }
}
const element2 = new DraggableElement(document.getElementById('prani'));


// document.addEventListener('DOMContentLoaded', function () {
//     align_absolute("download");
// });

// function align_absolute(id) {
//     // Get the element
//     var element = document.getElementById(id);

//     // Calculate the desired position considering margin and padding
//     var windowWidth = window.innerWidth;
//     var windowHeight = window.innerHeight;
//     var elementWidth = element.offsetWidth;
//     var elementHeight = element.offsetHeight;

//     var elementMargin = parseFloat(getComputedStyle(element).margin);
//     var elementPadding = parseFloat(getComputedStyle(element).padding);

//     var topPosition = windowHeight - elementHeight - elementMargin * 2; // Account for margin
//     var leftPosition = windowWidth - elementWidth - elementMargin * 2; // Account for margin

//     console.log(
//         { windowWidth },
//         { windowHeight },
//         { elementWidth },
//         { elementHeight },
//         { topPosition },
//         { leftPosition },
//         { elementMargin },
//         { elementPadding }
//     )

//     // Set the calculated position
//     element.style.top = topPosition + 'px';
//     element.style.left = leftPosition + 'px';
// }