import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import { CalculateLateFee, MaxBooksAllowed, Purge} from './lib/utilityFunction';
import Shelf from './shelf';

// import of default export has different format
import Encyclopedia from "./encyclopedia";


function GetAllBooks(): Book[] {
  let books = [
		{ id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
		{ id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
		{ id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
		{ id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
  ];
  
  return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {
  let numberOfBooks: number = books.length;
  let firstAvailable: string = '';

  for (const currentBook of books) {
    if(currentBook.available) {
      firstAvailable = currentBook.title;
      break;
    }
  }

  console.log('Total Books: ' + numberOfBooks);
  console.log('First Available: ' + firstAvailable);
}

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
  
  console.log('Getting books in category: ' + Category[categoryFilter]);

  const foundBookTitles: string[] = [];
  const allBooks = GetAllBooks();
  
  for(let currentBook of allBooks) {
    if(currentBook.category === categoryFilter) {
      foundBookTitles.push(currentBook.title);
    }
  }

  return foundBookTitles;
}

function LogBookTitles(titles: string[]): void {
  for (const title of titles) {
    console.log(title);
  }
}

function GetBookByID(id: number): Book {
  const allBooks = GetAllBooks();
  return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
  return name + id;
}

//optional variables require checking
function CreateCustomer(name: string, age?: number, city?: string): void {
  console.log('Creating customer ' + name);
  if(age) {
    console.log('Age: ' + city);
  }
  if(city) {
    console.log('City: ' + city);
  }
}

// accepts any number of bookIDs, which will be contained in an array
function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {

  console.log('Checking out books for ' + customer);

  let booksCheckedOut: string[] = [];

  for (const id of bookIDs) {
    let book = GetBookByID(id);
    if (book.available) {
      booksCheckedOut.push(book.title);
    }
  }

  return booksCheckedOut;
}

//overloaded function - can only be done by overloading the function signature
//and then handling all variations within one function
function GetTitles(author: string): string[];
function GetTitles(author: boolean): string[];
function GetTitles(bookProperty: any): string[] {
  const allBooks = GetAllBooks();
  const foundTitles: string[] = [];

  if(typeof bookProperty == 'string') {
    //get all books by author
    for (const book of allBooks) {
      if(book.author === bookProperty) {
        foundTitles.push(book.title);
      }
    }
    
  }
  else if(typeof bookProperty == 'boolean') {
    //get all books based on availability
    for (const book of allBooks) {
      if(book.available === bookProperty) {
        foundTitles.push(book.title);
      }
    }
  }

  return foundTitles;
}

function PrintBook(book: Book): void {
  console.log(book.title + ' by ' + book.author);
}

// Test data

let inventory: Array<Book> = [
  { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
  { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
  { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
  { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

let bookShelf: Shelf<Book> = new Shelf<Book>();

inventory.forEach(book => bookShelf.add(book));

let firstBook: Book = bookShelf.getFirst();

let magazines: Array<Magazine> = [
  { title: 'Programming Language Monthly', publisher: 'Code Mags' },
  { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
  { title: 'Five Points', publisher: 'GSU' }
];

let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();

magazines.forEach(mag => magazineShelf.add(mag));

let firstMagazine: Magazine = magazineShelf.getFirst();

magazineShelf.printTitles();

let softwareBook = bookShelf.find('Code Complete');
console.log(`${softwareBook.title} (${softwareBook.author})`);

//let purgedBooks = Purge<Book>(inventory);

// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));

// let logDamage: DamageLogger;
// logDamage = (damage: string) => console.log('Damage reported: ' + damage);
// logDamage('torn page');