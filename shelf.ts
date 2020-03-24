interface ShelfItem {
  title: string;
}

// ShelfItem works as a constraint on T, meaning only
// types that fulfill the requirements of the interface can be used
// this allows functions to use variables that exist in the interface
export default class Shelf<T extends ShelfItem> {
  private _items: Array<T> = new Array<T>();

  add(item: T): void {
    this._items.push(item);
  }
  
  getFirst(): T {
    return this._items[0];
  }

  find(title: string): T {
    return this._items.filter(item => item.title === title)[0];
  }

  printTitles(): void {
    this._items.forEach(item => console.log(item.title));
  }
}
