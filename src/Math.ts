const handlerStep1 = () => {
    let myNumber: number = parseInt(prompt('Step 1 - enter a positive or negative number', '10')!);
    console.log("Step 1: " + Math.abs(myNumber));
}
//STEP 2 DONE
// Create an application that prompts the user for a floating point value (decimal).
// Store the result of that input in a variable and then round it up to the nearest whole number.
// // Display the result within a console window.
//
// let decimal = prompt('Step 2 - enter number with a decimal');
// console.log("Step 2: " + Math.ceil(decimal));
//
// //STEP 3 DONE
// // Create an application that prompts the user for a floating point value (decimal).
// // Store the result of that input in a variable and then round it down to the nearest whole number.
// // Display the result within a console window.
//
// let point = prompt("Step 3 - enter another number with a decimal");
// console.log("Step 3: " + Math.floor(point));
//
// //STEP 4 DONE
// // Create an application that prompts the user for 5 numbers.
// // Ask them to comma delimit each number so you get 1,2,3,4,5 for example.
// // Store the result of that input in a variable and then find the largest and smallest numbers in that list.
// // Display both of those numbers within a console window.
//
// let five = prompt('Step 4 - enter five numbers separated by comma (1,2,3)');
// let fiveSplit = five.split(",");
// let fiveArray = Array.from(fiveSplit );
// console.log(fiveArray);
// console.log("Step 4 - " + "largest number: " + Math.max.apply(null, fiveArray) + " smallest number: " + Math.min.apply(null, fiveArray));
//
// //STEP 5 DONE
// // Create an application that prompts the user for a number.
// // Now find the square root of that number and display the result within a console window.
//
// let sqroot = prompt('Step 5 - enter a number');
// console.log("Step 5: " + Math.sqrt(sqroot));

export const List = [{id: 1, text: '1.	Create an application that prompts the user for a number. Regardless of whether ' +
        'they enter a negative or positive number, make sure to display the positive version of that number in the console ' +
        'window. If I enter -15 in the prompt and -15 is displayed in the console window, ' +
        'you did this one wrong.', complete: false,  active: false, handler: handlerStep1 },
    // {id: 2, text: '2.	Create an application that prompts the user for a floating point value (decimal). Store the ' +
    //         'result of that input in a variable and then round it up to the nearest whole number. Display the result ' +
    //         'within a console window.', complete: false,  active: false, handler: handlerStep2},
    // {id: 3, text: '3.	Create an application that prompts the user for a floating point value (decimal). Store the ' +
    //         'result of that input in a variable and then round it down to the nearest whole number. Display the result' +
    //         ' within a console window.', complete: false,  active: false, handler: handlerStep3},
    // {id: 4, text: '4.	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number' +
    //         ' so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest ' +
    //         'and smallest numbers in that list. Display both of those numbers ' +
    //         'within a console window.', complete: false,  active: false, handler: handlerStep4} ,
    // {id: 5, text: '5.	Create an application that prompts the user for a number. Now find the square root of that number' +
    //         ' and display the result within a console window. ', complete: false,  active: false, handler: handlerStep5}
]