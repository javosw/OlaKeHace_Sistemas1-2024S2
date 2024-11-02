<?php
class CustomPDO
{
    // xampp > php.ini > [942] extension=pdo_pgsql && [944] extension=pgsql

    static $admin_pdo = null;
    static $user_pdo = null;

    public static function paraAdmin()
    {
        if (self::$admin_pdo === null) {
            $host = 'localhost';
            $port = "3306";
            $database = 'okh';
            $user = 'root';
            $password = '';

            $source = "mysql:host=$host;port=$port;dbname=$database";

            try {
                self::$admin_pdo = new PDO($source, $user, $password);
                self::$admin_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return self::$admin_pdo;
            } catch (PDOException $e) {
                //echo '{"JOSQ":"'.$e->getMessage().'"}';
            }
        }
        return self::$admin_pdo;
    }

    public static function paraUser()
    {
        if (self::$user_pdo === null) {
            $host = 'localhost';
            $port = "3306";
            $database = 'okh';
            $user = 'root';
            $password = '';

            $source = "mysql:host=$host;port=$port;dbname=$database";

            try {
                self::$user_pdo = new PDO($source, $user, $password);
                self::$user_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return self::$user_pdo;
            } catch (PDOException $e) {
                //echo '{"JOSQ":"'.$e->getMessage().'"}';
            }
        }
        return self::$user_pdo;
    }
}
