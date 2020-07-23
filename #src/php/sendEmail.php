<?php
    use PHPMailer\PHPMailer\PHPMailer;
    $checkbox1 = $_POST['ux-ui-design'];
    $checkbox2 = $_POST['web-development'];
    $checkbox3 = $_POST['corporative-website'];
    $checkbox4 = $_POST['landing-page'];

    $priceFrom = $_POST['price-from'];
    $priceTo = $_POST['price-to'];

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // $attachment = $_POST['upload'];

    require_once "PHPMailer/PHPMailer.php";
    require_once "PHPMailer/SMTP.php";
    require_once "PHPMailer/Exception.php";

    $mail = new PHPMailer();

    //SMTP Settings
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "pinkymoon.lol@gmail.com";
    $mail->Password = 'p1nkymoon';
    $mail->Port = 465;
    $mail->SMTPSecure = "ssl";

    //Email Settings
    $mail->addAttachment($_FILES['upload']['tmp_name'], $_FILES['upload']['name']);
    $mail->isHTML(true);

    $mail->setFrom('pinkymoon.lol@gmail.com');
    $mail->addAddress("roman.orangeorange@gmail.com");
    $mail->Subject = ("$email ($name)");
    $mail->Body = 'UX/UI Design: ' . $checkbox1 . '<br>' .
    'Web Development: ' . $checkbox2 . '<br>' .
    'Corporative Website: ' . $checkbox3 . '<br>' .
    'Landing Page: ' . $checkbox4 . '<br> <br>' .
    'Budget: ' . $priceFrom . ' - ' . $priceTo . '<br> <br>' .
    'Name: ' . $name . '<br>' .
    'Email: ' . $email . '<br> <br>' .
    'Message: ' . $message . '<br>';


    if ($mail->send()) {
      header('location: thankyou.html');
    } else {
      echo 'Error';
    }

    exit(json_encode(array("status" => $status, "response" => $response)));
?>
