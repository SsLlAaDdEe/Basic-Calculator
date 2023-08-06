//This assigns the HTML element 'display' to the JS element 'display'
let display = document.getElementById("display");

//This is for assigning the arrays of buttons from the HTML element to a single JS element
let buttons = Array.from(document.getElementsByClassName("button"));

//Uses a switch-case statement to provide functions to various buttons depending on the output of the button
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      //Clears screen when clicked
      case "C":
        display.innerText = "";
        break;
      //Removes the last entry when clicked
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      //Provides the solution of the display as if a JavaScript statement 
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
