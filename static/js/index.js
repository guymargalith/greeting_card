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