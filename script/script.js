let fNumber = document.querySelectorAll('input')[0]
let mNumber = document.querySelectorAll('input')[1]
let calcBut =document.querySelectorAll('button')[0]

let fTotal = document.querySelectorAll('label')[0]
let mTotal = document.querySelectorAll('label')[1]
let gTotal = document.querySelectorAll('label')[2]

calcBut.addEventListener('click',()=>{
    fTotal.innerText ='R'+ eval(`(150.95 * ${fNumber.value})`).toFixed(2) ,
    mTotal.innerText ='R'+ eval(`(180.95 * ${mNumber.value})`).toFixed(2),
    gTotal.innerText ='R'+ eval(`(150.95 * ${fNumber.value}) + (180.95 * ${mNumber.value})`).toFixed(2)
})