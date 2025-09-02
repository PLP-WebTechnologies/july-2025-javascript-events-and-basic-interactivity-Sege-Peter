// ====================
// Event Handling Script
// ====================

// Greeting Feature
const greetBtn = document.getElementById("greetBtn");
const nameInput = document.getElementById("nameInput");
const greetingMessage = document.getElementById("greetingMessage");

greetBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name === "") {
    greetingMessage.textContent = "Please enter your name first 😊";
  } else {
    greetingMessage.textContent = `Hello, ${name}! 🌟 Welcome to the hub!`;
  }
});

// ====================
// Custom Form Validation
// ====================
const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

signupForm.addEventListener("submit", function(event) {
  event.preventDefault(); // stop default HTML5 validation
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Custom validation rules
  if (username.length < 3) {
    formMessage.textContent = "⚠️ Username must be at least 3 characters long.";
    formMessage.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "⚠️ Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  if (password.length < 6) {
    formMessage.textContent = "⚠️ Password must be at least 6 characters.";
    formMessage.style.color = "red";
    return;
  }

  // Success Message
  formMessage.textContent = `✅ Thanks ${username}, you’re now subscribed!`;
  formMessage.style.color = "green";
  signupForm.reset();
});

// ====================
// Random Quote Generator Feature
// ====================
const quotes = [
  "💡 Creativity is intelligence having fun. – Albert Einstein",
  "🌱 Small steps lead to big changes.",
  "🚀 Don’t watch the clock; do what it does. Keep going.",
  "✨ Design is not just what it looks like, but how it works. – Steve Jobs",
  "🔥 Your limitation—it’s only your imagination."
];

const quoteBtn = document.getElementById("quoteBtn");
const quoteDisplay = document.getElementById("quoteDisplay");

quoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
});
