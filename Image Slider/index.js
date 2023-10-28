const initslider = () => {
    const slidebuttons = document.querySelectorAll(".slide-wrapper .slide-button");
    const imgsList = document.querySelector(".slide-wrapper .img-list");
    const scrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = scrollbar.querySelector(".slider-thumb");
    const maxScroll = imgsList.scrollWidth - imgsList.clientWidth;

    slidebuttons.forEach(button => {
        button.addEventListener("click", ()=>{
            const direction = button.id === "left-arrow" ? -1 : 1;
            const scrollAmount = imgsList.clientWidth * direction;
            imgsList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });

    function updateScrollbar(){
        const scrollPosition = imgsList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScroll) * (scrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`
    }

    imgsList.addEventListener("scroll", () => {
        slidebuttons[0].style.display = imgsList.scrollLeft <= 0? "none" : "block";
        updateScrollbar();
    });

    //handel scrollbar thumbdrag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startx = e.clientX;
        const thumbposition = scrollbarThumb.offsetLeft;
        const maxthumbposition = scrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

        //update thumb position on mouse move
        const handleMousemove = (e) => {
            const deltax = e.clientX - startx;
            const newThumbposition = thumbposition + deltax;

            //ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxthumbposition, newThumbposition));
            const scroll_Position = (boundedPosition/maxthumbposition) * maxScroll;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imgsList.scrollLeft = scroll_Position;
        }

        //remove event listner on mouse up
        const handleMousemoveUp = () => {
            document.removeEventListener("mousemove",handleMousemove);
            document.removeEventListener("mouseup", handleMousemoveUp);
        } 

        document.addEventListener("mousemove", handleMousemove);
        document.addEventListener("mouseup", handleMousemoveUp);
    })
}
window.addEventListener("resize", initslider);
window.addEventListener("load", initslider);