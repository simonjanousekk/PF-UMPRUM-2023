var user_layer = 0
var cell_sizes

var framerate = 24

var current_color_pallete

var color_palletes

function setup() {
    frameRate(framerate)
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.addClass("noselect");
    background(30);

    color_palletes = [
        [color(185, 243, 228), color(234, 143, 234), color(255, 170, 207), color(10, 10, 10)],
        [color(222, 245, 229), color(188, 234, 213), color(158, 213, 197), color(142, 195, 176)],
        [color(223, 244, 243), color(221, 231, 242), color(185, 187, 223), color(135, 142, 205)],
        [color(221, 221, 221), color(34, 40, 49), color(48, 71, 94), color(252, 80, 45)],
        [color(241, 243, 248), color(214, 224, 240), color(141, 147, 171), color(57, 59, 68)],
        [color(166, 242, 219), color(123, 202, 206), color(103, 142, 180), color(79, 78, 121)],
        [color(235, 247, 253), color(165, 222, 241), color(54, 80, 108), color(35, 49, 66)],
        [color(137, 138, 166), color(201, 187, 207), color(183, 211, 223), color(214, 239, 237)],
        [color(255, 241, 193), color(247, 98, 98), color(33, 101, 131), color(41, 52, 98)],
        [color(49, 107, 131), color(109, 130, 153), color(140, 161, 165), color(213, 191, 191)],
        [color(246, 70, 98), color(198, 25, 81), color(116, 25, 56), color(86, 19, 42)],
    ]

    var longer_side = width > height ? width : height;
    var largest_cell_size = round(longer_side / 15);
    cell_sizes = [
        largest_cell_size,
        largest_cell_size / 2,
        largest_cell_size / 4,
        largest_cell_size / 8
    ]

    prevMouseX = mouseX;
    prevMouseY = mouseY;

    change_colors()
}

function draw() {

    if (!mouseIsPressed === true) {
        var mouse_speed = calculate_mouse_speed()
        index_mouse_speed = floor(map_constrain(mouse_speed, 150, 20, 0, cell_sizes.length - 1));

        change_layer(index_mouse_speed);

        var current_cell_size = cell_sizes[index_mouse_speed];
        var tmp = createVector(
            floor(mouseX / current_cell_size),
            floor(mouseY / current_cell_size)
        );
        draw_shape(tmp.x, tmp.y, current_cell_size)

    }
}

// change layer that user is in (eg. what resolution grid are you drawing in)
function change_layer_random() {
    user_layer += 1
    if (user_layer >= cell_sizes.length) {
        user_layer = 0
    }
}

function change_layer(index) {
    if (index >= 0 && index <= cell_sizes.length) {
        user_layer = index
    }
}

let prevMouseX;
let prevMouseY;
let mouseSpeed;
function calculate_mouse_speed() {
    let deltaX = mouseX - prevMouseX;
    let deltaY = mouseY - prevMouseY;
    prevMouseX = mouseX;
    prevMouseY = mouseY;
    return dist(deltaX, deltaY, 0, 0);
}


function map_constrain(value, start1, stop1, start2, stop2) {
    let mappedValue = map(value, start1, stop1, start2, stop2);
    let constrainedValue = constrain(mappedValue, start2, stop2);
    return constrainedValue;
}


function draw_shape(i_x, i_y, cell_size) {
    this.cell_size = cell_size;
    this.pos = createVector(i_x * cell_size, i_y * cell_size)

    var c = current_color_pallete[floor(random(1, current_color_pallete.length))]

    var r = random(-1, 8);
    r = clamp(r, 0, 8);
    drawingContext.filter = 'blur(' + r + 'px)';


    noStroke();
    fill(c);
    switch (floor(random(5))) {
        case 0:
            break;
        case 1:
            rect(
                this.pos.x,
                this.pos.y,
                this.cell_size,
                this.cell_size
            );
            break;
        case 2:
            circle(
                this.pos.x + this.cell_size / 2,
                this.pos.y + this.cell_size / 2,
                this.cell_size)
            break;
        case 3:
            triangle(
                this.pos.x + this.cell_size / 2,
                this.pos.y,
                this.pos.x,
                this.pos.y + this.cell_size,
                this.pos.x + this.cell_size,
                this.pos.y + this.cell_size
            )
            break;
        case 4:
            triangle(
                this.pos.x,
                this.pos.y,
                this.pos.x + this.cell_size,
                this.pos.y,
                this.pos.x + this.cell_size / 2,
                this.pos.y + this.cell_size
            )
            break;
    }
}

function change_colors() {
    current_color_pallete = color_palletes[floor(random(color_palletes.length))]
    drawingContext.filter = "none";
    background(current_color_pallete[0])
}


// screenshot function
function capture_screenshot() {

    document.getElementsByClassName("download")[0].style.visibility = "hidden"
    document.getElementsByClassName("newcolors")[0].style.visibility = "hidden"
    document.getElementById("prani_handle").style.display = "none"

    html2canvas(document.body).then(canvas => {
        const imageData = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.style.display = "none";
        downloadLink.href = imageData;
        downloadLink.download = 'umprum_pf_2024.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });

    document.getElementById("prani_handle").style.display = "block"
    document.getElementsByClassName("download")[0].style.visibility = "visible"
    document.getElementsByClassName("newcolors")[0].style.visibility = "visible"
}

document.getElementById('prani').addEventListener('keypress', (evt) => {
    if (evt.which === 13) {
        evt.preventDefault();
    }
});


function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}