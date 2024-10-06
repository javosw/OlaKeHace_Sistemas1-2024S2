<?php


class UserModel
{
    static function addEvent($json)
    {
        require_once __DIR__ . '/CustomPDO.php';

        $my_pdo = CustomPDO::paraUser();

        try {
            $my_pdo->beginTransaction();

            $query = "SELECT add_evento(:username, :nombre, :lugar, :fecha, :hora, :plazas, :descripcion, :url)";
            $stmt = $my_pdo->prepare($query);
            $stmt->bindParam(':username', $_SESSION['username']);
            $stmt->bindParam(':nombre', $json->nombre);
            $stmt->bindParam(':lugar', $json->lugar);
            $stmt->bindParam(':fecha', $json->fecha);
            $stmt->bindParam(':hora', $json->hora);
            $stmt->bindParam(':plazas', $json->plazas);
            $stmt->bindParam(':descripcion', $json->descripcion);
            $stmt->bindParam(':url', $json->url);

            $stmt->execute();

            $row = $stmt->fetch();

            $my_pdo->commit();

            header('HTTP/1.1 200 @user.model.php');
            echo '{"id_evento":"' . $row[0] . '"}';
        } catch (Exception $e) {
            $my_pdo->rollBack();
            header('HTTP/1.1 404 @user.model.php');
            echo '{"http":"404","at":"user.model.php"}';
        } finally {
            $my_pdo = null;
            exit();
        }
    }
}
