/*
// Plugin Name: jQuery Sort Descending Ascending
// Description: Sort an array into ascending or descending order
// Version: 1.0.0
// Author: Debraj Rakshit
// Author Email: debrajitweb@gmail.com
// Date: 25 September 2020
// Update Date: 26 September 2020
// License: https://opensource.org/licenses/MIT
// Copyright 2020, https://github.com/debrajrakshit/jquery-sort-ascending-descending
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function ( $ ){
    // Sort in Ascending Order
    $.fn.sortAscending = function(){
        // input array length
        const inputLength = this.length;
        // Make a duplicate of input array
        let copyArray = this;
        let copyArrayLength = copyArray.length;
        // Sorted array to be output
        let sortedArray = [];
        // Buffer Array
        let bufferArray = [];

        // Function to sort from minimum value to maximum
        // Define a minimum
        let minimum;
        function sortAscending(){
            // iterate through each item in the array
            for( let i = 0; i < copyArrayLength; i++ ){
                // set the current item as minimum
                minimum = copyArray[i];// start from first item
                // Iterate through each item
                for( let j = 0; j < copyArrayLength; j++){
                    // Compare it with minimum
                    if(copyArray[j] < minimum){
                        // if there is a lower value then set it as minimum
                        minimum = copyArray[j];
                    }
                }
    
                // If it equal to item being checked
                if(minimum == copyArray[i]){
                    // Push it to sortedArray
                    sortedArray.push(minimum);
                }
                else{
                    // Else push it buffer array
                    bufferArray.push(copyArray[i]);
                }
    
            }

            // Reassign copyArray
            copyArray = bufferArray;
            // Reassign copyArrayLength
            copyArrayLength = bufferArray.length;
            // Clear bufferArray for next iteration
            bufferArray = [];

        }
        
        // Loop until sort is complete
        for( let k = 0; k < inputLength; k++ ){
            sortAscending();
        }
        // Return the sorted array
        return sortedArray;
    }

    // Sort in Descending Order
    $.fn.sortDescending = function(){
        return this.sortAscending().reverse();
    }

}(jQuery ));
