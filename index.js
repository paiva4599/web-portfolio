const { response } = require("express");

function copyEmail(){
    let element = document.getElementById("email");
    let copyMessage = document.getElementById("copyMessage")

    navigator.clipboard.writeText(element.innerText || element.textContent)
    .then(() => {
        copyMessage.style.display = "inline";
        setTimeout(() => {
            copyMessage.style.display = "none";
        }, 2000);
    })
}

function downloadCV(){
    let filePath = "Curriculo - Lucca Paiva.pdf"
    
    fetch(filePath)
    .then(response => response.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filePath.split('/').pop();
        a.click();
        window.URL.revokeObjectURL(url);
    })
}