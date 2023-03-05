
let roll_btn = document.querySelector(".reroll-btn")
let qoute =document.querySelector(".qoute-text")
let qoute_id =document.querySelector(".qoute-id")
const Api_url="https://api.adviceslip.com/advice"

const Get_advice = async () =>{
    const response = await fetch(Api_url);
    const data = await response.json();
    const Advice = data.slip.advice
    const qoute_Id = data.slip.id
    qoute.textContent=Advice
    qoute_id.textContent=qoute_Id

}
Get_advice();
roll_btn.addEventListener('click',() =>{
   Get_advice();
})
    



