/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super(width * width, width * 4);
    this.width = width;
  }

  describe() {
    return super.describe() + ` The width of the square is ${this.width}.`;
  }
}

const squareInstance = new Square(7);
console.log(squareInstance.describe());
