<?php

require_once __DIR__.'/../model/user.model.php';

if (preg_match('/^\/okh\/events/', $uri)){

    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        UserModel::getEvents();
        exit();
    }
}
else if (preg_match('/^\/okh\/event\/add/', $uri)) {

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        UserModel::addEvent($json_body);
        exit();
    }
}
else if (preg_match('/^\/okh\/event\/attendance\/add/', $uri)){

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        UserModel::addAttendance($json_body);
        exit();
    }
}
else if (preg_match('/^\/okh\/event\/complaint\/add/', $uri)){

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        UserModel::addComplaint($json_body);
        exit();
    }
}
else {
    header('HTTP/1.1 500 @user.index.php');
    echo '{"http":"500","at":"user.index.php"}';
}
