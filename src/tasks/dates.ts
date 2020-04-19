const handlerStep1 = () => {
    let mth : number = parseInt(prompt('Step 1 - name a month 1 - 12','6')!)
    let getDaysInMonth = function(month,year) {
        if (mth == 2){
            return ('28 days in Feb but every 4 years this month has 29 days');
        } else {
            return new Date(year, mth, 0).getDate();
        }
    };
    console.log(getDaysInMonth(1, 1975));

    let anno = parseInt(prompt("Step 1(another way) - Enter a year ", "1998")!);
    let mesi = ['gen', 'feb', 'mar', 'apr', 'mai', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'];
    let giorni;

    for (let i = 0; i < 12; i++) {
        giorni = new Date(anno, i + 1, 0).getDate();
        console.log("In the year, " + anno + ", there are " + giorni + " days in " + mesi[i])
    }
}

const handlerStep2 = () => {

    let dateInput = prompt('Step 2 - enter a date');
    let date = new Date (dateInput!);

    console.log(date);
    console.log("Step 2 " + 'Month name:', date.toLocaleString('it-IT', {month: 'long'}));
}
const handlerStep3 = () => {

    let isDate = prompt('Step 3 - enter a date');
    let weekend =  function(isDate){
        let data = new Date(isDate);

        if(data.getDay() == 6 || data.getDay() == 0)
        {
            return "weekend";
        } else {
            return "weekday";
        }
    };

    console.log("Step 3 " + isDate + " is a " + weekend(isDate));
}

const handlerStep4 = () => {

    let ieri =  function(){
        let dataIeri = new Date();
        dataIeri.setDate(dataIeri.getDate()-1);
        return dataIeri.toLocaleString("default", { weekday : "long"});
    };

    console.log("Step 4 - yesterday's day of the week was " + ieri());
}
const handlerStep5 = () => {
    var dateObj = new Date();
    var weekday = dateObj.toLocaleString("default", { weekday: "long" });
    console.log(weekday);
    let first = weekday.slice(0,1);
    console.log("Step 5: " + first);

    const dotw = new Date();
    let userDate = prompt("Step 5(another way) enter a date", dotw.toString())!;
    let dayofweek = new Date(userDate);
    console.log("Step 5: " + dayofweek.toLocaleString('default', { weekday: 'narrow' }));
}

export const List = [{id: 1, text: '1.	Create an application that gets the number of days in a month. ' +
        'Display that result within the console window.', complete: false,  active: false, handler: handlerStep1 },
    {id: 2, text: '2.	Create an application that gets the month name from a particular date. ' +
            'Display that result within the console window', complete: false,  active: false, handler: handlerStep2},
    {id: 3, text: '3.	Create an application that tests whether a date is a weekend. ' +
            'Display that result within the console window', complete: false,  active: false, handler: handlerStep3},
    {id: 4, text: '4.	Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday,' +
            ' the console window should display Monday', complete: false,  active: false, handler: handlerStep4} ,
    {id: 5, text: '5.	Create an application that gets the current day of the week. The twist here is that I want only ' +
            'the first letter of the day. If today is Tuesday, the letter T should be ' +
            'displayed in the console window ', complete: false,  active: false, handler: handlerStep5}

]