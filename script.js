
let roll_btn = document.querySelector(".reroll-btn")

const  getAdvice = async () =>{
    const response= await fetch('https://api.adviceslip.com/advice');
    const data = await response.json()
    return data
};

const new_advice = async() =>{
    const data = await getAdvice()
    console.log(data)
    let qoute =document.querySelector(".qoute-text")
    qoute.textContent=data.slip.advice
};



window.addEventListener('DOMContentLoaded',() =>{
    roll_btn.addEventListener('click',function(){
        new_advice();
    })
    
})


