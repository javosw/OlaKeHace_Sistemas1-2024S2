<?php

if (preg_match('/^\/okh\/entrar/', $uri)) {
    require_once __DIR__ . '/../controller/guest.controller.php';

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        GuestController::entrar($json_body->username, $json_body->password, $json_body->rol);
    }
    exit();
}
else {
    require_once __DIR__.'/../model/guest.model.php';

    if (preg_match('/^\/okh\/users\/add/', $uri)){

        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            GuestModel::addUser($json_body);
        }
        exit();
    }
    else if (preg_match('/^\/okh\/user/', $uri)) {
    
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            GuestModel::getUser($json_body);
        }
        exit();
    } 
} 

