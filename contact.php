<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);
    
    // Validate form data
    $errors = [];
    
    if (empty($name)) {
        $errors[] = "Name is required.";
    }
    
    if (empty($email)) {
        $errors[] = "Email is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Please enter a valid email address.";
    }
    
    if (empty($message)) {
        $errors[] = "Message is required.";
    }
    
    // If no errors, send email
    if (empty($errors)) {
        // Set recipient email (replace with your email)
        $to = "amreshbaskar@gmail.com";
        
        // Set email subject
        $subject = "New Contact Form Message from $name";
        
        // Build email content
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";
        
        // Build email headers
        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        
        // Send email
        if (mail($to, $subject, $email_content, $headers)) {
            // Success response
            http_response_code(200);
            echo "Thank you! Your message has been sent successfully.";
        } else {
            // Error response
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }
    } else {
        // Validation errors
        http_response_code(400);
        echo implode("<br>", $errors);
    }
} else {
    // Not a POST request
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>