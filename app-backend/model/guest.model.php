<?php

class GuestModel{
    
    public static function getUsuario($username,$password,$rol){
        require_once __DIR__.'/CustomPDO.php';

        $my_pdo = CustomPDO::paraAdmin();

        try {
            $my_pdo->beginTransaction();

            $query;
            if($rol == 'user'){
                $query = "SELECT username FROM clientes WHERE username=:username AND password=:password";
            }
            else if($rol == 'admin'){
                $query = "SELECT username FROM administradores WHERE username=:username AND password=:password";
            }
            $stmt = $my_pdo->prepare($query);
            $stmt->bindParam(':username',$username);
            $stmt->bindParam(':password',$password);

            if(!$stmt->execute()) { return null; }

            $row = $stmt->fetch();

            $empleado = array(
                "username" => $row['username'],
            );

            $my_pdo->commit();

            return $empleado;
        } 
        catch (Exception $e) {
            $my_pdo->rollBack();
        }
        finally{
            $my_pdo = null;
        }
        return null;

    }
    public static function addUser($json){
        require_once __DIR__.'/CustomPDO.php';

        $my_pdo = CustomPDO::paraAdmin();

        try {
            $my_pdo->beginTransaction();

            $query = "INSERT INTO clientes(username,password) VALUES (:username,:password)";

            $stmt = $my_pdo->prepare($query);
            $stmt->bindParam(':username',$json->username);
            $stmt->bindParam(':password',$json->password);

            $stmt->execute();

            $row = $stmt->fetch();

            $my_pdo->commit();
            header('HTTP/1.1 200 @guest.model.php');
        } 
        catch (Exception $e) {
            $my_pdo->rollBack();
            header('HTTP/1.1 500 @guest.model.php');
        }
        finally{
            $my_pdo = null;
            exit();
        }
    }

    public static function getUser($json){
        require_once __DIR__.'/CustomPDO.php';

        $my_pdo = CustomPDO::paraAdmin();

        try {
            $my_pdo->beginTransaction();

            $query = "SELECT username FROM clientes WHERE username=:username";

            $stmt = $my_pdo->prepare($query);
            $stmt->bindParam(':username',$json->username);

            $stmt->execute();

            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            if(is_null($row['username'])) throw new Exception();

            $my_pdo->commit();
            header('HTTP/1.1 200 @guest.model.php');
            echo json_encode($row);
        } 
        catch (Exception $e) {
            $my_pdo->rollBack();
            header('HTTP/1.1 500 @guest.model.php');
        }
        finally{
            $my_pdo = null;
            exit();
        }
    }



}
