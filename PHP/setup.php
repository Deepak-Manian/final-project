<?php
// Simple script to automatically update the database schema for the user.
include 'db.php';

echo "<h2>Updating Database...</h2>";

// Check if the column already exists
$check_sql = "SHOW COLUMNS FROM movies LIKE 'poster_url'";
$result = $conn->query($check_sql);

if ($result->num_rows > 0) {
    echo "<p style='color: green;'>The 'poster_url' column already exists! You are good to go.</p>";
} else {
    // Column doesn't exist, let's add it
    $alter_sql = "ALTER TABLE movies ADD COLUMN poster_url VARCHAR(500) AFTER genre;";
    if ($conn->query($alter_sql) === TRUE) {
        echo "<p style='color: green;'>Successfully added 'poster_url' to your database!</p>";
    } else {
        echo "<p style='color: red;'>Error updating database: " . $conn->error . "</p>";
    }
}

echo '<br><a href="index.html">Go back to the App</a>';

$conn->close();
?>
