function listPrintersInTheStock() {
    if (arguments.length === 0) {
        return 'No printers in stock';
    } else if (arguments.length === 1) {
        return `You can find the following printers in the stock : ${arguments[0]} and 0 more`;
    } else {
        const nbPrintersLeft = arguments.length - 2;

        return `You can find the following printers in the stock : ${arguments[0]}, ${arguments[1]} and ${nbPrintersLeft} more`;
    }
};

console.log(listPrintersInTheStock("ColorWorks C7500G", "SurePress L-6034"));
//Result : You can find the following printers in the stock : ColorWorks C7500G, SurePress L-6034 and 0 more.

console.log(listPrintersInTheStock("SurePress L-6034", "SWJ-320", "SIJ-320UV"));
//Result : You can find the following printers in the stock : SurePress L-6034, SWJ-320 and 1 more.

console.log(listPrintersInTheStock("ColorWorks C7500G", "SurePress L-6034", "SWJ-320", "SIJ-320UV", "HP STITCH S500", "HP Latex R2000"));
//Result : You can find the following printers in the stock : ColorWorks C7500G, SurePress L-6034 and 4 more.

console.log(listPrintersInTheStock());

console.log(listPrintersInTheStock("ColorWorks C7500G"))