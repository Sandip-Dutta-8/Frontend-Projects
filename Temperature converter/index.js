const celsiusInput = document.querySelector("#celsius");
const fahrenhiteInput = document.querySelector("#fahrenhite");
const kelvinInput = document.querySelector("#kelvin");
const button = document.querySelector(".button button");

function roundnumber(number){
   return Math.round(number*100)/100;
}

//celsius to fahrenhite and kelvin
celsiusInput.addEventListener('input', ()=>{
    let ctemp = parseFloat(celsiusInput.value);
    let ftemp = (ctemp*(9/5)) + 32;
    let ktemp = ctemp + 273;

    fahrenhiteInput.value =roundnumber(ftemp);
    kelvinInput.value = roundnumber(ktemp);
})

//fahrenhite to celsius and kelvin
fahrenhiteInput.addEventListener('input', ()=>{
    let ftemp = parseFloat(fahrenhiteInput.value);
    let ctemp = (ftemp - 32) * 5/9;
    let ktemp = ctemp + 273;

    celsiusInput.value =roundnumber(ctemp);
    kelvinInput.value = roundnumber(ktemp);
})

//kelvin to celsius and fahrenhite
kelvinInput.addEventListener('input', ()=>{
    let ktemp = parseFloat(kelvinInput.value);
    let ctemp = ktemp - 273;
    let ftemp = (ctemp*(9/5)) + 32;

    fahrenhiteInput.value =roundnumber(ftemp);
    celsiusInput.value = roundnumber(ctemp);
})

//clear all
button.addEventListener("click", ()=>{
    celsiusInput.value = "";
    fahrenhiteInput.value = "";
    kelvinInput.value = "";
})
