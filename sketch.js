const button = document.createElement("button");
button.textContent = "Continue";

// Style the button
button.style.backgroundColor = "pink";
button.style.color = "black";
button.style.backgroundColor.stroke = 'black';
button.style.padding = "15px 30px";
button.style.border = "none";
button.style.borderRadius = "10px";
button.style.cursor = "pointer";
button.style.fontSize = "18px";
button.style.fontWeight = "bold";
button.style.display = "block";
button.style.margin = "20vh auto";

// Add click event to navigate to a new screen
button.addEventListener("click", () => {
    window.location.href = "letter.html"; // Change this to your desired URL
});

// Append button to the body
document.body.appendChild(button);

