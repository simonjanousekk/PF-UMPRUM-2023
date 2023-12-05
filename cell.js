var state_count = 5;
class Cell {
    constructor(x, y, cs) {
        this.pos = createVector(x, y);
        this.state = 0;
        this.c = color(random(255), random(255), random(255))
        this.cell_size = cs
    }

    change_state() {
        this.state = floor(random(1, state_count))
        var r = random()
        if (r > .3) {
            this.c = color(255, 250, 250);
            // break;
        } else if (r > .2) {
            this.c = 30;
        } else {
            this.c = color(random(255), random(255), random(255))
        }
    }

    display() {
        noStroke();
        fill(this.c);
        switch (this.state) {
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
                    this.pos.x + this.cell_size/2,
                    this.pos.y + this.cell_size
                )
                break;
        }
        // fill(200, 100)
        // noStroke()
        // noFill()
        // stroke(255, 1)
        // rect(
        //     this.pos.x,
        //     this.pos.y,
        //     this.cell_size,
        //     this.cell_size
        // )

    }
}