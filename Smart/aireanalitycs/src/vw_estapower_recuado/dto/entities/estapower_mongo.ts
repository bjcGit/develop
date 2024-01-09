import mongoose, {Schema, Document } from 'mongoose';


export interface EstapowerDocument extends Document {
    _id: string
    ACECTIAC: string;
    ACECACTI: string;
    ACECDESC: string;
    ACECUNID: string;
    ACECVERS: number;
}

export const EstapowerSchema = new Schema({
    ACECTIAC: String,
    ACECACTI: String,
    ACECDESC: String,
    ACECUNID: String,
    ACECVERS: Number
});

export const Actiecon_bkModel = mongoose.model<EstapowerDocument>('recaudos_power', EstapowerSchema);