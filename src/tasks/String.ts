//STEP 1
const handlerStep1 = () => {
    let name : string | null = prompt('Enter you Name')
    if (name !== null) { alert(`Your name is ${name.length} long`)}
}
//STEP 2
const handlerStep2 = () => {
    let name : string | null = prompt('Enter you Name')
    let orderNumber  = parseInt(prompt('Enter number of letter you want to find')!)
    if (name !== null) {
        if (orderNumber < name.length) {
            alert(`The letter is  ${name[orderNumber - 1]} long`)} else {
            alert(`Your name is ${name.length} character long, the letter is out of the range. `)
        }
        }
}
//STEP 3
const handlerStep3 = () => {
    let name : string  = prompt('Enter you Name')!
    let surname : string  = prompt('Enter you Name')!
    let fullname = name.concat(' ', surname)
    alert(`Your name is ${fullname}`)
}
//STEP 4
const handlerStep4 = () => {
    let sentence = prompt('enter you sentence or leave default', 'The quick brown fox jumps over the lazy dog')!
    let array = sentence.split(' ')
    let searchWord= prompt('enter the word to find it index or leave default', 'fox')!
    let index = array.indexOf(searchWord)
    alert(index)

}
//STEP 5
const handlerStep5 = () => {
    let sentence = prompt('enter you sentence or leave default', 'The quick brown fox jumps over the lazy fox')!
    let array = sentence.split(' ')
    let searchWord= prompt('enter the word to find it index or leave default', 'fox')!
    let wordIndex: number | undefined;
    array.forEach( (item, index) => {
        if (item === searchWord) {
            wordIndex = index
        }
    })

    if (wordIndex !== undefined) {
        alert(`last index of ${searchWord} in the sentence is ${wordIndex}`)
    }

}

//STEP 6
const handlerStep6 = () => {
    let sentence : string = prompt('enter you sentence or leave default', 'The quick brown fox jumped over the lazy dog')!
    let searchWord : string = prompt('enter your name or leave default', 'monkey')!
    if (sentence !== 'The quick brown fox jumped over the lazy dog') {
        let replacement : string = prompt('what you want to replace in the entered sentence?')!
        sentence.replace(replacement, searchWord)
    } else {
        alert(sentence.replace('the lazy dog', searchWord))
    }

}

//STEP 7

const handlerStep7 = () => {
    let sentence : string = prompt('enter you sentence or leave default', 'The quick brown fox jumps over the lazy dog')!
    let searchWord : string = prompt('enter the word to find it index or leave default', 'fox')!
    alert(sentence.search(searchWord))

}
//STEP 8
const handlerStep8 = () => {
    let old_string : string = "The quick brown fox jumps over the lazy dog"
    let new_string : string = old_string.slice()
    alert(new_string.slice(-12))
}


//STEP 9
const handlerStep9 = () => {
    let sentence : string = prompt('enter you sentence or leave default', '           THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ')!
    alert(sentence.toLowerCase().trim())

}
//STEP 10
const handlerStep10 = () => {
    let old_string : string = "The quick brown fox jumps over the lazy dog"
    alert(old_string.toUpperCase())
}



export const List = [{id: 1, text: 'Create an application that prompts the user for their name. Then, find the ' +
        'length of characters in the person’s name.  Use the alert method to ' +
        'display the result.', complete: false,  active: false, handler: handlerStep1 },
    {id: 2, text: 'Create an application that prompts the user for their name. Then, prompt the user for ' +
            'a numeric value so that they can find the letter in the string based on the number they specify.' +
            ' Use the alert method to display the result.', complete: false,  active: false, handler: handlerStep2},
    {id: 3, text: 'Create an application that prompts the user for their first name. Then, prompt the user for ' +
            'their last name using a second prompt. Use the alert method to display the text "Your name is: "' +
            ' along with the result of the first name and last name concatenated together. You will use a concatenation ' +
            'operator to concatenate the literal string with the result ' +
            'of the String object method’s result', complete: false,  active: false, handler: handlerStep3},
    {id: 4, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy dog” ' +
            'within a variable. Then, find and display within an alert' +
            ' the index of the word “fox”.', complete: false,  active: false, handler: handlerStep4} ,
    {id: 5, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy fox” ' +
            'within a variable. Then, find and display within an alert the index ' +
            'of the last instance of the word “fox”.', complete: false,  active: false, handler: handlerStep5},
    {id: 6, text: 'Create an application that stores the text “The quick brown fox jumped over the lazy dog” ' +
            'within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy' +
            ' dog” in the variable with the name that the user enters within the prompt. Use the alert method ' +
            'to display the result.', complete: false,  active: false, handler: handlerStep6},
    {id: 7, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy dog” ' +
            'within a variable. Then, prompt the user for a word. Next, search for the word within the string ' +
            'that the user enters into the prompt. Use the ' +
            'alert method to display the result.',complete: false,   active: false, handler: handlerStep7},
    {id: 8, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy dog” ' +
            'within a variable called old_string. Then, use slice(), substr(), or substring() to extract the ' +
            'words “the lazy dog” from the old_string variable and store that result in a second variable' +
            ' called new_string. Use the alert method to display' +
            ' the uppercase result of new_string.', complete: false,  active: false, handler: handlerStep8},
    {id: 9, text: 'Create an application that stores the text “            ' +
            'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” ' +
            'within a variable. Make sure to add space before and after the text so that appears very similar' +
            ' to the text here. Use the alert method to display the lowercase result of the variable once the' +
            ' space has been trimmed off.', complete: false,  active: false, handler: handlerStep9},
    {id: 10, text: 'Create an application that stores the text “the quick brown fox jumps over the lazy dog”' +
            ' within a variable. The user clearly forgot to capitalize the first letter in the sentence. ' +
            'Programmatically capitalize the first letter in the sentence' +
            ' and display the result in an alert.', complete: false,  active: false, handler: handlerStep10},
]



