document.addEventListener("DOMContentLoaded", function () {
    type_text();
});

var typingInterval;
var textToType;
function type_text() {
    clearInterval(typingInterval);
    prev_textToType = textToType;
    var texts = [
        "Ať vaše novoroční předsevzetí nevyhasnou tak rychle jako moje motivace k vytváření nových vtipů!",
        "Šťastný nový rok! Ať tvé nápady rostou jako houby po dešti, a ne jako houby v mé staré kuchyni!",
        "Ať tvoje novoroční předsevzetí nezmizí tak rychle jako zájem na prvním rande!",
        "Přeji ti víc spánku než emoji na tvé klávesnici!",
        "Ať vaše novoroční předsevzetí vydrží déle než baterie ve vašem mobilu!",
        "Ať je tvůj rok 2024 tak světlý jako obrazovka tvého telefonu ve 3 ráno!",
        "Vše nejlepší do nového roku!",
        "Šťastný nový rok! Ať tvé kreslení nevyvolává tolik otázek jako mé pokusy o vysvětlení technologie mé babičce!",
        "Přeji vám nový rok plný inspirace a alespoň jednoho vyučujícího, který přehlédne, že jste neodevzdali práci včas!",
        "Ať jsou vaše skici vždy rychlejší než internetové připojení ve škole!",
        "Ať vás nový rok překvapí víc než poslední minuta před odevzdáním semestrální práce!",
        "Přeji vám, abyste měli v novém roce víc kreativních chvil než nezodpovězených e-mailů!",
        "Make your New Year's resolution last longer than your mobile phone battery!",
        "May your 2024 be as bright as your phone screen at 3 a.m.!",
        "May the upcoming year surprise you more than the last minute before deadline!",
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