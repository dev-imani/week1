// day 1 on learning jvascript
// date objects ➡️➡️ have values that represent dates and time
const date = new Date(2004, 3, 8, 1, 70);
const year = date.getFullYear()
const month =date.getMonth()
const day = date.getDay()

const display1= document.getElementById('display')
const display2 =document.getElementById('year')
const display3 =document.getElementById('month')
const display4 =document.getElementById('day')
 const click1 =document.getElementById('click1')
 const click2 =document.getElementById('click2')
 const click3 =document.getElementById('click3')
 const click4 =document.getElementById('click4')
click1.addEventListener('click',function (){
    display1.textContent = `i was born on ${date}`
})
click2.addEventListener('click',() =>
    display2.innerText =`I was born in the year ${year}`
)
 click3.addEventListener('click',() =>
    display3.innerText =`I was born in the month of ${month} `
)
 click4.addEventListener('click',() =>
    display4.innerText =`I was born on ${day} `
)



