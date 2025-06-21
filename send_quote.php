<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "info@killisbird.com"; // <-- Your destination email address
    $subject = "New Quote Request from " . htmlspecialchars($_POST['name']);
    $message = "Name: " . htmlspecialchars($_POST['name']) . "\n"
             . "Email: " . htmlspecialchars($_POST['email']) . "\n"
             . "Company: " . htmlspecialchars($_POST['company']) . "\n"
             . "Phone: " . htmlspecialchars($_POST['phone']) . "\n"
             . "Product: " . htmlspecialchars($_POST['product']) . "\n"
             . "Details: " . htmlspecialchars($_POST['details']);
    $headers = "From: " . htmlspecialchars($_POST['email']);

    if (mail($to, $subject, $message, $headers)) {
        echo "<h2>Thank you! Your request has been submitted. We will contact you soon.</h2>";
    } else {
        echo "<h2>Sorry, there was a problem sending your request. Please try again later.</h2>";
    }
} else {
    echo "<h2>Invalid request.</h2>";
}
?>