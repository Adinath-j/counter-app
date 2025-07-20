function buttons (){
    let calc = 0;

const display = document.getElementById("count");
console.log(display.textContent);


const increment = document.getElementById('increment')
increment.addEventListener('click', () => {
    calc++;
    display.textContent = calc
})

const decrement = document.getElementById('decrement')
decrement.addEventListener('click',()=>{
    if (calc > 0) {
        calc--;
    display.textContent = calc
    }
})
const reset = document.getElementById('reset')
reset.addEventListener('click',()=>{
    calc = 0;
    display.textContent = 0
})
}
buttons()

