console.log("Hello World")



let button = document.getElementById('enter')

const calculate= (amt,tip,per) =>{
    totolAmt = (Number(amt) + (Number(tip)/100)*Number(amt))/Number(per)
    return totolAmt
}

const answer =(amt)=>{
    document.getElementById('ans').innerText=  `${Math.ceil(amt)} $`
    console.log(amt)

}



button.onclick= ()=>{
    let amount = document.getElementById('amount').value
    console.log(amount)
    let tip = document.getElementById('tip').value
    console.log(tip)
    let each = document.getElementById('value').innerText
    console.log(each)

    
    

    answer(calculate(amount,tip,each))
    
}







let subButton  = document.getElementById('sub')
let addButton = document.getElementById('add')


let value = document.getElementById("value").innerText

subButton.onclick=()=>{
    if(value>0){
        value--
    }
    
    document.getElementById("value").innerText= value
    
}
addButton.onclick=()=>{
    value++
    document.getElementById("value").innerText= value
    
}



