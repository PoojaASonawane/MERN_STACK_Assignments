// 12. What is the code below going to output?
// a. console.log( null || 2 || undefined );
// b. console.log( alert(1) || 2 || alert(3) );
// c. console.log( 1 && null && 2 );
// d. console.log( null || 2 && 3 || 4 );

console.log( null || 2 || undefined );//2
console.log( console.log(1) || 2 || console.log(3) );//1
                                                     //2
console.log( 1 && null && 2 );//null
console.log( null || 2 && 3 || 4 );//3

// 14. Which of these alerts are going to execute?
// a. if (-1 || 0) alert( 'first' );
// b. if (-1 && 0) alert( 'second' );
// c. if (null || -1 && 1) alert( 'third' );

if (-1 || 0) {
console.log( 'first' )//execute
}

if (-1 && 0) {
    console.log( 'second' )
    }

    if (null || -1 && 1) {
        console.log( 'third' )//execute
        }
        
    