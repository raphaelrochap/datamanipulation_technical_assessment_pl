import { Client } from "../types/types";
import conn from "./../database/connection";

const ClientSchema = new conn.Schema<Client>({
  Latitude: { type: 'number', required: true },
  Longitude: { type: 'number', required: true },
  Status: { type: 'number' },
  // Box: { type: 'string', required: true },    
  // Auto_connect: { type: 'boolean' },    
  // Force: { type: 'boolean' },
});

const ClientModel = conn.model<Client>('clients', ClientSchema)

export { ClientModel }