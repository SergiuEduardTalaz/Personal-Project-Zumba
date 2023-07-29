// Functia pentru a schimba culoarea de fundal a paginii aleatoriu
function changeBackgroundColor() {
    const colors = ["#e1f5fe", "#64b5f6", "#b2ebf2", "#90caf9", "#42a5f5"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }
  
  // Functia pentru animatii si artificii artistice
  function addArtisticEffects() {
    const zumbaLogo = document.querySelector("img");
    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll("nav ul li a");
  
    // Animatie pentru logo - rotatie la un interval de 3 secunde
    let rotation = 0;
    function rotateLogo() {
      rotation += 360;
      zumbaLogo.style.transform = `rotate(${rotation}deg)`;
    }
  
    setInterval(rotateLogo, 3000);
  
    // Animatie pentru header la hover
    header.addEventListener("mouseenter", () => {
      header.style.backgroundColor = "#4caf50"; // Green color on hover
    });
  
    header.addEventListener("mouseleave", () => {
      header.style.backgroundColor = "#1976d2"; // Default blue color
    });
  
    // Animatie pentru link-uri la hover
    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        link.style.color = "#ff4081"; // Pink color on hover
      });
  
      link.addEventListener("mouseleave", () => {
        link.style.color = "#fff"; // Default white color
      });
    });
  }
  
  // Așteaptă până când toate resursele sunt încărcate înainte de a aplica efectele
  document.addEventListener("DOMContentLoaded", () => {
    addArtisticEffects();
  
    // Schimbarea automată a culorii de fundal la fiecare 5 secunde (5000 ms)
    setInterval(changeBackgroundColor, 5000);
  });  