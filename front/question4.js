let printer = {
    brand: "Epson",
    inks: ["cyan", "magenta", "yellow", "black"],
    
    fulfillInks() {
        this.inks.forEach(function(ink) {
            console.log(`${this.brand} printer : ${ink} ink fulfilled. `);
        });
    },

    correctedFulfillInks() {
        var brand = this.brand;

        this.inks.forEach(function(ink) {
            console.log(`${brand} printer : ${ink} ink fulfilled. `);
        });
    }
};

printer.fulfillInks();
printer.correctedFulfillInks();

// Result is "undefined printer : ${ink} ink is fullfilled" because this.brand is not defined in the scope of the foreach 
// function argument

// Solution
// Using the correctedFulfillInks() function with the brand set in a variable that is accessible from the scope of the
// foreach function argument 