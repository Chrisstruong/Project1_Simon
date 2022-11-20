let array = ""
let answer = ""
let highestLevel = 0
var timeOut
const text1 = document.createElement('span')
const option = document.querySelectorAll('.option')
const grabScore = document.querySelector('#score')
const levelMessage = document.createElement('p')
levelMessage.innerText = "Current level: 1"
grabScore.append(levelMessage)
const highestLevelMessage = document.createElement('p')
highestLevelMessage.innerText = "Highest level achieved: "
grabScore.append(highestLevelMessage)
const lostMessage = document.querySelector('#lost-message')
lostMessage.style.cursor = 'pointer'
let randomNum = Math.floor(Math.random()*4)+1
let turn = 1
array+= randomNum
setTimeout(runColorForOptions,2000)//run color options at the start after 2s

const option1 = document.querySelector('#option1')
option1.style.cursor = 'pointer'
// option1.addEventListener('click', clickOpt1)
function clickOpt1() {
    answer+=1
    // Check if player enter wrong any wrong number, start at first one
    checkWrongCondition()
    if (answer.length === array.length && answer === array) {
        clearTimeout(timeOut)
        checkGame()
    }
    this.style.backgroundColor = 'rgb(151, 255, 47)'//xanh sang
    option1.style.cursor = 'wait'
    //make the program untouchable when changing color when clicking
    option1.removeEventListener('click', clickOpt1)
    setTimeout(changeColorWhenClickingOpt1, 300)
}
//sayhello
//sayhello
const option2 = document.querySelector('#option2')
option2.style.cursor = 'pointer'
// option2.addEventListener('click',clickOpt2)
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
// option3.addEventListener('click', clickOpt3)
function clickOpt3() {
    answer+=3
    checkWrongCondition()
    if (answer.length === array.length && answer === array) {
        clearTimeout(timeOut)
        checkGame()
    }
    this.style.backgroundColor = 'rgb(251, 255, 13)'
    option3.style.cursor = 'wait'
    //make the program untouchable when changing color when clicking
    option3.removeEventListener('click', clickOpt3)
    setTimeout(changeColorWhenClickingOpt3, 300)
}

const option4 = document.querySelector('#option4')
option4.style.cursor = 'pointer'
// option4.addEventListener('click', clickOpt4)
function clickOpt4() {
    answer+=4
    checkWrongCondition()
    if (answer.length === array.length && answer === array) {
        clearTimeout(timeOut)
        checkGame()
    }
    this.style.backgroundColor = 'aqua'
    option4.style.cursor = 'wait'
    //make the program untouchable when changing color when clicking
    option4.removeEventListener('click', clickOpt4)
    setTimeout(changeColorWhenClickingOpt4, 300)
}
//4:45PM: Need to execute immediately when player the first and second wrong answer
function checkGame () {
    if (answer!== array ) {
        text1.remove()
        text1.innerText = `You have lost the game!      `
        lostMessage.append(text1)
        option1.removeEventListener('click', clickOpt1)
        option2.removeEventListener('click', clickOpt2)
        option3.removeEventListener('click', clickOpt3)
        option4.removeEventListener('click', clickOpt4)
        const text2 = document.createElement('span')
        text2.innerHTML = "Click here to Replay"
        lostMessage.append(text2)
        
        text2.addEventListener('click', function () {
            text1.remove()
            text2.remove()
            levelMessage.innerText = `Current level: ${1}`
            grabScore.append(levelMessage)
            highestLevelMessage.innerText = `Highest level achieved: ${highestLevel}`
            grabScore.append(highestLevelMessage)
            array = ""
            answer = ""
            randomNum = Math.floor(Math.random()*4)+1
            array+=randomNum
            setTimeout(runColorForOptions, 1000)
            // option1.addEventListener('click', clickOpt1)
            // option2.addEventListener('click', clickOpt2)
            // option3.addEventListener('click', clickOpt3)
            // option4.addEventListener('click', clickOpt4)
        })
    } else {
        option1.removeEventListener('click', clickOpt1)
        option2.removeEventListener('click', clickOpt2)
        option3.removeEventListener('click', clickOpt3)
        option4.removeEventListener('click', clickOpt4)
        text1.remove()
        if (i>highestLevel) {
            highestLevel++
        }
        levelMessage.innerText = `Current level: ${i+1}`
        grabScore.append(levelMessage)
        highestLevelMessage.innerText = `Highest level achieved: ${highestLevel}`
        grabScore.append(highestLevelMessage)
        const textWin = document.createElement('span')
        textWin.innerHTML = `Congratulations! Round ${i+1} STARTS!`
        lostMessage.append(textWin)
        setTimeout(function () {
            textWin.remove()
        },1000)
        answer = ""
        randomNum = Math.floor(Math.random()*4)+1
        array+=randomNum
        //Write code to each options get colored
        setTimeout(runColorForOptions, 1000)
        turn ++
        timeOut = setTimeout(checkGame, 100000000)
        }
    } 
function changeColorWhenClickingOpt1 () {
    option1.style.backgroundColor = 'rgba(172, 255, 47, 0.594)'//xanh toi
    if (answer[answer.length-1] === array[answer.length-1] && array.length !== answer.length) {
        option1.addEventListener('click', clickOpt1)
    }
    option1.style.cursor = 'pointer'
}

function changeColorWhenClickingOpt2 () {
    option2.style.backgroundColor = 'rgba(245, 14, 14, 0.682)'
    if (answer[answer.length-1] === array[answer.length-1] && array.length !== answer.length) {
        option2.addEventListener('click', clickOpt2)
    }
    option2.style.cursor = 'pointer'
}

function changeColorWhenClickingOpt3 () {
    option3.style.backgroundColor = 'rgba(255, 255, 0, 0.652)'
    if (answer[answer.length-1] === array[answer.length-1] && array.length !== answer.length) {
        option3.addEventListener('click', clickOpt3)
    }
    option3.style.cursor = 'pointer'
}

function changeColorWhenClickingOpt4 () {
    option4.style.backgroundColor = 'rgba(0, 255, 255, 0.704)'
    if (answer[answer.length-1] === array[answer.length-1] && array.length !== answer.length) {
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
            option1.style.backgroundColor = 'rgb(151, 255, 47)'//xanh sang
            setTimeout(function(){
                option1.style.backgroundColor = 'rgba(172, 255, 47, 0.594)'   //xanh toi
            },1000)

        } else if (array[i] === '2') {
            option2.removeEventListener('click', clickOpt2)
            option2.style.backgroundColor = 'red'//do sang
            setTimeout(function(){
                option2.style.backgroundColor = 'rgba(245, 14, 14, 0.682)'// do toi
            },1000)

        } else if (array[i] === '3') {
            option3.removeEventListener('click', clickOpt3)
            option3.style.backgroundColor = 'rgb(251, 255, 13)'
            setTimeout(function(){
                option3.style.backgroundColor = 'rgba(255, 255, 0, 0.652)'   
            },1000)

        } else  {
            option4.removeEventListener('click', clickOpt4)
            option4.style.backgroundColor = 'aqua'
            setTimeout(function(){
                option4.style.backgroundColor = 'rgba(0, 255, 255, 0.704)'            
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
        text1.innerText = `YOUR TURN!`
        lostMessage.append(text1)
        option1.addEventListener('click', clickOpt1)
        option2.addEventListener('click', clickOpt2)
        option3.addEventListener('click', clickOpt3)
        option4.addEventListener('click', clickOpt4)
    },2000*(array.length))  
}