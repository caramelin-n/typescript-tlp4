interface Shape {
    area(): number;
}

class Rectangle implements Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    setWidth(width: number): void {
        this.width = width;
    }

    setHeight(height: number): void {
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

class Square implements Shape {
    private side: number;

    constructor(side: number) {
        this.side = side;
    }

    area(): number {
        return this.side * this.side;
    }
}

function resizeRectangle(
    rectangle: Rectangle,
    width: number,
    height: number
): void {
    rectangle.setWidth(width);
    rectangle.setHeight(height);
}

function printArea(shape: Shape): void {
    console.log(`Área: ${shape.area()}`);
}

const rectangle = new Rectangle(5, 4);
printArea(rectangle);

resizeRectangle(rectangle, 10, 5);
printArea(rectangle);

const square = new Square(5);
printArea(square);
