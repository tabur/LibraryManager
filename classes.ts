import { Book, DamageLogger, Author, Librarian } from './interfaces';

// can import everything with import * as <alias>
// for example import * as Interfaces from './interfaces';
// they're then referenced with dot notation, eg. Interfaces.Librarian

export { UniversityLibrarian, ReferenceItem };

class UniversityLibrarian implements Librarian {
   
  name: string;
  email: string;
  department: string;

  assistCustomer(custName: string) {
    console.log(`${this.name} is assisting ${custName}`);
  }

  
}

// abstract classes can have fully implemented functions, accessors, etc.
// abstract functions must be implemented in child classes
abstract class ReferenceItem {
  private _publisher;
  static department: string = 'Research';

  //automatic backing variables and accessors are created for parameters
  constructor(public title: string, protected year: number) {
    console.log('Creating a new ReferenceItem');
  }

  //print with string interpolation
  printItem(): void {
    // instanced properties referenced with this
    console.log(`${this.title} was published in ${this.year}`);
    //static properties referenced through the class
    console.log(`Department: ${ReferenceItem.department}`);
  }

  //getter and setter for the private backing variable
  get publisher(): string {
    return this._publisher.toUpperCase();
  }
  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }

  // child classes must provide implementation
  abstract printCitation(): void;
}

