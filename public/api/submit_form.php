<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $json_data = file_get_contents('php://input');
        $data = json_decode($json_data, true);

        $name = htmlspecialchars($data['name']);
        $service = htmlspecialchars($data['service']);
        $email = htmlspecialchars($data['email']);
        $terms = htmlspecialchars($data['terms']);
        
        // Save data
        require ("connect.php");
        $stmt = $conn->prepare("INSERT INTO messages (name, email, service) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $name, $email, $service);
        $stmt->execute();
        $stmt->close();
        $conn->close();
        
        // Send the email
        require ("send_mail.php");
        $to = "hello@stanimeros.com";
        $subject = "Contact Form Submission";
        $content = "
            <h3>Contact Form Details</h3>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Service Interested In:</strong> $service</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Terms:</strong> $terms</p>
        ";
    
        if (sendSMTPMail($to, $subject, $header, $content, $footer)) {
            echo json_encode(['status' => 'success', 'message' => 'Thank you! Your message has been sent.']);
        } else {
            sendPHPMail($to, $subject, $header, $content, $footer);
            echo json_encode(['status' => 'failed', 'message' => 'Sorry, something went wrong. Please try again later.']);
        }
    } else {
        echo json_encode(['status' => 'failed', 'message' => 'Invalid request method']);
    }
?>
