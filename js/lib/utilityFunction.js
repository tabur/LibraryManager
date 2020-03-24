"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CalculateLateFee(daysLate) {
    return daysLate * .25;
}
exports.CalculateLateFee = CalculateLateFee;
function MaxBooksAllowed(age) {
    if (age < 12)
        return 3;
    else
        return 10;
}
exports.MaxBooksAllowed = MaxBooksAllowed;
function privateFunc() {
    console.log('Nothing to see here');
}
// Generic function, 
function Purge(inventory) {
    return inventory.splice(2, inventory.length);
}
exports.Purge = Purge;
//# sourceMappingURL=utilityFunction.js.map