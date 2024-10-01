export type ToggleState = {
    state: boolean;
}

export type GetEvent = {
	id_evento:number
	nombre:string
	lugar:string
	fecha:string
	hora:string
	plazas:number
	plazas_ocupadas:number
	descripcion:string
	url:string
	etiquetas:string[]
}
