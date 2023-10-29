const filterButtons = document.querySelectorAll(".buttons button");
const filterCards = document.querySelectorAll(".cards .card");

console.log(filterCards);

const filtercard = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    
    filterCards.forEach(card => {
        card.classList.add("hide");

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    });
}

filterButtons.forEach(button => button.addEventListener("click", filtercard));