const textPresentation = document.querySelector(".text").textContent;
let i = 0;

function showText() {
    const presentation = document.querySelector(".layer-presentation");
    presentation.innerHTML += textPresentation[i];
    i++;
    if (textPresentation[i] === undefined) {
        clearInterval(intervalId);
    }

  

}


const intervalId = setInterval(showText, 8);


