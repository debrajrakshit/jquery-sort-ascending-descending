/*
// Plugin Name: jQuery Num Sort
// Version: 1.0.0
// Author: Debraj Rakshit
// Author Email: debrajweb@gmail.com
// Date: 25 September 2020
// License: https://opensource.org/licenses/MIT
// Copyright 2020, https://github.com/debrajrakshit/jquery-num-sort
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function ( $ ){
    // Sort minimum to maximum
    $.fn.sortNumMinToMax = function(){
        // arrayNum = [1, 20, 3, 5, 0, -88];
        let sortedArray = [];
        let bufferArray = [];

        let length = this.length;
        let lengthBufferArray = bufferArray.length;

        console.log('Length of main array: ' + length );
        console.log('Length of buffer: ' + lengthBufferArray );

        // console.log('length: ' + length);
        // let i = 0;

        let indexToApply = 0;
        let itemToCheck = this[indexToApply];
        console.log('Item to check: ' + itemToCheck);

        this.each((index, element) => {
    
            if(element < itemToCheck){
                sortedArray.push(element);
                indexToApply++;
                // console.log(element);
            }
            else{
                bufferArray.push(element);
            }

        });

        console.log(sortedArray);
        console.log(bufferArray);

        // return this;
    }

    // Sort maximum to minimum
    $.fn.sortNumMaxToMin = function(){
        this.each((index, element) => {
            console.log(element);
        });

        return this;
    }

}(jQuery ));