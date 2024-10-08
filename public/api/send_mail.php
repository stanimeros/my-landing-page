<?php
    $header = '<!DOCTYPE html>
                <html lang="en">
                    <head>
                        <title>Stanimeros Pantelis</title>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    </head>
                    <body style="font-family:\'Inter\',sans-serif;max-width:600px;margin:0 auto;font-size:14px;line-height:1.4;">
                        <div style="background-color:#f8f8f8cf;border:1px solid #cccccc8d;border-radius:10px;overflow:hidden;margin-top:10px;">					
                            <div style="background-color:#eee9;padding:5px 20px;text-align:center;outline:1px solid #00000010;">
                                <img height=60 width=60 src="https://stanimeros.com/logos/logo.png">
                            </div>
                            <div style="padding:0 20px;">';

    $footer = '</div></div><br>
                <div style="background-color:#f8f8f8;padding:10px 10px;font-size:12px;color:#aaa;max-width:600px;border-radius:10px;">
                    <p style="border-top:1px solid #ccc;padding:20px 0 10px 0;">
                        You have received this email as you are registered at stanimeros.com. Use of the service and website is subject to our <a style="color:#aaa" href="https://stanimeros.com/terms-and-conditions">Terms and Conditions</a> and <a style="color:#aaa" href="https://stanimeros.com/privacy-policy">Privacy Policy</a>.
                    </p>
                    <table style="width:100%">
                        <tr>
                            <td style="color:#aaa;font-size:11px;width:60%;text-align:left;">© 2024 stanimeros.com - All rights reserved</td>
                        </tr>
                    </table>
                </div>
            </body>
        </html>';

    function sendPHPMail($to, $subject, $header, $content, $footer) {
        $headers = 'From: Stanimeros Pantelis <hello@stanimeros.com>' . "\r\n" .
            'Reply-To: hello@stanimeros.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion() . "\r\n" .
            'Return-Path: hello@stanimeros.com' . "\r\n" .
            'Content-Type: text/html; charset=UTF-8' . "\r\n";

        $body = $header . $content . $footer;

        try{
            $current_url = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
            if (strpos($current_url, 'localhost') === false) {
                // Not on localhost, so send the email
                return mail($to, $subject, $body, $headers);
            }
        }catch (Exception $e) {
            echo "Mailer Error: {$mail->ErrorInfo}";
        }
        return false;
    }  

    function sendSMTPMail($to, $subject, $header, $content, $footer) {
        require("keys.php");

        if (!file_exists('/home/u321831237/domains/stanimeros.com/public_html/vendor/autoload.php')) {
            return false;
        }
        
        require '/home/u321831237/domains/stanimeros.com/public_html/vendor/autoload.php';
        try {
            //Server settings
            $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
            $mail->isSMTP();
            $mail->SMTPDebug = 0;
            $mail->Host = 'smtp.hostinger.com';
            $mail->Port = 587;
            $mail->SMTPAuth   = true;
            $mail->Username   = 'hello@stanimeros.com';
            $mail->Password   = $keys['mailPassword'];
            $mail->SMTPSecure = 'tls';

            $mail->setFrom('hello@stanimeros.com', 'Stanimeros Pantelis');
            $mail->addReplyTo('hello@stanimeros.com', 'Stanimeros Pantelis');
            $mail->addAddress($to);

            $mail->CharSet = 'UTF-8';
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body    = $header . $content . $footer;

            return $mail->send();
        } catch (Exception $e) {
            echo json_encode(['status' => 'failed', 'message' => 'Mailer Error:' . $mail->ErrorInfo]);
        }
        return false;
    }  
?>
