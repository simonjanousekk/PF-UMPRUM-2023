// Array of SVG files (replace with your actual file paths)
var svgFiles = [
    './favicon_images/circle.svg',
    './favicon_images/square.svg',
    './favicon_images/triangle_one.svg',
    './favicon_images/triangle_two.svg',
];

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeFaviconEverySecond() {
    var faviconLink = document.getElementById('favicon');
    var currentIndex = 0;


    setInterval(function () {
        faviconLink.href = svgFiles[currentIndex];
        currentIndex = (currentIndex + 1) % svgFiles.length;


    }, 300);
}
changeFaviconEverySecond();