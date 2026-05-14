<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
//Create an instance; passing `true` enables exceptions
if(isset($_POST["send_enquiry"]))
{    
require_once("Exception.php");
require_once("PHPMailer.php");
require_once("SMTP.php");    
$mail = new PHPMailer(true);
$fullname=$_POST["fullname"];
$email=$_POST["email"];
$subject=$_POST["subject"];
$phone=$_POST["phone"];
$msg=$_POST["message"];

try {
    //Server settings
    $mail->SMTPDebug = SMTP::True;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'wecare4951@gmail.com';                     //SMTP username
    $mail->Password   = '';                               //SMTP password
    $mail->SMTPSecure = "TLS";            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to 
    //Recipients
    $mail->setFrom($_POST["email"], 'Mailer');
    $mail->addAddress('wecare4951@gmail.com', 'Admin');     //Add a recipient

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Get in touch form details';
    $mail->Body    = 'Customers all details is :</b>'.$fullname."<br>".$email."<br>".$subject."<br>".$phone."<br>".$message;
   
    $mail->send();
    echo "<script>
    alert('Thanks for contact with us we will contact with you soon')
    window.location='contact.html'
    </script>";
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
}
?>