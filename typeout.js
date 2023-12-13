document.addEventListener("DOMContentLoaded", function () {
    type_text();
});

var typingInterval;
function type_text() {
    clearInterval(typingInterval);
    var texts = [
        // "Ať tvé novoroční předsevzetí nevyhasne tak rychle jako moje motivace k vytváření nových vtipů!",
        "Šťastný Nový rok! & Ať tvé nápady rostou jako houby po dešti, a ne jako houby v mé staré kuchyni!",
        // "Ať tvoje novoroční předsevzetí nezmizí tak rychle jako zájem na prvním rande!",
        // "Přeji ti víc spánku než emoji na tvé klávesnici!",
        // "Ať tvé novoroční předsevzetí trvá déle než baterie ve tvém mobilu!",
        // "Ať tvůj rok 2024 bude tak světlý jako obrazovka tvého telefonu v 3 ráno!",
        // "Vše nejlepší do nového roku!",
        // "Šťastný Nový rok! Ať tvé kreslení nevyvolává tolik otázek jako mé pokusy o vysvětlení technologie mé babičce!",
    ]
    var textToType = texts[Math.floor(Math.random() * texts.length)]
    var typedTextElement = document.getElementById("prani");
    typedTextElement.innerHTML = "";
    var index = 0;
    typingInterval = setInterval(function () {
        if (textToType[index] == "&") {
            typedTextElement.innerHTML += '<br><br>';
            index++;
        } else {
            typedTextElement.textContent += textToType[index];
            index++;
            if (index === textToType.length) {
                clearInterval(typingInterval);
            }
        }
    }, 60);
}