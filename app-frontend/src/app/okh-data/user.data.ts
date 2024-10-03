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

export type AddEventTo = {
	id_evento:number;
}

export type AddComplaint = {
	id_evento:number;
	motivo:string;
}

export type AddEvent = {
	nombre:string
	lugar:string
	fecha:string
	hora:string
	plazas:number
	descripcion:string
	url:string
	etiquetas:string[]
}
