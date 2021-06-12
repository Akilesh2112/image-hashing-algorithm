import { put } from './index.js';

// to call it 
put();

// let { put } = await import('./index.js');
// var food = put;
//console.log(food);

var inBinary = "11011000101111";
var length = inBinary.length;
// determine how many bits in first 4 digits
var firstBits = length % 4;

// if firstBits > 0 generate zeros to make even 4bits
// increase length by number of added bits
var inAdded = "";
if(firstBits > 0)
{
   var additional = "";
   for(var i = 0; i < 4 - firstBits; i++)
   {
     additional = "0" + additional;
     length++;
   }
   inAdded= additional + inBinary;
}
else
{
inAdded = inBinary;
}


// Binary to hexadecimal lookup table in
// a multidimensional array
var hexDigits = [
    ["0000","0"],
    ["0001","1"],
    ["0010","2"],
    ["0011","3"],
    ["0100","4"],
    ["0101","5"],
    ["0110","6"],
    ["0111","7"],
    ["1000","8"],
    ["1001","9"],
    ["1010","A"],
    ["1011","B"],
    ["1100","C"],
    ["1101","D"],
    ["1110","E"],
    ["1111","F"]];

// grab the input bits 4bits by 4bits
// look up in array and fetch hexadecimal value
var fourBits = "";
var outHex = "";
for(var start = 0; start <= length - 4; start += 4)
{
   fourBits = inAdded.substring(start, start + 4);
   for(var j = 0; j < hexDigits.length; j++)
   {
      if(fourBits == hexDigits[j][0])
      {
          outHex += hexDigits[j][1];
      }
   }
}

console.log(outHex);
