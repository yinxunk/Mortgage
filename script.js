const clear = document.getElementById("clearall");
clear.addEventListener('click', () =>{
    const mortgageamount = document.getElementById("1");
    const mortgageterm = document.getElementById("2");
    const interestrate = document.getElementById("3");
    console.log(mortgageamount.value);
    mortgageamount.value = '';
    mortgageterm.value = '';
    interestrate.value = '';
})

const button = document.querySelector(".calculate");
button.addEventListener("click", () => {
    
})