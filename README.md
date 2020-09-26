# jquery-sort-ascending-descending

# Usage:

Integration
```
<script src="js/include/jquery-3.5.1.min.js" type="text/javascript"></script>
<script src="js/include/jquery-num-sort-1.0.0.js" type="text/javascript"></script>
```

Your Script File:
```
<script src="js/script.js" type="text/javascript"></script>
```

Define arrays:
```
let arrayNum = [-99, 1.10, 20.50, 3.60, 5.10, 0, 100];
```

Sort items in *Ascending order(Numbers):
```
// Default jQuery sort() function:
console.log( arrayNum.sort() ); // outputs: -99,0,1.1,100,20.5,3.6,5.1
```

```
// Plugin function:
let outputAsc = $(arrayNum).sortAscending(); 
console.log(outputAsc); // outputs: -99,0,1.1,3.6,5.1,20.5,100
```

Sort items in *Descending order(Numbers):
```
// Plugin function:
let outputDsc = $(arrayNum).sortDescending();
console.log(outputDsc); // outputs: 100,20.5,5.1,3.6,1.1,0,-99
```

