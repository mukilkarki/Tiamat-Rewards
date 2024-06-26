// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const editProfileForm = document.getElementById('edit-profile-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simulating a text file read
            const userData = localStorage.getItem('users');
            const users = userData ? JSON.parse(userData) : [];
            
            const user = users.find(user => user.username === username && user.password === password);
            
            if (user) {
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                window.location.href = 'profile.html';
            } else {
                alert('Invalid login');
            }
        });
    }

    if (editProfileForm) {
        editProfileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('edit-username').value;
            const email = document.getElementById('edit-email').value;
            
            let user = JSON.parse(localStorage.getItem('loggedInUser'));
            if (user) {
                user.username = username;
                user.email = email;
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                
                // Simulating a text file write
                let users = JSON.parse(localStorage.getItem('users'));
                users = users.map(u => u.username === user.username ? user : u);
                localStorage.setItem('users', JSON.stringify(users));
                
                window.location.href = 'profile.html';
            }
        });
    }

    if (window.location.pathname.includes('profile.html')) {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        if (user) {
            document.getElementById('profile-username').innerText = `Username: ${user.username}`;
            document.getElementById('profile-email').innerText = `Email: ${user.email}`;
        } else {
            window.location.href = 'login.html';
        }
    }

    if (window.location.pathname.includes('edit-profile.html')) {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        if (user) {
            document.getElementById('edit-username').value = user.username;
            document.getElementById('edit-email').value = user.email;
        } else {
            window.location.href = 'login.html';
        }
    }
});
