import { Error } from "mongoose"
import { ClientModel } from "../models/clients"
import { Client } from "../types/types"

const importClients = async (items: Client[]) => {
  items.forEach(async (item) => {
    try {
      await new ClientModel({
        Latitude: Number(item.Latitude),
        Longitude: Number(item.Longitude),
        Status: String(item.Status) === 'OK' ? 0 : String(item.Status) === 'ERROR' ? 1 : null,
        // Box: item.Box,                  
        // Auto_connect: String(item.Auto_connect)  === 'true' ? true : String(item.Auto_connect)  === 'false' ? false : null,
        // Force: String(item.Force)  === 'true' ? true : String(item.Force)  === 'false' ? false : null,
      }).save()
    }
    catch (e: ErrorEvent | unknown) {
      if ((e as Error).name === 'ValidationError')
        console.log((e as Error).message)
    }
  })
  console.log(`Clients importados.`)
}

export { importClients }