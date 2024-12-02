<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'];
    $price = $_POST['price'];
    $quantity = $_POST['quantity'];
    $color = $_POST['color'];
    $popularity = $_POST['popularity'] ?? 0;

    $stmt = $conn->prepare("INSERT INTO products (name, price, quantity, color, popularity) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sdisi", $name, $price, $quantity, $color, $popularity);
    if ($stmt->execute()) {
        echo "Product added successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
    $conn->close();
}
?>