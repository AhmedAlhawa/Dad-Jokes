const jokeEl = document.getElementById("joke");
const JokeBtn = document.getElementById("jokeBtn")

JokeBtn.addEventListener('click',async ()=>{

    const res = await fetch('https://icanhazdadjoke.com',
    {   method:'GET',
        headers:{
           Accept: 'application/json'}
    }
    )
    const data=await res.json();
    jokeEl.innerHTML = data.joke
    console.log("data : ",data)
})