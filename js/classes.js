"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + " is assisting " + custName);
    };
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
// abstract classes can have fully implemented functions, accessors, etc.
// abstract functions must be implemented in child classes
var ReferenceItem = /** @class */ (function () {
    //automatic backing variables and accessors are created for parameters
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferenceItem');
    }
    //print with string interpolation
    ReferenceItem.prototype.printItem = function () {
        // instanced properties referenced with this
        console.log(this.title + " was published in " + this.year);
        //static properties referenced through the class
        console.log("Department: " + ReferenceItem.department);
    };
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        //getter and setter for the private backing variable
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: true,
        configurable: true
    });
    ReferenceItem.department = 'Research';
    return ReferenceItem;
}());
exports.ReferenceItem = ReferenceItem;
//# sourceMappingURL=classes.js.map