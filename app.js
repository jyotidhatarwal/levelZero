var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var outputText = document.querySelector("#output-txt");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function constructURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Error occured--> ",error);
}

function clickHandler() {
    var inputText = txtInput.value;
    var url = constructURL(inputText);
    fetch(url)
    .then(response => response.json())
    .then(json => {
        outputText.innerText = json.contents.translated;
        
    })
    .catch(errorHandler);
}



btnTranslate.addEventListener("click", clickHandler);
