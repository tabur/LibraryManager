export { CalculateLateFee, MaxBooksAllowed, Purge };

function CalculateLateFee(daysLate: number) {
  return daysLate * .25;
}

function MaxBooksAllowed(age: number){
  if (age < 12) 
    return 3;
  else
    return 10;
}

function privateFunc(): void {
  console.log('Nothing to see here');
}

// Generic function, 
function Purge<T>(inventory: Array<T>): Array<T> {
  return inventory.splice(2, inventory.length);
}