<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include 'db.php';

// Get JSON POST body
$data = json_decode(file_get_contents("php://input"));

if (isset($data->title) && isset($data->genre) && isset($data->release_year)) {
    // Basic sanitization
    $title = $conn->real_escape_string($data->title);
    $genre = $conn->real_escape_string($data->genre);
    $release_year = $conn->real_escape_string($data->release_year);
    $poster_url = isset($data->poster_url) ? $conn->real_escape_string($data->poster_url) : '';
    $description = isset($data->description) ? $conn->real_escape_string($data->description) : '';

    $sql = "INSERT INTO movies (title, genre, poster_url, release_year, description) VALUES ('$title', '$genre', '$poster_url', '$release_year', '$description')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success", "message" => "Movie added successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error adding movie: " . $conn->error]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Required fields missing"]);
}

$conn->close();
?>
