# 🍿 Movie Enthusiast Database

A sleek, responsive, and easy-to-use web application built with a classic **LAMP/WAMP stack** (HTML, CSS, JavaScript, PHP, and MySQL). 

This project allows users to submit their favorite movies (including title, genre, release year, a short review, and a poster image) into a centralized database, and view all submitted movies in a beautiful digital gallery.

---

## ✨ Features
- **Add Movies:** A user-friendly form to input movie details and submit them directly to the database.
- **Dynamic Movie Gallery:** A dedicated page (`movies.html`) that fetches and displays all movies from the database asynchronously (without page reloads).
- **Movie Posters:** Supports displaying movie posters inside the card layouts by simply providing an image URL.
- **Modern UI/UX:** Styled completely from scratch with pure CSS featuring a custom dark mode, gradient highlights, custom emojis as favicons, and responsive flex/grid layouts.
- **Security Basics:** Preventative coding measures in place for Cross-Site Scripting (XSS) when rendering data.

## 🛠️ Technology Stack
- **Frontend:** HTML5, CSS3 (Vanilla), JavaScript (Vanilla, Fetch API) 
- **Backend:** PHP 8+
- **Database:** MySQL / MariaDB
- **Server Environment:** XAMPP / WAMP

---

## 🚀 Getting Started (Installation)

To run this project locally on your machine, you will need a local server environment like [XAMPP](https://www.apachefriends.org/index.html).

### 1. Move the Project
Place the entire `movie_app` folder inside your XAMPP `htdocs` directory (typically located at `C:\xampp\htdocs\`).

### 2. Start Your Server
Open the XAMPP Control Panel and start both **Apache** and **MySQL**.
*(Note: By default, the app expects MySQL to run on port `3307`. If yours runs on the default `3306`, you can change this inside `db.php`!).*

### 3. Database Setup
You need to create the database tables before the app can save any movies. There are two ways to do this:

#### Option A: The Auto-Setup Script (Recommended)
1. Open your browser and navigate to `http://localhost/movie_app/setup.php`.
2. The script will automatically connect to your local MySQL server, construct the required `movies` table (including the `poster_url` column), and configure it for you. 

#### Option B: Manual Setup (via phpMyAdmin)
1. Open phpMyAdmin (usually `http://localhost/phpmyadmin`).
2. Copy and run the SQL commands found inside the `database.sql` file to manually build the database and table schema.

### 4. Run the App
Once the database is ready, you can start using the application:
- **Add a Movie:** `http://localhost/movie_app/index.html`
- **View the Gallery:** `http://localhost/movie_app/movies.html`

---

## 📁 File Structure

- `index.html` - The main entry point containing the form to add a movie.
- `movies.html` - The gallery page displaying all movies in the database.
- `style.css` - Contains all visual styling, layout definitions, and colors.
- `script.js` - Handles all frontend logic, intercepting form submissions, and dynamically creating the movie cards based on the JSON payload.
- `db.php` - The secure connection bridge pointing PHP to the MySQL database.
- `add_movie.php` - The backend API endpoint that sanitizes POST requests and inserts new movies into the database.
- `get_movies.php` - The backend API endpoint that queries the database and sends all movie records back to the frontend to be read.
- `setup.php` - An automated utility script to quickly generate the required database tables.
- `database.sql` - A reference file containing the raw SQL schema layout.
