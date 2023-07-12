function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("open");
  }
  
  // Hide "My Work" and "Contact Me" sections initially
  document.getElementById("work").style.display = "none";
  document.getElementById("contact").style.display = "none";
  
  // Toggle between sections when the image is clicked
  function toggleSection(sectionId) {
    var sections = document.querySelectorAll("section");
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
    document.getElementById(sectionId).style.display = "block";
  }
