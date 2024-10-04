<?php

if (preg_match('/^\/user\/test/', $uri)) {

    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        echo '{"user":"t1"}';
        exit();
    }
    header('HTTP/1.1 404 @josq');
    echo '{"http":"404"}';
} 
else {
    header('HTTP/1.1 404 @josq');
    echo '{"http":"404"}';
}
