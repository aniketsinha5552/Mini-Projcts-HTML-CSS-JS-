// console.log("hello")

let rockButton = document.getElementById('rock')
// console.log(rockButton)

let paperButton = document.getElementById('paper')
let scissorButton = document.getElementById('scissor')
// console.log(paperButton)
// console.log(scissorButton)

const compare=(userInput, computer)=>{
    let res
     //rock
     console.log(`user: ${userInput}`)
     console.log(`computer: ${computer}`)
     if(userInput=='rock'){
        if(computer=='scissor'){
            console.log("User Wins")
            res=1
        }
        else if(computer=='paper'){
            console.log('Computer wins')
            res=-1
        }
        else{
            console.log("Draw")
            res=0
        }
     }
     //paper
     if(userInput=='paper'){
        if(computer=='scissor'){
            console.log("Computer Wins")
            res=-1
        }
        else if(computer=='rock'){
            console.log('User wins')
            res=1
        }
        else{
            console.log("Draw")
            res=0
        }
     }

     //scissor
     if(userInput=='scissor'){
        if(computer=='rock'){
            console.log("Computer Wins")
            res=-1
        }
        else if(computer=='paper'){
            console.log('User wins')
            res=1
        }
        else{
            console.log("Draw")
            res=0
        }
     }
     return res
}

const compute=(value)=>{
    console.log(value)
    const arr=['rock','paper','scissor']
    const rand= Math.floor(Math.random()*3)
    // console.log(rand)
    // console.log(arr[rand])
    document.getElementById('user').innerText= `User: ${value}`
    document.getElementById('comp').innerText= `Computer: ${arr[rand]}`
    let ans=compare(value,arr[rand])  // return 1 if user wins, -1 if comp wins and 0 if draw

    if (ans==0){
        console.log("Draw")
        document.getElementById('res').innerText= "Draw"
    }
    else if (ans==1){
        console.log("User wins")
        document.getElementById('res').innerText= "User Wins"
    }
    else if (ans==-1){
        console.log("Computer wins")
        document.getElementById('res').innerText= "Computer wins"
    }
}

rockButton.onclick=()=>{
    compute(rockButton.value)
}
paperButton.onclick=()=>{
    compute(paperButton.value)
}

scissorButton.onclick=()=>{
    compute(scissorButton.value)
}

