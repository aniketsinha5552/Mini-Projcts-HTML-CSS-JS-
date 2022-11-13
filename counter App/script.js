let subButton  = document.getElementById('sub')
let addButton = document.getElementById('add')


let value = document.getElementById("value").innerText

subButton.onclick=()=>{
    if(value>0){
        value--
    }
    
    document.getElementById("value").innerText= value
    console.log(value)
}
addButton.onclick=()=>{
    value++
    document.getElementById("value").innerText= value
    console.log(value)
}

let del = document.getElementById('del')
del.onclick=()=>{
    document.getElementById("value").innerText= 0
    console.log("deleting")
}
