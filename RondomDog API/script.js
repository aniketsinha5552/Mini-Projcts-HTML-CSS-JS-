let dogImage= document.getElementById('image')
let url=''
console.log(dogImage)



let newButton = document.getElementById('new')
console.log(newButton)

newButton.onclick=()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response=> response.json())
    .then(json=>{
       console.log(json.message)
    //    document.getElementById('image')
       dogImage.innerHTML= `<img src='${json.message}' style="height:300px ; width: 300px"/>`
    })
    
}

