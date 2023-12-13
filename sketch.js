var user_layer = 0
var cell_sizes

var framerate = 15

var current_color_pallete

var color_palletes

function setup() {
    frameRate(framerate)
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.addClass("noselect");
    background(30);

    color_palletes = [
        // [color("#"), color("#"), color("#"), color("#"), color("#")]
        [color("#B9F3E4"), color("#EA8FEA"), color("#FFAACF"), color("#0A0A0A")],
        [color("#DEE5E5"), color("#BCDAD5"), color("#9ED5C5"), color("#8EC3B0")],
        [color("#DDDDDD"), color("#222831"), color("#30475E"), color("#FC502D")],
        [color("#EEF0E5"), color("#B6C4B6"), color("#304D30"), color("#163020")],
        [color("#F6F1EE"), color("#4F4A45"), color("#6C5F5B"), color("#ED7D31")],
        [color("#FFF5E0"), color("#FF6969"), color("#C70039"), color("#141E46")],
        [color("#93B1A6"), color("#5C8374"), color("#183D3D"), color("#040D12")]
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

function change_layer(index) {
    if (index >= 0 && index <= cell_sizes.length) {
        user_layer = index
    }
}

let prevMouseX, prevMouseY, mouseSpeed;
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

function change_colors() {
    var prev_color_pallete = current_color_pallete;
    while (prev_color_pallete == current_color_pallete) {
        current_color_pallete = color_palletes[floor(random(color_palletes.length))];
    }
    drawingContext.filter = "none";
    background(current_color_pallete[0]);
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

window.onresize = function () { location.reload(); }

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}