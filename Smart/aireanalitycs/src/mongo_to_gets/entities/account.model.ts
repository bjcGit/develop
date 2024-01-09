import mongoose, {Schema, Document } from 'mongoose';


export interface AccountDocument extends Document {
  ID: number;
  FIRST_NAME: string;
  LAST_NAME: string;
  USERNAME: string;
  COMPANY: string;
  CREATED_DATE: string;
  UPDATE_TS: Date;
}

export const AccountSchema = new Schema({
  ID: Number,
  FIRST_NAME: String,
  LAST_NAME: String,
  USERNAME: String,
  COMPANY: String,
  CREATED_DATE: String,
  UPDATE_TS: Date,
});

export const AccountModel = mongoose.model<AccountDocument>('account', AccountSchema);



