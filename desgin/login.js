// Add your JavaScript code here
const loginForm = document.getElementById('loginForm');
const questionsForm = document.getElementById('questions');
const resultDiv = document.getElementById('result');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve user login details
    const userType = document.getElementById('userType').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login process
    // In a real application, you would authenticate the user on the server
    // and then redirect to appropriate page based on user type
    if (userType === 'parent' && username === 'parent' && password === 'parent') {
        // Parent login
        resultDiv.textContent = "Parent logged in successfully!";
        // Hide questions form for parent
        questionsForm.style.display = 'none';

        setTimeout(() => {
            // Redirect to YouTube.com after 2 hours
            window.location.href = 'parent.html';
        }); // Redirect after 2 hours

    } else if (userType === 'child' && username === 'garvkadia' && password === 'garvkadia') {
        // Child login
        resultDiv.textContent = "Child logged in successfully!";
        // Show questions form for child
        questionsForm.style.display = 'block';
    } else {
        // Incorrect login
        resultDiv.textContent = "Incorrect username or password.";
    }
});

questionsForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve user answers
    const answers = [
        document.getElementById('answer1').value.trim(),
        document.getElementById('answer2').value.trim(),
        document.getElementById('answer3').value.trim(),
        document.getElementById('answer4').value.trim(),
        document.getElementById('answer5').value.trim()
    ];

    // Define correct answers
    const correctAnswers = ["Paris", "Harper Lee", "H2O", "12", "Alexander Fleming"];

    // Check if all answers are correct
    const allCorrect = answers.every((answer, index) => {
        return answer.toLowerCase() === correctAnswers[index].toLowerCase();
    });

    // Display result and unlock YouTube access if all answers are correct
    if (allCorrect) {
        resultDiv.textContent = "All answers are correct. Website access unlocked for 2 hours.";
        setTimeout(() => {
            // Redirect to YouTube.com after 2 hours
            window.location.href = 'home.html';
        }); // Redirect after 2 hours
    } else {
        resultDiv.textContent = "Incorrect answer(s). Website access remains locked.";
    }
});

// Open new tab with additional content for child
window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('userType').value === 'child') {
        window.open('https://example.com', '_blank');
    }
});
