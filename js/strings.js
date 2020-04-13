//STEP 1
var handlerStep1 = function () {
    var name = prompt('Enter you Name');
    if (name !== null) {
        alert("Your name is " + name.length + " long");
    }
};
//STEP 2
var handlerStep2 = function () {
    var name = prompt('Enter you Name');
    var orderNumber = parseInt(prompt('Enter number of letter you want to find'));
    if (name !== null) {
        if (orderNumber < name.length) {
            alert("The letter is  " + name[orderNumber - 1] + " long");
        }
    }
};
//STEP 3
//STEP 4
//STEP 5
//STEP 6
//STEP 7
//STEP 8
//STEP 9
//STEP 10
export var assignmentStrings = [{ id: 1, text: 'Create an application that prompts the user for their name. Then, find the ' +
            'length of characters in the person’s name.  Use the alert method to ' +
            'display the result.', complete: false, active: false, handler: handlerStep1 },
    { id: 2, text: 'Create an application that prompts the user for their name. Then, prompt the user for ' +
            'a numeric value so that they can find the letter in the string based on the number they specify.' +
            ' Use the alert method to display the result.', complete: false, active: false, handler: handlerStep2 },
    { id: 3, text: 'Create an application that prompts the user for their first name. Then, prompt the user for ' +
            'their last name using a second prompt. Use the alert method to display the text "Your name is: "' +
            ' along with the result of the first name and last name concatenated together. You will use a concatenation ' +
            'operator to concatenate the literal string with the result ' +
            'of the String object method’s result', complete: false, active: false, handler: function () { } },
    { id: 4, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy dog” ' +
            'within a variable. Then, find and display within an alert' +
            ' the index of the word “fox”.', complete: false, active: false, handler: function () { } },
    { id: 5, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy fox” ' +
            'within a variable. Then, find and display within an alert the index ' +
            'of the last instance of the word “fox”.', complete: false, active: false, handler: function () { } },
    { id: 6, text: 'Create an application that stores the text “The quick brown fox jumped over the lazy dog” ' +
            'within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy' +
            ' dog” in the variable with the name that the user enters within the prompt. Use the alert method ' +
            'to display the result.', complete: false, active: false, handler: function () { } },
    { id: 7, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy dog” ' +
            'within a variable. Then, prompt the user for a word. Next, search for the word within the string ' +
            'that the user enters into the prompt. Use the ' +
            'alert method to display the result.', complete: false, active: false, handler: function () { } },
    { id: 8, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy dog” ' +
            'within a variable called old_string. Then, use slice(), substr(), or substring() to extract the ' +
            'words “the lazy dog” from the old_string variable and store that result in a second variable' +
            ' called new_string. Use the alert method to display' +
            ' the uppercase result of new_string.', complete: false, active: false, handler: function () { } },
    { id: 9, text: 'Create an application that stores the text “            ' +
            'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” ' +
            'within a variable. Make sure to add space before and after the text so that appears very similar' +
            ' to the text here. Use the alert method to display the lowercase result of the variable once the' +
            ' space has been trimmed off.', complete: false, active: false, handler: function () { } },
    { id: 10, text: 'Create an application that stores the text “the quick brown fox jumps over the lazy dog”' +
            ' within a variable. The user clearly forgot to capitalize the first letter in the sentence. ' +
            'Programmatically capitalize the first letter in the sentence' +
            ' and display the result in an alert.', complete: false, active: false, handler: function () { } },
];
var Tasks = /** @class */ (function () {
    function Tasks(taskList) {
        this.list = taskList;
    }
    return Tasks;
}());
export { Tasks };
