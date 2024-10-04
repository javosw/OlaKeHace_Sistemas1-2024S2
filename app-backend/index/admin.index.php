<?php

if (preg_match('/^\/admin\/test/', $uri)) {

    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        echo '{"admin":"t1"}';
        exit();
    }
    header('HTTP/1.1 404 @josq');
    echo '{"http":"404"}';
} 
else {
    header('HTTP/1.1 404 @josq');
    echo '{"http":"404"}';
}
