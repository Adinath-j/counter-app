const increment = document.getElementById('increment')
const display = document.getElementById("count");
let max = 9;
let calc = 0;
const decrement = document.getElementById('decrement')

function btnAnimation(){
    display.textContent = calc;

    if (calc === 0) {
        gsap.to(decrement,{
            scale: 0,
            opacity: 0,
            duration: 0.3,
        })
    } else {
        gsap.to(decrement,{
            scale: 1,
            opacity: 1,
            duration: 0.3,
        })
    }
}




function buttons (){


increment.addEventListener('click', () => {
if (calc < max) {
            calc++
            btnAnimation()
}
})

decrement.addEventListener('click',()=>{
    if (calc > 0) {
        calc--;
        btnAnimation()
    }
})
const reset = document.getElementById('reset')
reset.addEventListener('click',()=>{
    calc = 0;
    display.textContent = 0;
    btnAnimation()
})
}
buttons()
