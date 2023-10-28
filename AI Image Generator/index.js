const generateForm = document.querySelector(".generate-form");
const imagegallery = document.querySelector(".images");
const OPENAI_API_KEY = "enter the api key here";
let isimagegenerating = false;

const updateImagecard = (imageDataArray) => {
    imageDataArray.forEach((imgObject, index) => {
        const imgcard = imagegallery.querySelectorAll(".img-card")[index];
        const imageelement = imgcard.querySelector("img");
        const downloadbtn = imgcard.querySelector(".download-btn");

        //Set the image source to the ai generated image data
        const aigeneratedimg = `data:image/jpeg;base64,${imgObject.b64_json}`;
        imageelement.src = aigeneratedimg;

        //when the image is loaded remove the image class
        imageelement.onload = () => {
            imgcard.classList.remove("loading");
            downloadbtn.setAttribute("href", aigeneratedimg);
            downloadbtn.setAttribute("download",`${new Date().getTime()}.jpg`);
        }
    });
}

const generateAIimages = async (userPrompt, imagequantity) => {
    try {
        const response = await fetch("https://api.openai.com/v1/images/generations",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                prompt: userPrompt,
                n: parseInt(imagequantity),
                size: "512x512",
                response_format: "b64_json"
            })
        });

        if(!response.ok) throw new Error("Somthing is wrong please try again!");
        const { data } = await response.json(); //get data from response
        updateImagecard([...data]);
    } catch (error) {
        alert(error.massage);
    }finally{
        isimagegenerating = false;
    }
}

const handelSubmissionForm = (e) => {
    e.preventDefault;
    if(isimagegenerating) return;
    isimagegenerating = true;
    //get input from user
    const userPrompt = e.srcElement[0].value;
    const imagequantity = e.srcElement[1].value;

    //Creating html markup for image card using loading state

    const imageCards = Array.from({length: imagequantity}, ()=>
        `<div class="img-card loading">
        <img src="images/loader.svg" alt="Image-1">
        <a href="#" class="download-btn">
            <img src="images/download.svg" alt="download">
        </a>
    </div>`
    ).join("");

    imagegallery.innerHTML = imageCards;
    generateAIimages(userPrompt, imagequantity);
}

generateForm.addEventListener("submit", handelSubmissionForm);