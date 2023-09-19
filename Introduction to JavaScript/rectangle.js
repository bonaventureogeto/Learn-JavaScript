/* 
    Area and Perimeter of a Rectangle
    The program should:
    Prompt the user to enter the length and width of the rectangle.
    Calculate the area and perimeter of the rectangle using the length and width entered by the user.
*/

// let length = 40;

// let width = 10;

// let area = length * width;

// let perimeter = (length * 2) + (width * 2);

// console.log(perimeter);
// console.log(area);

function rectangle(length, width) {
    let area = length * width;

    let perimeter = length * 2 + width * 2;

    console.log("The area is ", area)
    console.log("The perimeter is ", perimeter);
}

rectangle(90, 35);

// console.log(area);

// write a function for calculating the area of a triangle