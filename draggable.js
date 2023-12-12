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
const element2 = new DraggableElement(document.getElementById('prani_parent'));

// document.getElementById("tuzka").addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("click")
// })