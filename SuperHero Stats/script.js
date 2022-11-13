let superName = document.getElementById("name");
let img = document.getElementById("super");
let bio = document.getElementById('bio')
console.log(bio)

// Random SuperHero
const randomize = () => {
  let num = Math.ceil(Math.random() * 731);
  return num;
};

let randBtn = document.getElementById("randBtn");

randBtn.onclick = () => {
  fetch(`https://www.superheroapi.com/api.php/5668212303296562/${randomize()}`)
    .then((response) => response.json())
    .then((json) => {
      img.innerHTML = `<img src= "${json.image.url}" alt="" />`;
      superName.innerText = `${json.name}`;
      console.log(json.biography)
      bio.innerHTML= `<p></p>`
      Object.keys(json.biography).map(stat=>{
        console.log(`${stat}: ${json.biography[stat]}`)
        bio.innerHTML += `<p>${stat.toUpperCase()}:👉 ${json.biography[stat]}</p>`
      })
    });
};


// Search


let searchBtn = document.getElementById('searchBtn')
console.log(searchBtn) 
let input = document.getElementById('searchInput')
console.log(input)

searchBtn.onclick=()=>{
    let sname = input.value
    console.log(sname)
    fetch(`https://www.superheroapi.com/api.php/5668212303296562/search/${sname}`)
    .then((response) => response.json())
    .then((json) => {
        img.innerHTML = `<img src= "${json.results[0].image.url}" alt="" />`;
        superName.innerText = `${json.results[0].name}`;
        bio.innerHTML= `<p></p>`
        Object.keys(json.results[0].biography).map(stat=>{
            console.log(`${stat}: ${json.results[0].biography[stat]}`)
            bio.innerHTML += `<p>${stat.toUpperCase()}:👉 ${json.results[0].biography[stat]}</p>`
          })
      
    });
}