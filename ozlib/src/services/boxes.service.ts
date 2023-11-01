import { Error } from "mongoose"
import { BoxModel } from "../models/boxes"
import { Box } from "../types/types"
import { api } from "../ozmapApi/api"

const importBoxes = async (items: Box[]) => {  
    for (const item of items) {
    try {    
      const boxTypeId = await (await api.get('/box-types', { params: { filter: `[{ "property": "code" , "value": "${item.Type}", "operator": "eq" }]` } })).data.rows[0].id
      
      await new BoxModel({
        Name: item.Name,
        Latitude: Number(item.Latitude),
        Longitude: Number(item.Longitude),
        Type: boxTypeId,
        Level: item.Level,
        implanted: true,
      }).save()
    }
    catch (e: ErrorEvent | unknown) {
      if ((e as Error).name === 'ValidationError')
        console.log((e as Error).message)
    }
  }
  console.log(`Boxes Importados.`)
}

export { importBoxes }
