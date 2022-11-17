let array = ""
let answer = ""
var timeOut
let setConditionForEventListener = false
const option = document.querySelectorAll('.option')
let winCondition = true;
let randomNum = Math.floor(Math.random()*4)+1
let turn = 1
array+= randomNum
console.log(`Whole correct number in turn ${turn} is: ${array}`)
setTimeout(runColorForOptions, 1000)
console.log("Player's chocie: ")

const option1 = document.querySelector('#option1')
option1.style.cursor = 'pointer'
option1.addEventListener('click', clickOpt1)
function clickOpt1() {
    answer+=1
    // Check if player enter wrong any wrong number, start at first one
    checkWrongCondition()
    if (answer.length === array.length && answer === array) {
        clearTimeout(timeOut)
        checkGame()
    }
    this.style.backgroundColor = 'red'
    option1.style.cursor = 'wait'
    //make the program untouchable when changing color when clicking
    option1.removeEventListener('click', clickOpt1)
    setTimeout(changeColorWhenClickingOpt1, 300)
}
//sayhello
//sayhello
const option2 = document.querySelector('#option2')
option2.style.cursor = 'pointer'
option2.addEventListener('click',clickOpt2)
function clickOpt2 () {
    answer+=2
    checkWrongCondition()
    if (answer.length === array.length && answer === array) {
        clearTimeout(timeOut)
        checkGame()
    }
    this.style.backgroundColor = 'red'
    option2.style.cursor = 'wait'
    //make the program untouchable when changing color when clicking
    option2.removeEventListener('click', clickOpt2)
    setTimeout(changeColorWhenClickingOpt2, 300)
}

const option3 = document.querySelector('#option3')
option3.style.cursor = 'pointer'
option3.addEventListener('click', clickOpt3)
function clickOpt3() {
    answer+=3
    checkWrongCondition()
    if (answer.length === array.length && answer === array) {
        clearTimeout(timeOut)
        checkGame()
    }
    this.style.backgroundColor = 'red'
    option3.style.cursor = 'wait'
    //make the program untouchable when changing color when clicking
    option3.removeEventListener('click', clickOpt3)
    setTimeout(changeColorWhenClickingOpt3, 300)
}

const option4 = document.querySelector('#option4')
option4.style.cursor = 'pointer'
option4.addEventListener('click', clickOpt4)
function clickOpt4() {
    answer+=4
    checkWrongCondition()
    if (answer.length === array.length && answer === array) {
        clearTimeout(timeOut)
        checkGame()
    }
    this.style.backgroundColor = 'red'
    option4.style.cursor = 'wait'
    //make the program untouchable when changing color when clicking
    option4.removeEventListener('click', clickOpt4)
    setTimeout(changeColorWhenClickingOpt4, 300)
}
//4:45PM: Need to execute immediately when player the first and second wrong answer
function checkGame () {
        if (answer!== array ) {
            console.log("You lost the game!")
            console.log(`Your current answer is: ${answer}`)
            option1.removeEventListener('click', clickOpt1)
            option2.removeEventListener('click', clickOpt2)
            option3.removeEventListener('click', clickOpt3)
            option4.removeEventListener('click', clickOpt4)
        } else {
            console.log('You win the game!!')
            answer = ""
            randomNum = Math.floor(Math.random()*4)+1
            array+=randomNum
            //Write code to each options get colored
            console.log(`Whole correct number in turn ${turn+1} is: ${array}`)
            setTimeout(runColorForOptions, 1000)
            console.log(`Playerchoice turn ${turn+1}: `)
            turn ++
            timeOut = setTimeout(checkGame, 100000000)
        }
    } 
function changeColorWhenClickingOpt1 () {
    option1.style.backgroundColor = 'aquamarine'
    if (answer[answer.length-1] === array[answer.length-1]) {
        option1.addEventListener('click', clickOpt1)
    }
    option1.style.cursor = 'pointer'
}

function changeColorWhenClickingOpt2 () {
    option2.style.backgroundColor = 'aquamarine'
    if (answer[answer.length-1] === array[answer.length-1]) {
        option2.addEventListener('click', clickOpt2)
    }
    option2.style.cursor = 'pointer'
}

function changeColorWhenClickingOpt3 () {
    option3.style.backgroundColor = 'aquamarine'
    if (answer[answer.length-1] === array[answer.length-1]) {
        option3.addEventListener('click', clickOpt3)
    }
    option3.style.cursor = 'pointer'
}

function changeColorWhenClickingOpt4 () {
    option4.style.backgroundColor = 'aquamarine'
    if (answer[answer.length-1] === array[answer.length-1]) {
        option4.addEventListener('click', clickOpt4)
    }
    option4.style.cursor = 'pointer'
}

function checkWrongCondition () {
    if (answer[answer.length-1] !== array[answer.length-1]) {
        return checkGame()
    } //Check latest element in answer with array
}
function delayForLoop (i){//This function is the most interesting
    setTimeout(function (){
        if (array[i]=== '1') {
            option1.removeEventListener('click', clickOpt1)
            option1.style.backgroundColor = 'pink'
            setTimeout(function(){
                option1.style.backgroundColor = 'aquamarine'   
            },1000)

        } else if (array[i] === '2') {
            option2.removeEventListener('click', clickOpt2)
            option2.style.backgroundColor = 'pink'
            setTimeout(function(){
                option2.style.backgroundColor = 'aquamarine'
            },1000)

        } else if (array[i] === '3') {
            option3.removeEventListener('click', clickOpt3)
            option3.style.backgroundColor = 'pink'
            setTimeout(function(){
                option3.style.backgroundColor = 'aquamarine'   
            },1000)

        } else  {
            option4.removeEventListener('click', clickOpt4)
            option4.style.backgroundColor = 'pink'
            setTimeout(function(){
                option4.style.backgroundColor = 'aquamarine'            
            },1000)
        }
    }, 2000*i)
    
}
function runColorForOptions () {//function to delay the for loop
    for (i=0; i < array.length; i++) {
        option1.removeEventListener('click', clickOpt1)
        option2.removeEventListener('click', clickOpt2)
        option3.removeEventListener('click', clickOpt3)
        option4.removeEventListener('click', clickOpt4)
        delayForLoop(i) 
    }
    setTimeout(function() {
        option1.addEventListener('click', clickOpt1)
        option2.addEventListener('click', clickOpt2)
        option3.addEventListener('click', clickOpt3)
        option4.addEventListener('click', clickOpt4)
    },2000*(array.length))  
}




// for (i=0; i<10; i++) {
//     task(i)
// } 
// function task(i) {
//     setTimeout (function () {
//         console.log(i)
//     },2000*i)
// }

// var count = 0
// var inID = setInterval(counter, 3000)
// function counter () {
//     console.log(++count)
// }
// console.log("Hello dog")

// for (i=0;i<10; i++) {
// let randomNum = Math.floor(Math.random()*4)+1
// array+=randomNum
// console.log(array)
// console.log(typeof array)
// }
// trie