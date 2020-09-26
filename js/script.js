// Usage

// Define arrays
let arrayNum = [-99, 1.10, 20.50, 3.60, 5.10, 0, 100];
let arrayLetters = ['Abby', 'Daisy', 'Jessy', 'Jenniffer', 'John', 'Ivy', 'Samantha', 'Debraj', 'Scarlet', 'Chitranshi', 'Maria', 'Zelda', 'Spiderman'];

// Sort items in *Ascending order(Numbers)
// Default jQuery sort() function:
console.log('Default jQuery sort: ' + arrayNum.sort());

// Plugin function:
let outputAsc = $(arrayNum).sortAscending();
console.log('Plugin sort ascending: ' + outputAsc);

// Sort items in *Descending order
// Plugin function:
let outputDsc = $(arrayNum).sortDescending();
console.log('Plugin sort descending:' + outputDsc);

// Sort items in *Ascending order(Strings)(Note: Default sort() and sort().reverse() works fine with strings)
// Default jQuery sort() function:
console.log('Default jQuery sort: ' + arrayLetters.sort());

// Plugin function:
let outputAsc2 = $(arrayLetters).sortAscending();
console.log('Plugin sort ascending: ' + outputAsc2);

// Sort items in *Descending order
// Plugin function:
let outputDsc2 = $(arrayLetters).sortDescending();
console.log('Plugin sort descending:' + outputDsc2);


