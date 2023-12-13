document.addEventListener("DOMContentLoaded", function () {
    var texts = [
        "ahoj",
        "jak se mas",
        "ja se mam docela dobre",
        "Vše nejlepší do nového roku!"
    ]
    var textToType = texts[Math.floor(Math.random() * texts.length)]
    var typedTextElement = document.getElementById("prani");
    function typeText() {
        var index = 0;
        var typingInterval = setInterval(function () {
            typedTextElement.textContent += textToType[index];
            index++;
            if (index === textToType.length) {
                clearInterval(typingInterval);
            }
        }, 60);
    }
    typeText();
});