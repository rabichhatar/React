// Define a class point with x and y data members
class Point { // class name should be in Pascal case

    constructor(x,y) { // special function for constructor
        this.x = x;
        this.y = y;
    }

    display(){
        console.log("Point x: ",this.x," y: ",this.y);
    }
}

export default Point;

// Define a class Point3D using inhertance
export class Point3D extends Point {
    constructor(x,y,z){
        super(x,y)      // super() for parent constructor
        this.z = z;
    }

    display(){
        super.display();
        console.log("z: ",this.z);
    }    
}
