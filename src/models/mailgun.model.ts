import { Schema, SchemaTypes, model } from "mongoose";

const mailgunSchema = new Schema(
  {
    eventData: {
      type: SchemaTypes.Mixed,
      required: true,
    },
    signature: {
      type: SchemaTypes.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Mailgun = model("Mailgun", mailgunSchema);

export default Mailgun;
