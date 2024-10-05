<?php

class GuestController
{
    public static function entrar($username, $password, $rol)
    {
        /*header('HTTP/1.1 200 @guest.controller.php');
        if($username == 'admin'){
            $_SESSION['username'] ='admin';
            $_SESSION['rol'] = 'admin';
            echo '{"username":"admin","rol":"admin"}';
        }
        else if($username == 'user'){
            $_SESSION['username'] ='user';
            $_SESSION['rol'] = 'user';            
            echo '{"username":"user","rol":"user"}';
        }
        exit();*/

        require_once __DIR__ . '/../model/guest.model.php';

        try {
            $usuario = GuestModel::getUsuario($username, $password, $rol);
            if (is_null($usuario['username'])) {
                throw new Exception();
            }

            $_SESSION['username'] = $usuario['username'];
            $_SESSION['rol'] = $rol;

            header('HTTP/1.1 200 @guest.controller.php');
            echo '{"username":"' . $usuario['username'] . '"}';

            exit();
        } catch (\Throwable $th) {
            session_destroy();

            header('HTTP/1.1 401 @guest.controller.php');
            echo '{"http":"401","at":"guest.controller.php"}';

            exit();
        }
    }
}


/*

    private static function entrado() {}
    private static function salir() {
        //session_set_cookie_params(10);
        // session_id()
        // session_destroy()
        // $_SESSION['id'] = session_id();
    }

*/