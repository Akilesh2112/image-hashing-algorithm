import { Image } from 'image-js';



async function execute() {
    let image = await Image.load( 'img1.jpg' );
    let grey = image
        .grey() // convert the image to greyscale.
        .resize( {
            width: 8,
            height: 8
        } ) // resize the image, forcing a width of 8 pixels & height of 8 pixels.
    return grey.save( 'scaled.png' );
}






//0= black   128= Mid gray   255= white
async function hash() {

    let image = await Image.load( 'scaled.png' );

    var car = image.getMatrix( 0 );
    var imageMatrix = image.getPixelsArray();
    //console.log( imageMatrix );

    
    //Mean of the image matrix
    const arrSum = array =>
        array.reduce(
            ( sum, num ) => sum + ( Array.isArray( num ) ? arrSum( num ) : num * 1 ), 0 );
    var mean = ( arrSum( imageMatrix ) / 64 );



    //Declaring a new empty array
    let fruits = new Array( 64 );

    for ( i = 0; i < imageMatrix.length; i++ ) {
        if ( imageMatrix[ i ] < mean )
            fruits[ i ] = 0;
        else if ( imageMatrix[ i ] >= mean )
            fruits[ i ] = 1;
    }
    //console.log( fruits ); 


    var x = fruits.toString();
    var out = ( x.replace( /,/g, '' ) );
    //return out;


///
var inBinary = out;
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





}
hash();


export let put =  async (x) => {
    console.log( x = await hash() )
    return x;
};


//execute().catch( console.error );