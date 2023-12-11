

var state_count = 5;
class Cell {

    constructor(x, y, cs) {
        this.pos = createVector(x, y);
        this.state = 0;
        this.c = color(random(255), random(255), random(255))
        this.cell_size = cs
        this.colorPalettes = [
                            [color("#B9F3E4"), color("#EA8FEA"), color("#FFAACF"),  color("#FFAACF")],
                            [color("#7071E8"), color("#C683D7"), color("#ED9ED6"), color("FFC7C7")],
                            [color("#F31559"), color("#FF52A2"), color("#FFB07F"), color("FFECAF")],
                            ]

        this.colorPaletteNum = 2

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
        if (r > .3) {
            this.c = color(255, 250, 250);
            // break;
        } else if (r > .2) {
            this.c = this.colorPalettes[this.colorPaletteNum][Math.round(random(2))+1]
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