<?php

require_once __DIR__.'/../model/user.model.php';

if (preg_match('/^\/okh\/event\/add/', $uri)) {

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        error_log('@user.index.php '.print_r($json_body, true));
        UserModel::addEvent($json_body);
        exit();
    }
} else {
    header('HTTP/1.1 404 @josq');
    echo '{"http":"404","at":"user.index.php"}';
}
