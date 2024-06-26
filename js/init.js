// init.js
document.addEventListener('DOMContentLoaded', function() {
    const initialUsers = [
        { username: 'user', password: 'pass', email: 'user@example.com' }
    ];
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(initialUsers));
    }
});
