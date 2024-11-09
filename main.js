// Ensure the script runs after the document is ready
$(document).ready(function () {
    // Smooth scroll to the footer section
    $(".navbar ul li a[href='#contact']").on("click", function (e) {
      e.preventDefault(); // Prevent the default link behavior
      const footer = $("footer").offset().top; // Get the position of the footer
      $("html, body").animate({ scrollTop: footer }, 900); // Smooth scroll to the footer
    });
  });
  