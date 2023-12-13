document.addEventListener("DOMContentLoaded", function () {
    type_text();
});


function type_text() {
    console.log("typing");
    var texts = [
        "ahoj",
        "jak se mas",
        "ja se mam docela dobre",
        "Vše nejlepší do nového roku!"
    ]
    var textToType = texts[Math.floor(Math.random() * texts.length)]
    var typedTextElement = document.getElementById("prani");
    typedTextElement.innerHTML = "";
    var index = 0;
    var typingInterval = setInterval(function () {
        typedTextElement.textContent += textToType[index];
        index++;
        if (index === textToType.length) {
            clearInterval(typingInterval);
        }
    }, 60);
}