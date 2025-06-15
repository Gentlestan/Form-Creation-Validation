document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("registration-form")
    const feedbackDiv = document.getElementById("form-feedback")

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        let isValid = true;
        let messages = [];
        const username = document.getElementById("username").value.trim()
        if (username.length < 3){
            isValid = false;
            messages.push("Username must be greater than three characters")
        }
            
        const email = document.getElementById("email").value.trim()
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must contain both '@' and '.' characters.")
        }
        const password = document.getElementById("password").value.trim()
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must have at least 8 characters")
        }
        feedbackDiv.style.display = "block";
    if(isValid){
        feedbackDiv.textContent = "Registration successful";
        feedbackDiv.style.color = "#28a745";

    } else {
        feedbackDiv.innerHTML = messages.join("<br>")
        feedbackDiv.style.color = "#dc3545";
    }
        
    })
    
})