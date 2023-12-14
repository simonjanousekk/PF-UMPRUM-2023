document.addEventListener("DOMContentLoaded", function () {
    type_text();
});

var typingInterval;
var textToType;
function type_text() {
    clearInterval(typingInterval);
    prev_textToType = textToType;
    var texts = [
        "Ať tvé novoroční předsevzetí nevyhasne tak rychle jako moje motivace k vytváření nových vtipů!",
        "Šťastný nový rok! Ať tvé nápady rostou jako houby po dešti, a ne jako houby v mé staré kuchyni!",
        "Ať tvoje novoroční předsevzetí nezmizí tak rychle jako zájem na prvním rande!",
        "Přeji ti víc spánku než emoji na tvé klávesnici!",
        "Ať tvé novoroční předsevzetí trvá déle než baterie ve tvém mobilu!",
        "Ať tvůj rok 2024 bude tak světlý jako obrazovka tvého telefonu v 3 ráno!",
        "Vše nejlepší do nového roku!",
        "Šťastný Nový rok! Ať tvé kreslení nevyvolává tolik otázek jako mé pokusy o vysvětlení technologie mé babičce!",
        "Přeji vám nový rok plný inspirace a aspoň jednoho vyučujícího, který přehlédne, že jste neodevzdali práce včas!",
        "Ať jsou vaše skici vždy rychlejší než internetové připojení ve škole!",
        "Ať vás nový rok překvapí víc než poslední minuta před odevzdáním semestrální práce!",
        "Přeji vám, abyste měli v novém roce víc kreativních chvil než nezodpovězených e-mailů!",
    ]
    while (textToType == prev_textToType) {
        textToType = texts[Math.floor(Math.random() * texts.length)]
    }
    var typedTextElement = document.getElementById("prani");
    typedTextElement.innerHTML = "";
    var index = 0;
    typingInterval = setInterval(function () {
        typedTextElement.textContent += textToType[index];
        index++;
        if (index === textToType.length) {
            clearInterval(typingInterval);
        }
    }, 60);
}