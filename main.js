// JavaScript code for the Best Practices for Version Control with Git: A Beginner's Guide

// Function to display an alert when the page is loaded
function showAlert() {
  alert("Welcome to the Beginner's Guide for Version Control with Git!");
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  // Get the input values from the form
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  // Perform form validation
  if (nameInput.value === "" || emailInput.value === "") {
    alert("Please fill in all the fields!");
    return;
  }

  // Display a success message
  alert("Thank you for submitting the form!");
  // Reset the form
  event.target.reset();

  // Log the form submission to the console
  console.log("Name: " + nameInput.value);
  console.log("Email: " + emailInput.value);
  
}

// Add event listeners when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Display alert on page load
  showAlert();

  // Add event listener for form submission
  const form = document.getElementById("myForm");
  form.addEventListener("submit", handleSubmit);
});
