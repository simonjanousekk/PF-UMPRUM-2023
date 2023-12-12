

var state_count = 5;
class Cell {

    constructor(x, y, cs) {
        this.pos = createVector(x, y);
        this.state = 0;
        this.cell_size = cs

        this.colorPaletteNum = 3;
        this.colorPalettes = [
                            [color("#B9F3E4"), color("#EA8FEA"), color("#FFAACF"),  color(10)],
                            [color(222, 245, 229), color(188, 234, 213), color(158, 213, 197), color(142, 195, 176)],
                            [color(25, 24, 37), color(134, 93, 255), color(227, 132, 255), color(255, 163, 253)],
                            [color(6, 40, 61), color(19, 99, 223), color(71, 181, 255), color(223, 246, 255)],
                            [color("#DDDDDD"), color("#222831"), color("#30475E"), color(252, 80, 45)],
                            ]
        this.c = this.colorPalettes[0] 
    }

    backGroundColor(){
        return this.colorPalettes[this.colorPaletteNum][0]
    }

    num_of_color_palettes(){
        return this.colorPalettes.length
    }

    change_color_palette(int) {
        this.colorPaletteNum = int;
    }

    change_state() {
        this.state = floor(random(1, state_count))
        var r = random()
        if (r > .2) {
            this.c = this.colorPalettes[this.colorPaletteNum][3]

            // break;
        } else if (r > .2) {
            this.c = this.colorPalettes[this.colorPaletteNum][0];

        } else {
           this.c = this.colorPalettes[this.colorPaletteNum][Math.round(random(2))+1]
            //this.c = color(255, 105, 105, 90);
        }
        
        r = random()
        drawingContext.filter = 'blur('+ random(10) + 'px)';
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
                    this.pos.x + this.cell_size / 2,
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