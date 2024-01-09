import mongoose, {Schema, Document } from 'mongoose';


export interface Actiecon_bkDocument extends Document {
    _id: string
    ACECTIAC: string;
    ACECACTI: string;
    ACECDESC: string;
    ACECUNID: string;
    ACECVERS: number;
}

export const Actiecon_bkSchema = new Schema({
    ACECTIAC: String,
    ACECACTI: String,
    ACECDESC: String,
    ACECUNID: String,
    ACECVERS: Number
});

export const Actiecon_bkModel = mongoose.model<Actiecon_bkDocument>('actiecon_bk', Actiecon_bkSchema);



