var state_count = 4;
var shape_bor = 0;
class Cell {
    constructor(x, y, cs) {
        this.pos = createVector(x, y);
        this.state = 0;
        this.c = color(random(255), random(255), random(255))
        this.cell_size = cs
    }

    change_state() {
        this.state = floor(random(1, state_count))
        if (random() > .2) {
            this.c = 255;
        } else {
            this.c = color(random(255), random(255), random(255))
        }
        // if (this.state = 0) {
        //     this.state = 1;
        // } else {
        //     this.state = 0;
        // }
    }

    display() {
        noStroke();
        fill(this.c);
        switch (this.state) {
            case 0:
                break;
            case 1:
                rect(
                    this.pos.x + shape_bor,
                    this.pos.y + shape_bor,
                    this.cell_size - shape_bor * 2,
                    this.cell_size - shape_bor * 2
                );
                break;
            case 2:
                circle(
                    this.pos.x + this.cell_size / 2, 
                    this.pos.y + this.cell_size / 2,
                    this.cell_size - shape_bor * 2)
                break;
            case 3:
                triangle(
                    this.pos.x + this.cell_size / 2,
                    this.pos.y + shape_bor,
                    this.pos.x + shape_bor,
                    this.pos.y + this.cell_size - shape_bor,
                    this.pos.x + this.cell_size - shape_bor,
                    this.pos.y + this.cell_size - shape_bor
                )
                break;
        }
        // fill(200, 100)
        // noStroke()
        // rect(
        //     this.pos.x + shape_bor,
        //     this.pos.y + shape_bor,
        //     this.cell_size - shape_bor * 2,
        //     this.cell_size - shape_bor * 2
        // )

    }
}