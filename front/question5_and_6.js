function usePrinter() {
    let name = "ColorWorks C7500G";
    
    return [
        () => `I'm the printer ${name}`,
        (newName) => name = newName
    ]
}

const [declarePrinter, setPrinterName] = usePrinter();
let name = "SurePress L-6034";

console.log(declarePrinter());

// Answer to question 5 :
// The result is "I'm the printer ColorWorks C7500G" because we are using destructuration on the result of the call to usePrinter()
// to create an array of functions, the first one being declarePrinter, simply returning a string formatted with the variable 
// "let name" when executing it

// Answer to question 6 :
// We can use the other function setPrinterName() to set a new value to the variable "name", and then calling again the function
// declarePrinter() to check its value

setPrinterName("Epson");
console.log(declarePrinter());

// Result : "I'm the printer Epson"