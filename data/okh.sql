CREATE DATABASE okh;
USE okh;

CREATE TABLE clientes (
    username VARCHAR(255) NOT NULL PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    eventos_aprobados INT DEFAULT 0,
    eventos_eliminados INT DEFAULT 0,
    eventos_publicados INT DEFAULT 0,
    tiene_sancion BOOLEAN DEFAULT FALSE
);

CREATE TABLE administradores (
    username VARCHAR(255) NOT NULL PRIMARY KEY,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE eventos (
    id_evento INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    lugar VARCHAR(255) NOT NULL,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    plazas INT NOT NULL CHECK (plazas >= 2),
    plazas_ocupadas INT DEFAULT 0 CHECK (plazas_ocupadas >= 0 AND plazas_ocupadas <= plazas),
    descripcion TEXT NOT NULL,
    url VARCHAR(255) NOT NULL,
	fue_revisado BOOLEAN DEFAULT FALSE,
	conteo_denuncias INT DEFAULT 0,
	FOREIGN KEY (username) REFERENCES clientes(username)
);

CREATE TABLE etiquetas (
    id_evento INT NOT NULL,
    etiqueta VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_evento, etiqueta),
    UNIQUE KEY unique_evento_etiqueta (id_evento, etiqueta),
    FOREIGN KEY (id_evento) REFERENCES eventos(id_evento) ON DELETE CASCADE
);

CREATE TABLE asistencias (
    id_evento INT NOT NULL,
    username VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_evento, username),
    FOREIGN KEY (id_evento) REFERENCES eventos(id_evento) ON DELETE CASCADE,
    FOREIGN KEY (username) REFERENCES clientes(username)
);

CREATE TABLE denuncias (
    id_evento INT NOT NULL,
    username VARCHAR(255) NOT NULL,
    motivo TEXT,
    PRIMARY KEY (id_evento, username),
    FOREIGN KEY (id_evento) REFERENCES eventos(id_evento) ON DELETE CASCADE,
    FOREIGN KEY (username) REFERENCES clientes(username)
);
