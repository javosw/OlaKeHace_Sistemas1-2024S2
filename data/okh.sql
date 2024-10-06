CREATE DATABASE okh;
USE okh;

-- Tabla clientes
CREATE TABLE clientes (
    username VARCHAR(255) NOT NULL PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    eventos_aprobados INT DEFAULT 0,
    eventos_eliminados INT DEFAULT 0,
    eventos_publicados INT DEFAULT 0,
    tiene_sancion BOOLEAN DEFAULT FALSE
);

-- Tabla administradores
CREATE TABLE administradores (
    username VARCHAR(255) NOT NULL PRIMARY KEY,
    password VARCHAR(255) NOT NULL
);

-- Tabla eventos
CREATE TABLE eventos (
    id_evento INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    lugar VARCHAR(255) NOT NULL,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    plazas INT NOT NULL,
    plazas_ocupadas INT DEFAULT 0,
    descripcion TEXT,
    url VARCHAR(255),
	FOREIGN KEY (username) REFERENCES clientes(username)
);

-- Tabla evento_etiquetas
CREATE TABLE evento_etiquetas (
    id_evento INT NOT NULL,
    etiqueta VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_evento, etiqueta),
    UNIQUE KEY unique_evento_etiqueta (id_evento, etiqueta),
    FOREIGN KEY (id_evento) REFERENCES eventos(id_evento)
);

-- Tabla evento_asistencias
CREATE TABLE evento_asistencias (
    id_evento INT NOT NULL,
    username VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_evento, username),
    FOREIGN KEY (id_evento) REFERENCES eventos(id_evento),
    FOREIGN KEY (username) REFERENCES clientes(username)
);

-- Tabla evento_denuncias
CREATE TABLE evento_denuncias (
    id_evento INT NOT NULL PRIMARY KEY,
    conteo_denuncias INT DEFAULT 0,
    eliminar BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (id_evento) REFERENCES eventos(id_evento)
);

-- Tabla revisiones_por_rutina
CREATE TABLE revisiones_por_rutina (
    id_evento INT NOT NULL PRIMARY KEY,
    fue_revisado BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (id_evento) REFERENCES eventos(id_evento)
);

-- Tabla revisiones_por_denuncia
CREATE TABLE revisiones_por_denuncia (
    id_evento INT NOT NULL,
    username VARCHAR(255) NOT NULL,
    admin_username VARCHAR(255),
    motivo TEXT,
    fue_revisado BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id_evento, username),
    FOREIGN KEY (id_evento) REFERENCES eventos(id_evento),
    FOREIGN KEY (username) REFERENCES clientes(username),
    FOREIGN KEY (admin_username) REFERENCES administradores(username)
);
