// Document event listener ensuring the script runs after HTML loads
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Fetch movies if we are on the movies page
    if (document.getElementById("moviesContainer")) {
        fetchMovies();
    }

    // 2. Handle form submission if we are on the add movie page
    const form = document.getElementById("addMovieForm");
    
    if (form) {
        form.addEventListener("submit", async (event) => {
            // Prevent default browser refresh
        event.preventDefault();

        // Get values from inputs
        const title = document.getElementById("title").value;
        const genre = document.getElementById("genre").value;
        const release_year = document.getElementById("release_year").value;
        const poster_url = document.getElementById("poster_url").value;
        const description = document.getElementById("description").value;

        // Basic Object to send as JSON
        const movieData = {
            title: title,
            genre: genre,
            poster_url: poster_url,
            release_year: release_year,
            description: description
        };

        try {
            // Send POST request to our PHP backend
            const response = await fetch("add_movie.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(movieData)
            });

            const result = await response.json();
            const messageEl = document.getElementById("formMessage");

            if (result.status === "success") {
                // Show success message
                messageEl.textContent = "Movie added successfully!";
                messageEl.className = "message success";
                
                // Clear the form
                form.reset();
                
                // Show temporary success before user decides what to do next
            } else {
                // Show error message
                messageEl.textContent = result.message || "An error occurred.";
                messageEl.className = "message error";
            }
            
            // Hide message after 5 seconds
            setTimeout(() => {
                messageEl.style.display = "none";
                messageEl.className = "message"; // reset class
            }, 5000);

        } catch (error) {
            console.error("Error adding movie:", error);
            const messageEl = document.getElementById("formMessage");
            messageEl.textContent = "Network error. Please try again.";
            messageEl.className = "message error";
        }
    });
    }

});

/**
 * Function to fetch all movies from PHP backend and display them
 */
async function fetchMovies() {
    const container = document.getElementById("moviesContainer");
    
    try {
        // Send GET request to PHP backend
        const response = await fetch("get_movies.php");
        const movies = await response.json();
        
        // Clear the container
        container.innerHTML = "";

        if (movies.length === 0) {
            container.innerHTML = `<p class="loading-text">No movies found. Be the first to add one!</p>`;
            return;
        }

        // Loop through each movie result and create HTML
        movies.forEach(movie => {
            // Create a Div element for the card
            const card = document.createElement("div");
            card.className = "movie-card";
            
            // Inject HTML into the card safely
            let posterHtml = '';
            if (movie.poster_url && isValidUrl(movie.poster_url)) {
                posterHtml = `<img src="${escapeHTML(movie.poster_url)}" alt="${escapeHTML(movie.title)} poster" class="movie-poster">`;
            }

            card.innerHTML = `
                ${posterHtml}
                <div class="card-content">
                    <h3>${escapeHTML(movie.title)}</h3>
                    <div class="movie-meta">
                        <span class="badge">${escapeHTML(movie.genre)}</span>
                        <span class="movie-year">${escapeHTML(movie.release_year)}</span>
                    </div>
                    <p class="movie-desc">${escapeHTML(movie.description)}</p>
                </div>
            `;
            
            // Append card to container
            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error fetching movies:", error);
        container.innerHTML = `<p class="loading-text error" style="color:var(--error-color);">Failed to load movies. Make sure your server (XAMPP/WAMP) is running.</p>`;
    }
}

/**
 * Helper function to lightly check if string is URL like
 */
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

/**
 * Helper function to prevent Cross-Site Scripting (XSS)
 * Always escape user-generated content before rendering it as HTML.
 */
function escapeHTML(text) {
    if (text === null || text === undefined) return "";
    const div = document.createElement("div");
    div.innerText = String(text);
    return div.innerHTML;
}
