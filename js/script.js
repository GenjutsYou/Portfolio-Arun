function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("open");
}

//* Hide "My Work" and "Contact Me" sections initially
document.getElementById("work").style.display = "none";
document.getElementById("work-quote").style.display = "none";
document.getElementById("contact").style.display = "none";
document.getElementById("contact-quote").style.display = "none";

//* Toggle between sections when the image is clicked
function toggleSection(sectionId) {
  var sections = document.querySelectorAll("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  document.getElementById(sectionId).style.display = "block";

  //* Update the footer based on the selected section
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

//* Function to show the div containers for applications
function showContainer(containerId) {
  var container = document.getElementById(containerId);
  if (container) {
    if (container.style.display === "none") {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  }
}

//* Function to show container content when the gifs are clicked
function showContainerContent(event, containerId) {
  var contentContainer = document.getElementById(containerId);
  if (contentContainer) {
    if (contentContainer.style.display === "none") {
      contentContainer.style.display = "block";
    } else {
      contentContainer.style.display = "none";
    }
  }
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
}

//* Function to close the content container when the "Close" header is clicked
function closeContentContainer(event, containerId) {
  var contentContainer = document.getElementById(containerId);
  if (contentContainer) {
    contentContainer.style.display = "none";
  }
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
}

// Function to simulate the typing animation
function typeText(element, text) {
  let index = 0;

  // Clear the existing text before typing animation starts
  element.textContent = '';

  function typeNextCharacter() {
      if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
          setTimeout(typeNextCharacter, 40);
      }
  }

  typeNextCharacter();
}

// Trigger the typing animation for the 'about' section when the page loads
document.addEventListener('DOMContentLoaded', function () {
  const aboutSection = document.getElementById('about');
  const aboutParagraph = aboutSection.querySelector('p');

  // Call the typing animation function for the 'about' section text
  typeText(aboutParagraph, aboutParagraph.textContent);

  // Call the typing animation function for the 'contact' section text
  const contactSection = document.getElementById('contact');
  const contactParagraph = contactSection.querySelector('p');

  // Call the typing animation function for the 'contact' section text
  typeText(contactParagraph, contactParagraph.textContent);
});


