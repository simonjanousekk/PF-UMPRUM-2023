// var cell_size = 50;
// var cols, rows;
var grid1, grid2;

var user_layer = 0
var layer_count = 4
var cell_sizes

var framerate = 15
var layer_change_speed = 5

var grids

// cernej ctverec


function setup() {
    frameRate(framerate)
    createCanvas(windowWidth, windowHeight);
    background(30);

    var longer_side = width > height ? width : height;
    console.log(width, height, longer_side);
    var largest_cell_size = round(longer_side / 30);
    console.log(longer_side, largest_cell_size, largest_cell_size * 20);
    cell_sizes = [
        largest_cell_size,
        largest_cell_size / 2,
        largest_cell_size / 4,
        largest_cell_size / 8
    ]

    grids = [
        grid0 = new Cell_Layer(cell_sizes[0]),
        grid1 = new Cell_Layer(cell_sizes[1]),
        grid2 = new Cell_Layer(cell_sizes[2]),
        grid3 = new Cell_Layer(cell_sizes[3])
    ]
}

function draw() {
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
        grids[user_layer].grid[tmp.x][tmp.y].change_state();
    }

    for (var x = 0; x < grids.length; x++) {
        grids[x].update_display();
    }

    if (frameCount % (framerate * layer_change_speed) == 0) {
        change_layer()
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
        console.log(this.cols, this.rows)
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
function change_layer() {
    user_layer += 1
    if (user_layer >= layer_count) {
        user_layer = 0
    }
    console.log(user_layer)
}


// testing with keyboard
function keyPressed() {
    if (key == ' ') {
        change_layer();
    } else if (key == 's') {
        capture_screenshot();
    }
}


// screenshot function
function capture_screenshot() {
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
}