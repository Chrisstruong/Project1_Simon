// for (i=0; i<10; i++){
//     console.log(i)
// } //normal for loop


for (i=0; i<10; i++) {
    printOut(i)
}
function printOut(i) {
    setTimeout(function () {
        console.log(i)
    }, 10000*i)
}//here how to delay for loop
