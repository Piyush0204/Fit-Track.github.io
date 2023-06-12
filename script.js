document.addEventListener("DOMContentLoaded", function() {
  var menuToggle = document.getElementById("menu-toggle");
  var menuOptions = document.querySelector(".menu-options");
  var menuButton = document.querySelector(".menu-button");
  var menu = document.querySelector(".menu");

  menuToggle.addEventListener("change", function() {
    if (menuToggle.checked) {
      menuOptions.style.left = "0";
      menuButton.style.display = "none";
    } else {
      menuOptions.style.left = "-300px";
      menuButton.style.display = "block";
    }
  });

  // Close the menu when clicking outside
  document.addEventListener("click", function(event) {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
      menuToggle.checked = false;
      menuOptions.style.left = "-300px";
      menuButton.style.display = "block";
    }
  });
});



