const handlerStep1 = () => {
    let dogs = "mylifewithdogs";
    let life = Array.from(dogs);
    let sort = life.sort();
    console.log(sort.toString().replace(/,/g, ""));
}

const handlerStep2 = () => {

    let phrase = prompt("Step 2", "enter a phrase");

    function firstCap(phrase) {
        let sent = phrase.toLowerCase().split(' ');//change to lowercase and turn into array
        console.log(sent);
        for (let i = 0; i < sent.length; i++) {//iterates thru sent array
            sent[i] = sent[i].charAt(0).toUpperCase() //gets each item in array, grabs the 1st char, changes it to uppercase and
                + sent[i].substring(1);//gets item in array and adds back in the letters starting at index 1 (because we dont want the first letter again)
        }
        return sent.join(' ');//converts array back to string
    }
    console.log("Step 2 - " + firstCap(phrase));
}
const handlerStep3 = () => {

    let phrase2 = prompt("Step 3", "enter another phrase");
    let vowels = ['a', 'e', 'i', 'o', 'u'];//specify the vowels
    let numVowels = 0;//initialize counter

    function counter(text) {
        for (let letter of text.toLowerCase()) {//loop thru text to see if letter is a vowel

            if( vowels.includes(letter)) {
                numVowels++;//continue going thru array
            }
        }
        return numVowels;//return vowels
    }
    console.log("Step 3" + " - There are " + counter(phrase2) + " vowels in the phrase " + '"' + phrase2 + '"');

//STEP 3 VERSION 2:
    function vcount(ltr) {

        let vowel = 'aeiouAEIOU';
        var count = 0;

        for(let i = 0; i < ltr.length ; i++)
        {
            if (vowel.indexOf(ltr[i]) !== -1)
            {
                count += 1;
            }
        }
        return count;
    }
    console.log("Step 3 version 2" + " - There are " + vcount(phrase2) + " vowels in the phrase " + '"' + phrase2 + '"');
}

const handlerStep4 = () => {

    let random = Math.random().toString(36).substr(2);//substr(2) removes the 0. in math.random()
    console.log("Step 4 - this generates string of 11 characters: " + random);//returns 11

    let random2 = Math.random().toString(36).substring(2, 12);//substring (2, 12) returns 10 length (12-2=10) if want more or less, change 12 to another number...
    console.log("Step 4 again - this generates a string of 10 random characters: " + random2);
}
const handlerStep5 = () => {
    let country = prompt('Step 5 - list some countries(separated by a comma');

    function bigCountry(country) {

        let longestWord = country.split(', ')//split into array by comma
            .sort(function(one, two) { //sorts words longest to shortest
                return two.length - one.length; });//by taking length of one word less another

        return longestWord[0];//then return longest word
    }
    console.log("Step 5 - The longest country name is " + bigCountry(country));
}

export const List = [{id: 1, text: ' TASK 1', complete: false,  active: false, handler: handlerStep1 },
    {id: 2, text: 'TASK 2', complete: false,  active: false, handler: handlerStep2},
    {id: 3, text: 'TASK 3', complete: false,  active: false, handler: handlerStep3},
    {id: 4, text: 'TASK 4', complete: false,  active: false, handler: handlerStep4} ,
    {id: 5, text: 'TASK 5', complete: false,  active: false, handler: handlerStep5}
]