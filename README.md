# Tiamat Rewards

Tiamat Rewards is a simple web application that demonstrates a basic login system, user profile page, and profile editing functionality. This project uses Bootstrap for responsive design and local storage to simulate user data management. 

## Project Structure Tiamat Rewards/ 
├── index.html 
├── login.html 
├── profile.html 
├── edit-profile.html 
├── css/ 
│   └── styles.css 
├── js/ 
│   ├── init.js 
│   └── scripts.js 
└── README.md## Features

- **Login System:** Users can log in with their username and password.
- **Profile Page:** Users can view their profile information.
- **Edit Profile:** Users can edit their username and email.

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo2. Initialize User DataOpen index.html in your browser to initialize the user data. This will run the init.js script, which sets up the initial user data in local storage.3. Open the Login PageNavigate to login.html in your browser to log in with the initial user credentials:Username: userPassword: pass4. View and Edit ProfileAfter logging in, you will be redirected to profile.html where you can view your profile information. You can then navigate to edit-profile.html to edit your profile details.UsageLoginOpen login.html in your browser.Enter the username and password:Username: userPassword: passClick the login button.View ProfileAfter logging in, you will be redirected to profile.html where you can view your username and email.Edit ProfileOn the profile page, click the "Edit Profile" button.On the edit profile page (edit-profile.html), update your username and email.Click the "Save Changes" button to save your updated profile information.Hosting on GitHub PagesCommit your changes and push them to your GitHub repository:git add .
git commit -m "Initial commit"
git push origin mainGo to your GitHub repository, click on "Settings", then "Pages", and choose the branch to deploy (e.g., main).Access your site via the provided GitHub Pages URL.Important NotesSecurity: This example uses localStorage and is not secure. For a real-world application, you should use a proper backend server with secure authentication and data storage.Scalability: This approach won't scale for multiple users and concurrent accesses. Use a database and server-side scripting (e.g., Node.js, PHP) for better management.Educational Purpose: This is for educational purposes to understand the basics of web development with front-end technologies.ContributingIf you'd like to contribute to this project, please fork the repository and submit a pull request.LicenseThis project is licensed under the MIT License. See the LICENSE file for details.
