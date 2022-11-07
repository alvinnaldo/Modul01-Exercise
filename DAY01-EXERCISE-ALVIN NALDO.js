// area of rectangle
let panjang = 5;
let lebar = 4;

let areaofrect = panjang * lebar;
console.log("Area of rectangle : " + areaofrect);

// perimeter of rectangle
let perimeterofrect = 2 * panjang + 2 * lebar;
console.log("Perimeter of rectangle : " + perimeterofrect);

// diameter,circumference, and area of circle;
let radius = 5;

let diameter = 2 * radius;
console.log("Diameter of circle : " + diameter);

let circumference = diameter * Math.PI;
console.log("Circumference of circle : " + circumference);

let areaofcirc = Math.PI * Math.pow(radius, 2);
console.log("Area of circle : " + areaofcirc);

// angle of triangle
let angle1 = 60;
let angle2 = 20;

let angle = 180 - angle1 - angle2;
if (angle1 + angle2 >= 180) {
  console.log("This is not a triangle");
} else {
  console.log("The other angle : " + angle);
}

// days convert
let days = 777;

let year = Math.floor(days / 365);
let dayLeft = days % 365;
let month = Math.floor(dayLeft / 30);
dayLeft %= 30;
console.log(`${days} days --> ${year} year, ${month} month, ${dayLeft} days`);
