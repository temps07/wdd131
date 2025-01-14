// Get the current year and set it in the span with id "currentyear"
const currentYear = new
Date().getFullYear();
document.getElementById("currentyear").textContent = `©${currentYear}`;

// Get the last modified date of the document and set it in the paragraph with id "lastModified"
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `LastModified: ${lastModified}`;