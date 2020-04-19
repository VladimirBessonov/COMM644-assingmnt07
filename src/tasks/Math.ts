const handlerStep1 = () => {
    let myNumber: number = parseInt(prompt('Step 1 - enter a positive or negative number', '10')!);
    console.log("Step 1: " + Math.abs(myNumber));
}

const handlerStep2 = () => {
    let myNumber: number = parseFloat(prompt('Step 2 - enter number with a decimal', '10.5')!);
    console.log("Step 2: " + Math.ceil(myNumber));
}
const handlerStep3 = () => {
    let myNumber: number = parseFloat(prompt('Step 3 - enter another number with a decimal', '20.5')!);
    console.log("Step 3: " + Math.floor(myNumber));
}

const handlerStep4 = () => {
    let myNumber: string = prompt('Step 4 - enter five numbers separated by comma (1,2,3)', '1,2,3,4,5')!;
    let myNubmerSplit  = myNumber.split(",")
    let arr = myNubmerSplit.map( item => parseFloat(item))
    console.log("Step 4 - " + "largest number: " + Math.max.apply(null, arr) + " smallest number: " + Math.min.apply(null, arr));

}
const handlerStep5 = () => {
    let myNumber: number = parseFloat(prompt('Step 6 - enter another number with a decimal', '16')!);
    console.log("Step 5: " + Math.sqrt(myNumber));
}

export const List = [{id: 1, text: '1.	Create an application that prompts the user for a number. Regardless of whether ' +
        'they enter a negative or positive number, make sure to display the positive version of that number in the console ' +
        'window. If I enter -15 in the prompt and -15 is displayed in the console window, ' +
        'you did this one wrong.', complete: false,  active: false, handler: handlerStep1 },
             {id: 2, text: '2.	Create an application that prompts the user for a floating point value (decimal). Store the ' +
            'result of that input in a variable and then round it up to the nearest whole number. Display the result ' +
            'within a console window.', complete: false,  active: false, handler: handlerStep2},
    {id: 3, text: '3.	Create an application that prompts the user for a floating point value (decimal). Store the ' +
            'result of that input in a variable and then round it down to the nearest whole number. Display the result' +
            ' within a console window.', complete: false,  active: false, handler: handlerStep3},
    {id: 4, text: '4.	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number' +
            ' so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest ' +
            'and smallest numbers in that list. Display both of those numbers ' +
            'within a console window.', complete: false,  active: false, handler: handlerStep4} ,
    {id: 5, text: '5.	Create an application that prompts the user for a number. Now find the square root of that number' +
            ' and display the result within a console window. ', complete: false,  active: false, handler: handlerStep5}

]