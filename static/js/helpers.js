async function cardMaker(greet, message, event){
    let div = document.createElement("div");
    let cardGreet = document.createElement("h2");
    cardGreet.textContent = greet;
    let cardMessage = document.createElement("p");
    cardMessage.textContent = message;
    div.appendChild(cardGreet);
    div.appendChild(cardMessage);
    let access = "6zMqTpmURYVlmZ-6S9JgucOmPirP61_8XguUpUxr3Xo"
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${event}&client_id=${access}`);
    const data = await response.json();
    let backImage = data.urls.raw;
    console.log(typeof(backImage));
    div.style.width = '50%'
    div.style.backgroundImage = `url(${backImage})`;
    div.style.backgroundSize = "contain cover";
    document.body.appendChild(div);

}

module.exports = {cardMaker};