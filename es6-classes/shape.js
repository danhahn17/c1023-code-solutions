/* exported Shape */

class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `The area is ${this.area} and the perimeter is ${this.perimeter}.`;
  }
}

const shapeInstance = new Shape(25, 20);
console.log(shapeInstance.describe());
