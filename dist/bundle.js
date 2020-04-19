!function i(r,s,l){function h(e,t){if(!s[e]){if(!r[e]){var o="function"==typeof require&&require;if(!t&&o)return o(e,!0);if(c)return c(e,!0);var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}var n=s[e]={exports:{}};r[e][0].call(n.exports,function(t){return h(r[e][1][t]||t)},n,n.exports,i,r,s,l)}return s[e].exports}for(var c="function"==typeof require&&require,t=0;t<l.length;t++)h(l[t]);return h}({1:[function(t,e,o){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(o,"__esModule",{value:!0});var n=a(t("./mvc/Model")),i=a(t("./mvc/View")),r=a(t("./mvc/Controller"));o.app=new r.default(new n.default,new i.default)},{"./mvc/Controller":2,"./mvc/Model":3,"./mvc/View":4}],2:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});function a(t,e){var o=this;this.onTodoListChanged=function(t,e){o.view.displayTodos(t,e)},this.handleToggleTodo=function(t){o.model.toggleTodo(t)},this.handleDeleteTodo=function(t){o.model.deleteTodo(t)},this.handleRestartTodo=function(){o.model.restartTodos()},this.handleActiveTask=function(t){o.model.selectActiveTask(t)},this.handleActiveTab=function(t){o.model.selectActiveTab(t)},this.handleExecuteTask=function(t){o.model.executeTask(t)},this.model=t,this.view=e,this.model.bindTodoListChanged(this.onTodoListChanged),this.view.bindToggleTodo(this.handleToggleTodo),this.view.bindDeleteTodo(this.handleDeleteTodo),this.view.bindRestartTodo(this.handleRestartTodo),this.view.bindSelectActiveTask(this.handleActiveTask),this.view.bindSelectActiveTab(this.handleActiveTab),this.view.bindExecuteTask(this.handleExecuteTask),this.onTodoListChanged(this.model.activeTab,this.model.todos)}o.default=a},{}],3:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=t("../tasks/String"),n=t("../tasks/Math"),i=t("../tasks/dates"),r=t("../tasks/deathby"),s=t("../util/Task").Singleton.getInstance(),l=[a.List,n.List,i.List,r.List],h=(c.prototype.bindTodoListChanged=function(t){this.onTodoListChanged=t},c.prototype._commit=function(t,e){this.onTodoListChanged(t,e),localStorage.setItem("todos",JSON.stringify(e))},c.prototype.toggleTodo=function(e){this.todos[this.activeTab].todoList=this.todos[this.activeTab].todoList.map(function(t){return t.id===e?{id:t.id,text:t.text,active:t.active,complete:!t.complete,handler:t.handler}:t}),this._commit(this.activeTab,this.todos)},c.prototype.deleteTodo=function(e){this.todos[this.activeTab].todoList=this.todos[this.activeTab].todoList.filter(function(t){return t.id!==e}),console.log(this.todos),this._commit(this.activeTab,this.todos)},c.prototype.restartTodos=function(){console.log("start over"),console.log(this.activeTab,l[this.activeTab],l),s.restartQuiz(this.activeTab,l),console.log(s.list),this.todos=s.list,this._commit(this.activeTab,this.todos)},c.prototype.executeTask=function(t){null!==this.activeTask&&(0,this.todos[this.activeTab].todoList[this.activeTask-1].handler)(t)},c.prototype.selectActiveTask=function(t){this.activeTask=t},c.prototype.selectActiveTab=function(t){this.activeTab=t,this.onTodoListChanged(this.activeTab,this.todos)},c);function c(){s.addList("Strings",a.List),s.addList("Math",n.List),s.addList("Data",i.List),s.addList("Deathby",r.List),this.todos=null!==localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):s.list,this.activeTask=null,this.activeTab=0}o.default=h},{"../tasks/Math":5,"../tasks/String":6,"../tasks/dates":7,"../tasks/deathby":8,"../util/Task":9}],4:[function(t,e,o){"use strict";var n=this&&this.__spreadArrays||function(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;var a=Array(t),n=0;for(e=0;e<o;e++)for(var i=arguments[e],r=0,s=i.length;r<s;r++,n++)a[n]=i[r];return a};Object.defineProperty(o,"__esModule",{value:!0});var a=(i.prototype.displayTodos=function(t,e){for(;this.menu.firstChild;)this.menu.removeChild(this.menu.firstChild);for(;this.todoList.firstChild;)this.todoList.removeChild(this.todoList.firstChild);this.displayTasks(t,e),console.log(e)},i.prototype.displayTasks=function(t,e){var s=this,o=e[t].todoList;for(var a in e){var n=this.createElement("li");n.textContent=e[a].name,this.menu.append(n)}if(console.log(o.length),0===o.length){var i=this.createElement("p");i.textContent="Nothing to do! Start over?";var r=this.createElement("button");r.innerText="RESTART",this.todoList.append(i,r)}else o.forEach(function(t){var e=s.createElement("li");e.id=t.id;var o=s.createElement("input");o.type="checkbox",o.checked=t.complete;var a=s.createElement("input");a.type="radio",a.setAttribute("name","taskSelector"),a.checked=t.active;var n=s.createElement("span");if(n.contentEditable=!0,n.classList.add("editable"),t.complete){var i=s.createElement("s");i.textContent=t.text,n.append(i)}else n.textContent=t.text;var r=s.createElement("button","delete");r.textContent="Delete",e.append(a,o,n,r),s.todoList.append(e)})},i.prototype.getElement=function(t){return document.querySelector(t)},i.prototype.createElement=function(t,e){var o=document.createElement(t);return e&&o.classList.add(e),o},i.prototype._initLocalListeners=function(){var o=this;this.input.addEventListener("input",function(t){var e=t.target.value;o._temporaryTodoText=e})},i.prototype.bindSelectActiveTask=function(o){this.todoList.addEventListener("change",function(t){if("radio"===t.target.type){var e=parseInt(t.target.parentElement.id);o(e)}})},i.prototype.bindSelectActiveTab=function(o){var a=this;this.menu.addEventListener("click",function(t){t.preventDefault();var e=t.target;a._activeTab=n(e.parentNode.children).indexOf(e),console.log(a._activeTab),o(a._activeTab)})},i.prototype.bindToggleTodo=function(o){this.todoList.addEventListener("change",function(t){if("checkbox"===t.target.type){var e=parseInt(t.target.parentElement.id);o(e)}})},i.prototype.bindRestartTodo=function(e){this.todoList.addEventListener("click",function(t){t.target.matches("button")&&"RESTART"==t.target.innerText&&(console.log("RestartTodo"),e())})},i.prototype.bindDeleteTodo=function(o){this.todoList.addEventListener("click",function(t){if("delete"===t.target.className){var e=parseInt(t.target.parentElement.id);console.log("DeleteTodo"),o(e)}})},i.prototype.bindExecuteTask=function(e){this.execButton.addEventListener("click",function(t){e()})},i);function i(){this.app=this.getElement("#root"),this.input=this.createElement("input"),this.input.type="text",this.input.placeholder="Enter here ",this.input.name="todo",this.execButton=this.createElement("button"),this.execButton.innerText="EXECUTE TASK",this.title=this.createElement("h1"),this.title.textContent="JS Practices",this.todoList=this.createElement("ul","todo-list"),this.menu=this.createElement("ul"),this.app.append(this.execButton,this.title,this.menu,this.todoList),this._temporaryTodoText="",this._activeTab=0,this._initLocalListeners()}o.default=a},{}],5:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.List=[{id:1,text:"1.\tCreate an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.",complete:!1,active:!1,handler:function(){var t=parseInt(prompt("Step 1 - enter a positive or negative number","10"));console.log("Step 1: "+Math.abs(t))}},{id:2,text:"2.\tCreate an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.",complete:!1,active:!1,handler:function(){var t=parseFloat(prompt("Step 2 - enter number with a decimal","10.5"));console.log("Step 2: "+Math.ceil(t))}},{id:3,text:"3.\tCreate an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.",complete:!1,active:!1,handler:function(){var t=parseFloat(prompt("Step 3 - enter another number with a decimal","20.5"));console.log("Step 3: "+Math.floor(t))}},{id:4,text:"4.\tCreate an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.",complete:!1,active:!1,handler:function(){var t=prompt("Step 4 - enter five numbers separated by comma (1,2,3)","1,2,3,4,5").split(",").map(function(t){return parseFloat(t)});console.log("Step 4 - largest number: "+Math.max.apply(null,t)+" smallest number: "+Math.min.apply(null,t))}},{id:5,text:"5.\tCreate an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. ",complete:!1,active:!1,handler:function(){var t=parseFloat(prompt("Step 6 - enter another number with a decimal","16"));console.log("Step 5: "+Math.sqrt(t))}}]},{}],6:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.List=[{id:1,text:"Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.",complete:!1,active:!1,handler:function(){var t=prompt("Enter you Name");null!==t&&alert("Your name is "+t.length+" long")}},{id:2,text:"Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.",complete:!1,active:!1,handler:function(){var t=prompt("Enter you Name"),e=parseInt(prompt("Enter number of letter you want to find"));null!==t&&(e<t.length?alert("The letter is  "+t[e-1]+" long"):alert("Your name is "+t.length+" character long, the letter is out of the range. "))}},{id:3,text:'Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result',complete:!1,active:!1,handler:function(){var t=prompt("Enter you Name"),e=prompt("Enter you Name"),o=t.concat(" ",e);alert("Your name is "+o)}},{id:4,text:"Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.",complete:!1,active:!1,handler:function(){var t=prompt("enter you sentence or leave default","The quick brown fox jumps over the lazy dog").split(" "),e=prompt("enter the word to find it index or leave default","fox"),o=t.indexOf(e);alert(o)}},{id:5,text:"Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.",complete:!1,active:!1,handler:function(){var o,t=prompt("enter you sentence or leave default","The quick brown fox jumps over the lazy fox").split(" "),a=prompt("enter the word to find it index or leave default","fox");t.forEach(function(t,e){t===a&&(o=e)}),void 0!==o&&alert("last index of "+a+" in the sentence is "+o)}},{id:6,text:"Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.",complete:!1,active:!1,handler:function(){var t=prompt("enter you sentence or leave default","The quick brown fox jumped over the lazy dog"),e=prompt("enter your name or leave default","monkey");if("The quick brown fox jumped over the lazy dog"!==t){var o=prompt("what you want to replace in the entered sentence?");t.replace(o,e)}else alert(t.replace("the lazy dog",e))}},{id:7,text:"Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.",complete:!1,active:!1,handler:function(){var t=prompt("enter you sentence or leave default","The quick brown fox jumps over the lazy dog"),e=prompt("enter the word to find it index or leave default","fox");alert(t.search(e))}},{id:8,text:"Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.",complete:!1,active:!1,handler:function(){var t="The quick brown fox jumps over the lazy dog".slice();alert(t.slice(-12))}},{id:9,text:"Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.",complete:!1,active:!1,handler:function(){var t=prompt("enter you sentence or leave default","           THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ");alert(t.toLowerCase().trim())}},{id:10,text:"Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.",complete:!1,active:!1,handler:function(){alert("The quick brown fox jumps over the lazy dog".toUpperCase())}}]},{}],7:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.List=[{id:1,text:"1.\tCreate an application that gets the number of days in a month. Display that result within the console window.",complete:!1,active:!1,handler:function(){var t=parseInt(prompt("Step 1 - name a month 1 - 12","6"));console.log(2==t?"28 days in Feb but every 4 years this month has 29 days":new Date(1975,t,0).getDate());for(var e,o=parseInt(prompt("Step 1(another way) - Enter a year ","1998")),a=["gen","feb","mar","apr","mai","giu","lug","ago","set","ott","nov","dic"],n=0;n<12;n++)e=new Date(o,n+1,0).getDate(),console.log("In the year, "+o+", there are "+e+" days in "+a[n])}},{id:2,text:"2.\tCreate an application that gets the month name from a particular date. Display that result within the console window",complete:!1,active:!1,handler:function(){var t=prompt("Step 2 - enter a date"),e=new Date(t);console.log(e),console.log("Step 2 Month name:",e.toLocaleString("it-IT",{month:"long"}))}},{id:3,text:"3.\tCreate an application that tests whether a date is a weekend. Display that result within the console window",complete:!1,active:!1,handler:function(){var t,e=prompt("Step 3 - enter a date");console.log("Step 3 "+e+" is a "+(6==(t=new Date(e)).getDay()||0==t.getDay()?"weekend":"weekday"))}},{id:4,text:"4.\tCreate an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday",complete:!1,active:!1,handler:function(){var t;console.log("Step 4 - yesterday's day of the week was "+((t=new Date).setDate(t.getDate()-1),t.toLocaleString("default",{weekday:"long"})))}},{id:5,text:"5.\tCreate an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window ",complete:!1,active:!1,handler:function(){var t=(new Date).toLocaleString("default",{weekday:"long"});console.log(t);var e=t.slice(0,1);console.log("Step 5: "+e);var o=new Date,a=prompt("Step 5(another way) enter a date",o.toString()),n=new Date(a);console.log("Step 5: "+n.toLocaleString("default",{weekday:"narrow"}))}}]},{}],8:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.List=[{id:1,text:" TASK 1",complete:!1,active:!1,handler:function(){var t=Array.from("mylifewithdogs").sort();console.log(t.toString().replace(/,/g,""))}},{id:2,text:"TASK 2",complete:!1,active:!1,handler:function(){var t=prompt("Step 2","enter a phrase");console.log("Step 2 - "+function(t){var e=t.toLowerCase().split(" ");console.log(e);for(var o=0;o<e.length;o++)e[o]=e[o].charAt(0).toUpperCase()+e[o].substring(1);return e.join(" ")}(t))}},{id:3,text:"TASK 3",complete:!1,active:!1,handler:function(){var t=prompt("Step 3","enter another phrase"),n=["a","e","i","o","u"],i=0;console.log("Step 3 - There are "+function(t){for(var e=0,o=t.toLowerCase();e<o.length;e++){var a=o[e];n.includes(a)&&i++}return i}(t)+' vowels in the phrase "'+t+'"'),console.log("Step 3 version 2 - There are "+function(t){for(var e=0,o=0;o<t.length;o++)-1!=="aeiouAEIOU".indexOf(t[o])&&(e+=1);return e}(t)+' vowels in the phrase "'+t+'"')}},{id:4,text:"TASK 4",complete:!1,active:!1,handler:function(){var t=Math.random().toString(36).substr(2);console.log("Step 4 - this generates string of 11 characters: "+t);var e=Math.random().toString(36).substring(2,12);console.log("Step 4 again - this generates a string of 10 random characters: "+e)}},{id:5,text:"TASK 5",complete:!1,active:!1,handler:function(){var t=prompt("Step 5 - list some countries(separated by a comma");console.log("Step 5 - The longest country name is "+t.split(", ").sort(function(t,e){return e.length-t.length})[0])}}]},{}],9:[function(t,e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=(n.prototype.addList=function(t,e){this.list.push({name:t,todoList:e})},n.prototype.restartQuiz=function(t,e){console.log(this.list[t]),console.log(this.list[t].todoList),console.log(e),console.log(e),this.list[t].todoList=e[t]},n);function n(){this.list=[]}o.Task=a;var i=(r.getInstance=function(){return r.instance||(r.instance=new a),r.instance},r);function r(){}o.Singleton=i},{}]},{},[1]);
//# sourceMappingURL=bundle.js.map
