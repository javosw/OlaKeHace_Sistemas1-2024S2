<?php

class GuestModel{
    
    public static function getUser($username,$password){
        require_once __DIR__.'/MiConexion.php';

        $my_pdo = CustomPDO::paraAdmin();

        try {
            $my_pdo->beginTransaction();

            $query = "SELECT * FROM usuarios WHERE username=:username AND password=:password";
            $stmt = $my_pdo->prepare($query);
            $stmt->bindParam(':username',$username);
            $stmt->bindParam(':password',$password);

            if(!$stmt->execute()) { throw new Exception(); }

            $row = $stmt->fetch();

            $empleado = array(
                "username" => $row['username'],
                "rol"      => $row['rol'],
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

    }

}
