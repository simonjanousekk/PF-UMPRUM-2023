// var cell_size = 50;
// var cols, rows;
var grid1, grid2;

var user_layer = 0
var layer_count = 4
var cell_sizes

var framerate = 24
var layer_change_speed = 5

var grids

var numOfColorPaletts;
var colorPaletteNum = 2;

function setup() {
    frameRate(framerate)
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.addClass("noselect");

    // Background Color
    //background(20, 30, 70);


    var longer_side = width > height ? width : height;
    var largest_cell_size = round(longer_side / 20);
    cell_sizes = [
        //largest_cell_size * 2,
        largest_cell_size,
        largest_cell_size / 2,
        largest_cell_size / 4,
        largest_cell_size / 8,

    ]

    grids = [
        grid0 = new Cell_Layer(cell_sizes[0]),
        grid1 = new Cell_Layer(cell_sizes[1]),
        grid2 = new Cell_Layer(cell_sizes[2]),
        grid3 = new Cell_Layer(cell_sizes[3]),
        grid3 = new Cell_Layer(cell_sizes[3])

    ]

    console.log(grids)

    numOfColorPaletts = grids[0].grid[0][0].num_of_color_palettes();
    background(grids[0].grid[0][0].backGroundColor());

    prevMouseX = mouseX;
    prevMouseY = mouseY;
}

function draw() {

    if (!mouseIsPressed === true) {
        var mouse_speed = calculate_mouse_speed()
        index_mouse_speed = floor(map_constrain(mouse_speed, 150, 20, 0, layer_count - 1));

        change_layer(index_mouse_speed);

        var current_cell_size = grids[user_layer].cell_size
        var tmp = createVector(
            floor(mouseX / current_cell_size),
            floor(mouseY / current_cell_size)
        );

        var tmp_cols = grids[user_layer].cols;
        var tmp_rows = grids[user_layer].rows;

        if (
            tmp.x >= 0 && tmp.x < tmp_cols &&
            tmp.y >= 0 && tmp.y < tmp_rows
        ) {
            grids[user_layer].grid[tmp.x][tmp.y].change_color_palette(colorPaletteNum);
            grids[user_layer].grid[tmp.x][tmp.y].change_state();
            grids[user_layer].grid[tmp.x][tmp.y].display();
        }
    }
}

function create_grid(cols, rows, cs) {
    g = []
    for (var x = 0; x < cols; x++) {
        g[x] = [];
        for (var y = 0; y < rows; y++) {
            g[x][y] = new Cell(x * cs, y * cs, cs)
        }
    }
    return g;
}

// grid class
class Cell_Layer {
    constructor(cs) {
        this.cell_size = cs;
        this.cols = round(windowWidth / this.cell_size);
        this.rows = round(windowHeight / this.cell_size);
        this.grid = create_grid(this.cols, this.rows, this.cell_size);
    }

    update_display() {
        for (var x = 0; x < this.cols; x++) {
            for (var y = 0; y < this.rows; y++) {
                this.grid[x][y].display();
            }
        }
    }
}

// change layer that user is in (eg. what resolution grid are you drawing in)
function change_layer_random() {
    user_layer += 1
    if (user_layer >= layer_count) {
        user_layer = 0
    }
}

function change_layer(index) {
    if (index >= 0 && index <= layer_count) {
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


// testing with keyboard
function keyPressed() {
    if (key == ' ') {
        change_layer_random();
    } else if (key == 's') {
        capture_screenshot();
    }
}


// screenshot function
function capture_screenshot() {
    html2canvas(document.body).then(canvas => {
        document.getElementById("download").style.display = "none";

        const imageData = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.style.display = "none";
        downloadLink.href = imageData;
        downloadLink.download = 'umprum_pf_2024.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
}


function change_colors() {
    if (colorPaletteNum == numOfColorPaletts-1) {
        colorPaletteNum = 0;
    } else {
        colorPaletteNum++;
    }
    grids[0].grid[0][0].  change_color_palette(colorPaletteNum);
    background(grids[0].grid[0][0].backGroundColor(colorPaletteNum));
}




function map_constrain(value, start1, stop1, start2, stop2) {
    let mappedValue = map(value, start1, stop1, start2, stop2);
    let constrainedValue = constrain(mappedValue, start2, stop2);
    return constrainedValue;
}

