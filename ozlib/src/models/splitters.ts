import { Splitter } from "../types/types";
import conn from "./../database/connection";

const SplitterSchema = new conn.Schema<Splitter>({
  Name: { type: 'string' },
  Type: { type: 'string', required: true },
  Box: { type: 'string', required: true },
  implanted: { type: 'boolean' },
  Inputs: { type: 'number', required: true },
  Outputs: { type: 'number', required: true },
  'Allows client connection': { type: 'boolean' },
});

const SplitterModel = conn.model<Splitter>('splitters', SplitterSchema)

export { SplitterModel }