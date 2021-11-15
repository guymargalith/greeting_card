(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
let helper = require("./helpers");

function init() {
    let form = document.querySelector("form");
    let subButton = document.querySelector("#submit");
    form.addEventListener("submit", e=>{
        e.preventDefault();
        const greet = e.target.greeting.value;
        const message = e.target.message.value;
        const event = e.target.event.value;
        form.remove();
        helper.cardMaker(greet, message, event);
    })
}

init();
},{"./helpers":1}]},{},[2]);
