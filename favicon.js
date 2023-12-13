        // Array of SVG files (replace with your actual file paths)
        var svgFiles = [
            '/favicon_images/circle.svg',
            '/favicon_images/square.svg',
            '/favicon_images/triangle_one.svg',
            '/favicon_images/triangle_two.svg',

            // Add more file paths as needed
        ];

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        // Function to change the favicon every second
        function changeFaviconEverySecond() {
            var faviconLink = document.getElementById('favicon');
            var currentIndex = 0;


            setInterval(function () {


                // Update the href attribute with the next SVG file
                faviconLink.href = svgFiles[currentIndex];
                
                // Move to the next SVG file (loop back to the beginning if at the end)
                currentIndex = (currentIndex + 1) % svgFiles.length;

       
            }, 300); // Change every second (adjust as needed)
        }
        

        changeFaviconEverySecond();

        function changeFaviconColor(color) {

            var faviconLink = document.getElementById('favicon');

            // Fetch the SVG file
            fetch(faviconLink.href)
                .then(response => response.text())
                .then(svgText => {
                    // Modify the SVG content to change the color
                    var modifiedSvg = svgText.replace(/fill=".*?"/g, 'fill="' + color + '"');

                    // Create a Blob from the modified SVG content
                    var blob = new Blob([modifiedSvg], { type: 'image/svg+xml' });

                    // Create a data URL from the Blob
                    var dataUrl = URL.createObjectURL(blob);

                    // Update the href attribute of the favicon link
                    faviconLink.href = dataUrl;
                });
        }