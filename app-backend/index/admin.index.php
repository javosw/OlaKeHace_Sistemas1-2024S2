<?php

require_once __DIR__.'/../model/admin.model.php';

if (preg_match('/^\/okh\/admin\/events\/get/', $uri)){

    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        AdminModel::getEvents();
        exit();
    }
}
else if (preg_match('/^\/okh\/admin\/reviews\/add/', $uri)){

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        AdminModel::addReview($json_body);//{ id_evento: number, eliminar: boolean }
        exit();
    }
}
else if (preg_match('/^\/okh\/admin\/admins\/add/', $uri)){

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        AdminModel::addAdmin($json_body);
        exit();
    }
}
else if (preg_match('/^\/okh\/admin\/complaints\/get/', $uri)){

    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        AdminModel::getComplaints();
        exit();
    }
}
else if (preg_match('/^\/okh\/admin\/complaints\/del/', $uri)){

    if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
        //id_evento= &username=
        AdminModel::delComplaint();
        exit();
    }
}
else if (preg_match('/^\/okh\/admin\/events\/del/', $uri)){

    if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
        //id_evento=
        AdminModel::delEvent();
        exit();
    }
}
else {
    header('HTTP/1.1 500 @admin.index.php');
    echo '{"http":"500","at":"admin.index.php"}';
}
