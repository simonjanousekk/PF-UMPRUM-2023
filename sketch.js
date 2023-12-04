// var cell_size = 50;
// var cols, rows;
var grid1, grid2;

var user_layer = 0
var layer_count = 4

var grids

function setup() {
    frameRate(20)
    // noSmooth()
    createCanvas(windowWidth, windowHeight);
    background(20);
    grids = [
        grid0 = new Cell_Layer(200),
        grid1 = new Cell_Layer(100),
        grid2 = new Cell_Layer(50),
        grid3 = new Cell_Layer(25)
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
    console.log("cols, rows", tmp_cols, tmp_rows)
    if (
        tmp.x > 0 && tmp.x < tmp_cols &&
        tmp.y > 0 && tmp.y < tmp_rows
    ) {
        grids[user_layer].grid[tmp.x][tmp.y].change_state();
    }

    for (var x = 0; x < grids.length; x++) {
        grids[x].update_display();
    }
}

function create_grid(cols, rows, cs) {
    console.log("grid created")
    g = []
    for (var x = 0; x < rows; x++) {
        g[x] = [];
        for (var y = 0; y < cols; y++) {
            g[x][y] = new Cell(x * cs, y * cs, cs)
        }
    }
    console.log(g)
    return g;
}


class Cell_Layer {

    constructor(cs) {
        this.cell_size = cs;
        this.cols = floor(windowWidth / this.cell_size);
        this.rows = floor(windowHeight / this.cell_size);
        this.grid = create_grid(this.cols, this.rows, this.cell_size);

    }

    update_display() {
        for (var x = 0; x < this.rows; x++) {
            for (var y = 0; y < this.cols; y++) {
                this.grid[x][y].display();
            }
        }
    }
}

function change_layer() {
    user_layer += 1
    if (user_layer >= layer_count) {
        user_layer = 0
    }
    console.log(user_layer)
}

function keyPressed() {
    if (key == ' ') {
        change_layer()
    }
}