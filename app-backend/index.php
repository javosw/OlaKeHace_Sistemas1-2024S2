<?php
session_start();

//error_log();

// PARA RUTAS USAR SIEMPRE -> \\\\\

// Turn off all error reporting
error_reporting(0);

/*
echo '<pre>';
echo 'REQUEST_URI: '.$_SERVER["REQUEST_URI"].'<br/>';
echo 'QUERY_STRING: '.$_SERVER["QUERY_STRING"].'<br/>';
echo 'REQUEST_METHOD: '.$_SERVER["REQUEST_METHOD"].'<br/>';
echo 'SCRIPT_NAME: '.$_SERVER["SCRIPT_NAME"].'<br/>';
echo '</pre>';

["REQUEST_METHOD"]=>
string(3) "GET"
["QUERY_STRING"]=>
string(0) ""
["REQUEST_URI"]=>
string(24) "/holaMundo/sdfsdfsd/fsdf"
["SCRIPT_NAME"]=>
string(20) "/holaMundo/index.php"
*/



// CORS
//header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Credentials: true");

// PREFLIGHT
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    http_response_code(200);
    exit();
}
header("Content-Type: application/json");

// leer un json
// json_decode($body, true) para acceder con arrays
// json_decode($body) para acceder con objetos
$raw_body = file_get_contents('php://input');
$json_body = json_decode($raw_body);
//error_log(print_r($json_body, true));

/*
header('HTTP/1.1 200 @josq');
echo json_encode($user_data);

header('HTTP/1.1 401 @josq');
echo '{"http":"401"}';
*/
$uri = $_SERVER['REQUEST_URI'];
if (preg_match('/^\/okh\/entrar/', $uri)) {
    require_once __DIR__ . '/controller/guest.controller.php';

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        GuestController::entrar($json_body->username, $json_body->password, $json_body->rol);
    }
    exit();
} else if (isset($_SESSION['rol'])) {

    if ($_SESSION['rol'] == 'admin') {
        require_once __DIR__ . '/index/admin.index.php';
        exit();
    } else if ($_SESSION['rol'] == 'user') {
        require_once __DIR__ . '/index/user.index.php';
        exit();
    }
} else {

    header('HTTP/1.1 401 @index.php');
    echo '{"http":"401","at":"index.php"}';
    exit();
}
