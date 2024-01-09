import mongoose, { Schema, Document } from 'mongoose';


export interface RecaudosDocument extends Document {
    _id: string
    TERCDESC: string;
    ANIO: string;
    MES: string;
    MODPFEPA: string;
    HORAS: string;
    MODPTIIM: string;
    MODPENFI: string;
    ENFIDESC: string;
    VALOR: number;
    TOTA_DESCTO: number;
}

export const Recaudos_Schema = new Schema({
    TERCDESC: String,
    ANIO: String,
    MES: String,
    MODPFEPA: String,
    HORAS: String,
    MODPTIIM: String,
    MODPENFI: String,
    ENFIDESC: String,
    VALOR: Number,
    TOTA_DESCTO: Number,
});

export const RecaudosModel = mongoose.model<RecaudosDocument>('recaudo', Recaudos_Schema);