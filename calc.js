alert("JS is connected!");
const display = document.getElementById("input");
const buttons=document.querySelectorAll(".num,.operator");

let expression="";

buttons.forEach(button => {
    button.addEventListener ("click",() => {
        const value = button.textContent.trim();

        if (value === "=") {
            try {
                expression= eval(expression);
                display.value = expression;
            } 
            catch {
                display.value="error";
                expression ="";
            }
        }

        else if ([ "+","-","*","/"].includes(value)) {
            if (expression === "" || ["+","-","*","/"].includes(expression.slice(-1))) {
                return;
            }
            expression+=value;
            display.value=expression;
        }
        else {
            expression+=value;
            display.value=expression;
        }
            
        

    });
});
