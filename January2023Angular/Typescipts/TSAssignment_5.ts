
/*Create interface shape with shapename, and a method printname method.
 Now implement the shape interface to class Cone, Sphere, and Rectangle class. 
 Now you have to print the area of each shape using area 
 method input will be pass to constructor of eachclass.?*/

interface Shape {
    shapeName: string;
    printName(): void;
    area(): number;
}

class Cone implements Shape {
    shapeName: string;
    radius: number;
    lengthOfSlant: number;
    constructor(shapeName: string, radius: number, lengthOfSlant: number) {
        this.shapeName = shapeName;
        this.radius = radius;
        this.lengthOfSlant = lengthOfSlant;
    }
    printName(): void {
        console.log(`Shape Name: ${this.shapeName}`);
    }
    area(): number {
        return  Math.PI * this.radius * (this.radius + this.lengthOfSlant);
        
    }
}

class Sphere implements Shape {
    shapeName: string;
    radius: number;
    constructor(shapeName: string, radius: number) {
        this.shapeName = shapeName;
        this.radius = radius;
    }
    printName(): void {
        console.log(`Shape Name: ${this.shapeName}`);
    }
    area(): number {
        return 4 * Math.PI * this.radius * this.radius;
    }
}

class Rectangle implements Shape {
    shapeName: string;
    width: number;
    height: number;
    constructor(shapeName: string, width: number, height: number) {
        this.shapeName = shapeName;
        this.width = width;
        this.height = height;
    }
    printName(): void {
        console.log(`Shape Name: ${this.shapeName}`);
    }
    area(): number {
        return this.width * this.height;
    }
}

//test


let coneObj: Shape = new Cone('Cone',23,20);
console.log("Area of Cone: "+coneObj.area());
let SphereObj: Shape = new Sphere('Sphere',23);
console.log("Area of Sphere: "+SphereObj.area());
let RectanagleObj: Shape = new Cone('Rectanagle',23,20);
console.log("Area of Rectangle: "+RectanagleObj.area());
