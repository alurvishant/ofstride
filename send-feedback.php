<?php

// DB Config details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ofstride_local";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// form fields data
$action = $_POST['action'];
$name = $_POST['feedback_name'];
$email = $_POST['feedback_email'];
$comments = $_POST['feedback_comments'];

// SQL queries for inserting data into the dabase tables
$sqlFeedback = "INSERT INTO feedback (name, email, comments) VALUES ('$name', '$email', '$comments')";
$sqlClient = "INSERT INTO client (name, email, comments) VALUES ('$name', '$email', '$comments')";
$sqlJobSeeker = "INSERT INTO jobseeker (name, email, comments) VALUES ('$name', '$email', '$comments')";

switch ($action){
  case "feedback":
    //send email
    mail("admin@ofstrideservices.com","Website feedback form", $email, $comments);

    // insert feedback data into database
    $conn->query($sqlFeedback);
    break;

  case "client":
    $conn->query($sqlClient);
    break;

  case "jobseeker":
    $conn->query($sqlJobSeeker);
    break;

  default:
    echo "Error";
    break;
}

$conn->close();

?>
