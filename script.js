let jokeparaEl=document.getElementById("jokepart");
let jokebuttonEl=document.getElementById("jokebutton");
let jokeheadingEl=document.getElementById("jokeheading");

function jokingpart(Event){
    let options={
        method: "GET"
    }
    fetch("https://official-joke-api.appspot.com/random_joke",options)
    .then(function(response){
        return response.json();
    })       
    .then(function(data){
        jokeparaEl.textContent=data.setup;
        jokeheadingEl.textContent=data.punchline;
        console.log(data)
})
}
jokebuttonEl.addEventListener("click",jokingpart);