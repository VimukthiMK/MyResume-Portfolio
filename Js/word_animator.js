document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typing-text');
    const textToType = "And I'm a Software Developer";
    let index = 0;
      
            function typeAndErase() {
              const currentText = textElement.innerText;
              const speed = 100; // Animation speed 
              const pauseTime = 1000; // Pause time 
      
              if (index <= textToType.length) {
                textElement.innerText = textToType.slice(0, index);
                index++;
              } else {
                index = 0;
                setTimeout(typeAndErase, pauseTime);
                return; 
              }
      
              setTimeout(typeAndErase, speed);
            }
      
            // Start the typing and erasing animation
            typeAndErase();
});
    