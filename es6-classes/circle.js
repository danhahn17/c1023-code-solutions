/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius * radius, 2 * Math.PI * radius);
    this.radius = radius;
  }

  describe() {
    return super.describe() + ` The radius of the cricle is ${this.radius}.`;
  }
}

const circleInstance = new Circle(4);
console.log(circleInstance.describe());
