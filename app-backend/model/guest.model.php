<?php

class GuestModel{
    
    public static function getUsuario($username,$password,$rol){
        require_once __DIR__.'/MiConexion.php';

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

}
