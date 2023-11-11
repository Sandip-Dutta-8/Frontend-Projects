const quoteText = document.querySelector(".content"),
    newbtn = document.querySelector("button"),
    quoteAuthor = document.querySelector(".author"),
    soundbtn = document.querySelector(".material-symbols-outlined"),
    copybtn = document.querySelector(".material-symbols-outlined");

    function randomQuote(){
        newbtn.innerHTML = "loading quote";
        newbtn.classList.add("loading");
        fetch("https://api.quotable.io/quotes/random").then(res => res.json()).then(result =>{
            console.log(result);
            quoteText.innerHTML = result[0].content;
            quoteAuthor.innerHTML = result[0].author;
            newbtn.innerHTML = "New Quote";
            newbtn.classList.remove("loading");
        });

        soundbtn.addEventListener("click", ()=>{
            let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML} by ${quoteAuthor.innerHTML}`);
            speechSynthesis.speak(utterance);
        });

        copybtn.addEventListener("click", ()=>{
            navigator.clipboard.writeText(quoteText.innerHTML);
        })
    }

newbtn.addEventListener("click", randomQuote);