< ? php



if (isset($_POST["login"])) {

    include "dbConnect.php";



    $login = $dbh - > prepare('SELECT `userID`,`email`,`password` FROM `user` WHERE `email` = ?');



    $login - > execute(array($_POST["user_mail"]));


    $user = $login - > fetch(PDO::FETCH_ASSOC);

    if (!empty($user))

    {
        if ($user["password"] == $_POST["user_password"]) {

            session_start();

        } else {
            $message = "Password incorrect";
            echo "<script type='text/javascript'>alert('$message');</script>";
        }
    } else {
        $message = "mail not found";
        echo "<script type='text/javascript'>alert('$message');</script>";
    }
} else {


    $nomPage = "login";



    include "layout.phtml";
}