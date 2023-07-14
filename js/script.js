function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("open");
}

// Hide "My Work" and "Contact Me" sections initially
document.getElementById("work").style.display = "none";
document.getElementById("work-quote").style.display = "none";
document.getElementById("contact").style.display = "none";
document.getElementById("contact-quote").style.display = "none";

// Toggle between sections when the image is clicked
function toggleSection(sectionId) {
  var sections = document.querySelectorAll("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  document.getElementById(sectionId).style.display = "block";
  
  // Update the footer based on the selected section
  var footer = document.querySelector("footer");
  var footerQuotes = footer.querySelectorAll("div");
  for (var j = 0; j < footerQuotes.length; j++) {
    footerQuotes[j].style.display = "none";
  }
  var selectedQuote = document.getElementById(sectionId + "-quote");
  if (selectedQuote) {
    selectedQuote.style.display = "block";
  }
}
