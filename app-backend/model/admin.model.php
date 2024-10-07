<?php

class AdminModel{

    public static function addReview($json){
        require_once __DIR__ . '/CustomPDO.php';

        $my_pdo = CustomPDO::paraAdmin();

        try {
            $my_pdo->beginTransaction();

            $query;
            if($json->eliminar == true){
                $query = "DELETE FROM eventos WHERE id_evento = :id_evento";
            }
            else if($json->eliminar == false){
                $query = "UPDATE eventos SET fue_revisado = true WHERE id_evento = :id_evento";
            }

            $stmt = $my_pdo->prepare($query);
            $stmt->bindParam(':id_evento', $json->id_evento);

            $stmt->execute();

            $row = $stmt->fetch();

            $my_pdo->commit();

            header('HTTP/1.1 200 @admin.model.php');
            echo '{"http":"200","at":"admin.model.php"}';
        } catch (Exception $e) {
            $my_pdo->rollBack();
            header('HTTP/1.1 500 @admin.model.php');
            echo '{"http":"500","at":"admin.model.php"}';
        } finally {
            $my_pdo = null;
            exit();
        }

    }

    public static function getEvents(){
        require_once __DIR__ . '/CustomPDO.php';

        $my_pdo = CustomPDO::paraUser();

        try {
            $my_pdo->beginTransaction();

            $query = "SELECT * FROM eventos WHERE fue_revisado = false";
            $stmt = $my_pdo->prepare($query);

            $stmt->execute();

            $events = array();
            while ($row = $stmt->fetch(PDO::FETCH_OBJ)) {
                $events[] = $row;
            }

            $my_pdo->commit();

            header('HTTP/1.1 200 @shared.model.php');
            echo json_encode($events);
        } catch (Exception $e) {
            $my_pdo->rollBack();
            header('HTTP/1.1 404 @shared.model.php');
            echo '{"http":"404","at":"shared.model.php"}';
        } finally {
            $my_pdo = null;
            exit();
        }

    }

}