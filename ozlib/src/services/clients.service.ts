import { Error } from "mongoose"
import { ClientModel } from "../models/clients"
import { Client } from "../types/types"
import axios from "axios"
import { api } from "../ozmapApi/api"

const importClients = async (items: Client[]) => {
  for (const item of items) {
    try {
      const user = await (await axios.get('https://randomuser.me/api/')).data.results[0]
      const boxId =
        await (await api.get('/boxes', { params: { filter: `[{ "property": "name" , "value": "${item.Box}", "operator": "eq" }]` }})).data.rows[0].id

      await new ClientModel({
        Latitude: Number(item.Latitude),
        Longitude: Number(item.Longitude),
        Status: String(item.Status) === 'OK' ? 0 : String(item.Status) === 'ERROR' ? 1 : null,
        Box: boxId,
        Auto_connect: true,
        Force: true,
        Address: user.location.street.name + user.location.street.number + user.location.postcode + user.location.city + user.location.state + user.location.country,
        ClientImplanted: true,
        ClientName: user.name.first + user.name.last,
        ClientCode: user.name.first + "." + user.name.last
      }).save()
    }
    catch (e: ErrorEvent | unknown) {
      if ((e as Error).name === 'ValidationError')
        console.log((e as Error).message)
    }
  }
  console.log(`Clients importados.`)
}

export { importClients }