const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () =>{
        if (btn.id === "=") {
            display.value = eval(display.value);
        } else if (btn.id === "ac") {
            display.value = "";
        } else if(btn.id === "del") {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id;
        }
    })
})

function mudarTema() {
    const corpo = document.getElementById("calculadora");
    const buttons = document.getElementById("1");
    const buttons2 = document.getElementById("2");
    const buttons3 = document.getElementById("3");
    const buttons4 = document.getElementById("4");
    const buttons5 = document.getElementById("5");
    const buttons6 = document.getElementById("6");
    const buttons7 = document.getElementById("7");
    const buttons8 = document.getElementById("8");
    const buttons9 = document.getElementById("9");
    const buttons00 = document.getElementById("00");
    const buttons0 = document.getElementById("0");
    const button = document.getElementById("..");
    

    buttons.style.backgroundColor = buttons.style.backgroundColor === "azure" ? "grey" : "azure"
    buttons2.style.backgroundColor = buttons2.style.backgroundColor === "azure" ? "grey" : "azure"
    buttons3.style.backgroundColor = buttons3.style.backgroundColor === "azure" ? "grey" : "azure"
    buttons4.style.backgroundColor = buttons4.style.backgroundColor === "azure" ? "grey" : "azure"
    buttons5.style.backgroundColor = buttons5.style.backgroundColor === "azure" ? "grey" : "azure"
    buttons6.style.backgroundColor = buttons6.style.backgroundColor === "azure" ? "grey" : "azure"
    buttons7.style.backgroundColor = buttons7.style.backgroundColor === "azure" ? "grey" : "azure"
    buttons8.style.backgroundColor = buttons8.style.backgroundColor === "azure" ? "grey" : "azure"
    buttons9.style.backgroundColor = buttons9.style.backgroundColor === "azure" ? "grey" : "azure"
    buttons00.style.backgroundColor = buttons00.style.backgroundColor === "azure" ? "grey" : "azure"
    buttons0.style.backgroundColor = buttons0.style.backgroundColor === "azure" ? "grey" : "azure"
    button.style.backgroundColor = button.style.backgroundColor === "azure" ? "grey" : "azure"
    

    corpo.style.backgroundColor = corpo.style.backgroundColor === "black" ? "white" : "black"
    
    
    
   
    


}