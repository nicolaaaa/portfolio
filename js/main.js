document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

  fetch("modules/menu.html")
      .then(response => response.text()) // Corrected to return the text
      .then(data => {
        document.getElementById("menu").innerHTML = data;

        // Define the menu button and menu state variable
        const menuBtn = document.querySelector(".menu-btn");
        let showMenu = false;

        // Query for the menu elements
        const menu = document.querySelector(".menu");
        const menuNav = document.querySelector(".menu-nav");
        const menuBranding = document.querySelector(".menu-branding");
        const navItems = document.querySelectorAll(".nav-item");

        // Add event listener for menu button click
        menuBtn.addEventListener("click", function() {
          toggleMenu(menu, menuBranding, menuNav, navItems, menuBtn, showMenu);
          showMenu = !showMenu; // Toggle the state after the function call
        });
        // Add 'current' class to the active nav item
        const currentPath = window.location.pathname.split('/').pop();
        navItems.forEach(item => {
          const link = item.querySelector("a");
          if (link && link.getAttribute("href") === currentPath) {
            item.classList.add("current");
          }
        });
      })
      .catch(error => console.error('Error fetching the menu:', error));

// });

// document.addEventListener("DOMContentLoaded", function() {
    // Function to calculate age based on birthdate
    function calculateAge(birthdate) {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        // If the birthdate hasn't occurred yet this year, subtract one from age
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    // Set your birthdate
    const myBirthdate = "1995-08-22";
    const age = calculateAge(myBirthdate);

    // Update the span with id="age"
    const ageSpan = document.getElementById("age");
    if (ageSpan) {
        ageSpan.textContent = age;
    } else {
        console.error('Element with id "age" not found.');
    }


});

function toggleMenu(menu, menuBranding, menuNav, navItems, menuBtn, showMenu) {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
  }
}
