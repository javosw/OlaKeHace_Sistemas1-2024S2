import { GetEvent } from "./user.data";

export type AddEventReview = {
    id_evento:number;
    eliminar:boolean;
}

export type AddConplaintReview = {
    id_evento:number;
    username:string;
    eliminar:boolean;
}

export type GetComplaint = {
    event:GetEvent;
    username:string;
    motivo:string;
}