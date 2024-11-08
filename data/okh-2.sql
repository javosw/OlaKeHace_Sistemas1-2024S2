DELIMITER $$
CREATE FUNCTION add_evento(
	p_username VARCHAR(255),
	p_nombre VARCHAR(255),
	p_lugar VARCHAR(255),
	p_fecha DATE,
	p_hora TIME,
	p_plazas INT,
	p_descripcion TEXT,
	p_url VARCHAR(255)
)
RETURNS INT
DETERMINISTIC
BEGIN
	DECLARE nuevo_id INT;
	
	INSERT INTO eventos (username, nombre, lugar, fecha, hora, plazas, descripcion, url)
	VALUES (p_username, p_nombre, p_lugar, p_fecha, p_hora, p_plazas, p_descripcion, p_url);
	
	SET nuevo_id = LAST_INSERT_ID();
	
	RETURN nuevo_id;
END
$$ 
DELIMITER ;


--CALL add_asistencia(:id_evento,:username);
DELIMITER $$
CREATE PROCEDURE add_asistencia(
	IN p_id_evento INT,
	IN p_username VARCHAR(255)
)
BEGIN
	UPDATE eventos
		SET plazas_ocupadas = plazas_ocupadas + 1
		WHERE id_evento = p_id_evento;

	INSERT INTO asistencias 
		VALUES (p_id_evento, p_username);
END 
$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE add_denuncia(
	IN p_id_evento INT,
	IN p_username VARCHAR(255),
	IN p_motivo TEXT
)
BEGIN
	INSERT INTO denuncias(id_evento,username,motivo)
		VALUES (p_id_evento, p_username, p_motivo);

	UPDATE eventos
		SET conteo_denuncias = conteo_denuncias + 1
		WHERE id_evento = p_id_evento;

END 
$$
DELIMITER ;

--SELECT * FROM get_denuncias;
CREATE VIEW get_denuncias AS
SELECT 
	e.*,
	d.motivo,
	d.username AS denunciante
FROM 
	eventos e
INNER JOIN 
	denuncias d ON e.id_evento = d.id_evento;


DELIMITER $$
CREATE PROCEDURE get_asistencias(IN p_username VARCHAR(255))
BEGIN
	SELECT 
		e.*
	FROM 
		asistencias a
	INNER JOIN 
		eventos e ON a.id_evento = e.id_evento
	WHERE 
		a.username = p_username;
END;
$$
DELIMITER ;



