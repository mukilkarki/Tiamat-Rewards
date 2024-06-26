// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const editProfileForm = document.getElementById('edit-profile-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            const user = getUser(username, password);
            
            if (user) {
                login(user);
            } else {
                alert('Invalid login');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('signup-username').value;
            const password = document.getElementById('signup-password').value;
            const email = document.getElementById('signup-email').value;
            
            // Check if username is already taken
            if (isUsernameTaken(username)) {
                alert('Username is already taken. Please choose another.');
                return;
            }
            
            // Register the user
            const newUser = { username, password, email };
            registerUser(newUser);
            login(newUser); // Automatically login after signing up
            
            // Redirect to profile page or any other page
            window.location.href = 'profile.html';
        });
    }

    // Other existing functionalities (profile editing, etc.) remain unchanged
});

// Function to check if username is already taken
function isUsernameTaken(username) {
    const users = getUsers();
    return users.some(user => user.username === username);
}

// Function to register a new user
function registerUser(user) {
    let users = getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

// Function to get users from localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

// Function to get user by username and password
function getUser(username, password) {
    const users = getUsers();
    return users.find(user => user.username === username && user.password === password);
}

// Function to handle login
function login(user) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
}

// Function to handle logout
function logout() {
    localStorage.removeItem('loggedInUser');
                }
