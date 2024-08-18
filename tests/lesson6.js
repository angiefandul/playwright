// Conditional statement

// if(condition) {
//     //execute some code here
// } else {
//     //execute some code here
// }

// If hour between 6 and 12 print "Good morning"
// If hour between 12-18 print "Good afternoo"
//Othervise: "Good evening"

var hour = 5

if(hour >= 6 && hour <12) {
    console.log('Good morning')
} else {
    if(hour>=12 && hour < 18) {
        console.log('Good afternoon')
    } else {
        console.log('Good evening')

    }
}
