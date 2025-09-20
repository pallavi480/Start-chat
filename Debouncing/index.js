let api = "http://www.omdbapi.com/?i=tt3896198&apikey=46e014a&s";

let input = document.querySelector("input")

let Search_Box = document.getElementById("Search_Box");

const getData = async()=>{
let x = input.value;
 let res = await fetch(`${api}&s=${x}`)
 let data = await res.json()

 display(data.Search)
    
}

function Delay(){
    setTimeout(getData,1000)
}

function display(data){
    Search_Box.innerHTML = ""
    data.map(({Title,Poster,Year})=>{
    // console.log(Title,Poster,Year)

    // Search_Box.innerHTML = `<div>
    // <img src = ${Poster}/>
    // <h4>${Title}</h4>
    // <h5>${Year}</h5>
    // </div>
    // `

    let title = document.createElement("h4")
    title.innerText = Title
    let year = document.createElement("h5")
    year.innerText = Year
    let img = document.createElement("img")
    img.src = Poster
    let div = document.createElement("div")

    div.append(img,title,year)
    Search_Box.append(div)

    })
}

// getData()