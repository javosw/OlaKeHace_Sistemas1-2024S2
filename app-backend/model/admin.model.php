<?php

class AdminModel{

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