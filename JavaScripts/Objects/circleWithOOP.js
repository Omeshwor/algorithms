//  Make a Circle with OOP

// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) which give both respective areas and perimeter (circumference).

// For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.
// Examples
class Circle {
  constructor(radius){
    this.radius = radius;
  }
  getArea(){
    return (Math.PI)*Math.pow(this.radius, 2)
  }
  getPerimeter(){
    return (Math.PI)*(this.radius)*2
  }

}
// let circy = new Circle(11);
// console.log(circy.getArea());

// Should return 380.132711084365

let circy = new Circle(4.44);
console.log(circy.getPerimeter());

// // Should return 27.897342763877365
class Rectangle {
  constructor(sideA,sideB){
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea(){return this.sideA*this.sideB};
  getPerimeter(){return (this.sideA + this.sideB) *2 };
}

