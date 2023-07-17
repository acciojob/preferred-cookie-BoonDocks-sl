//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  // Get the form and input elements
  const form = document.querySelector("form");
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");

  // Set the initial values based on stored preferences or default values
  fontSizeInput.value = getCookie("fontsize") || "16";
  fontColorInput.value = getCookie("fontcolor") || "#000000";

  // Apply the font size and color on page load
  applyFontStyles();

  // Event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the selected values
    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    // Set the preferences as cookies
    setCookie("fontsize", fontSize);
    setCookie("fontcolor", fontColor);

    // Apply the font size and color
    applyFontStyles();
  });

  // Function to apply the font size and color
  function applyFontStyles() {
    document.documentElement.style.setProperty("--fontsize", `${fontSizeInput.value}px`);
    document.documentElement.style.setProperty("--fontcolor", fontColorInput.value);
  }

  // Function to set a cookie
  function setCookie(name, value, days = 365) {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/`;
  }

  // Function to get a cookie value
  function getCookie(name) {
    const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
    for (const cookie of cookies) {
      if (cookie.startsWith(name + "=")) {
        return decodeURIComponent(cookie.substring(name.length + 1));
      }
    }
    return null;
  }
});
