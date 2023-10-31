import { Box } from "../types/types";
import conn from "./../database/connection";

const BoxSchema = new conn.Schema<Box>({
  Name: { type: 'String' },
  Latitude: { type: 'Number', required: true },
  Longitude: { type: 'Number', required: true },
  Type: { type: 'String', required: true },
  Level: { type: 'Number', required: true },
});

const BoxModel = conn.model<Box>('boxes', BoxSchema)

export { BoxModel }