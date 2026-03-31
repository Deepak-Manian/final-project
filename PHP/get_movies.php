<?php
header('Content-Type: application/json');
// Handle CORS if needed (optional for local testing from same origin, but good practice)
header('Access-Control-Allow-Origin: *');

include 'db.php';

$sql = "SELECT * FROM movies ORDER BY created_at DESC";
$result = $conn->query($sql);

$movies = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $movies[] = $row;
    }
}

echo json_encode($movies);

$conn->close();
?>
