// day 1 on learning jvascript
// date objects ➡️➡️ have values that represent dates and time
const date = new Date(2004, 3, 8, 1, 70);
const display1= document.getElementById('display')
const click = addEventListener('click',function (){
    display1.textContent = `i was born on ${date}`
})


