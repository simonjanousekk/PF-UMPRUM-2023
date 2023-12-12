var user_layer = 0
var cell_sizes

var framerate = 15

var current_color_pallete

function setup() {
    frameRate(framerate)
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.addClass("noselect");
    background(30);

    var longer_side = width > height ? width : height;
    var largest_cell_size = round(longer_side / 20);
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

    var r = random();
    if (r > .3) {
        this.c = color(255, 250, 250);
        // break;
    } else if (r > .2) {
        this.c = 30;
    } else {
        this.c = color(random(255), random(255), random(255))
    }

    noStroke();
    fill(this.c);
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
    current_color_pallete = color_palletes[floor(random(color_palletes.length - 1))]
    background
}

var color_palletes = [
    [color(30),]
]




// screenshot function
function capture_screenshot() {

    document.getElementById("download").style.visibility = "hidden"
    document.getElementById("tuzka").style.visibility = "hidden"

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

    document.getElementById("download").style.visibility = "visible"
    document.getElementById("tuzka").style.visibility = "visible"
}