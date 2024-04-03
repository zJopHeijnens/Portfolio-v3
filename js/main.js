window.onload = function() {
    var image = document.querySelector('.main-page-foto-jop');
  
    // Functie om te controleren of de tekst de afbeelding overlapt
    function checkTextOverlap() {
      var text = document.querySelector('.m-scroll h1');
      var textRect = text.getBoundingClientRect();
      var imageRect = image.getBoundingClientRect();
  
      // Controleren op overlap van de tekst met de afbeelding
      if (
        textRect.left < imageRect.right &&
        textRect.right > imageRect.left &&
        textRect.top < imageRect.bottom &&
        textRect.bottom > imageRect.top
      ) {
        // Als overlap wordt gedetecteerd, verander de kleur van de tekst
        text.style.color = '#D9D9D9'; // Aanpassen naar gewenste kleur
      } else {
        // Als er geen overlap is, behoud de standaardkleur van de tekst
        text.style.color = 'black'; // Aanpassen naar gewenste standaardkleur
      }
    }
  
    // Interval instellen om regelmatig te controleren op overlap
    setInterval(checkTextOverlap, 1000); // Controleer elke 100 milliseconden (pas dit aan indien nodig)
  };