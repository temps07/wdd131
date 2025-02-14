// Function to save message to localStorage
function saveMessage(name, email, message) {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push({ name, email, message });
    localStorage.setItem("messages", JSON.stringify(messages));
}

// Function to load messages from localStorage
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    const messageList = document.getElementById("message-list").querySelector("ul");
    messageList.innerHTML = messages.map(msg => `
        <li>
            <strong>${msg.name}</strong> (${msg.email}): ${msg.message}
        </li>
    `).join("");
}

// Event listener for form submission
document.getElementById("messageForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    saveMessage(name, email, message);
    loadMessages();
    document.getElementById("messageForm").reset();
});

// Load messages when the page loads
document.addEventListener("DOMContentLoaded", loadMessages);