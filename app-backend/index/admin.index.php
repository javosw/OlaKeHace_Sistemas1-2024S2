<?php

require_once __DIR__.'/../model/admin.model.php';

if (preg_match('/^\/okh\/events/', $uri)){

    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        AdminModel::getEvents();
        exit();
    }
}
else {
    header('HTTP/1.1 404 @josq');
    echo '{"http":"404"}';
}
