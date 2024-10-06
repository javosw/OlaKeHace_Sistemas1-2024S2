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