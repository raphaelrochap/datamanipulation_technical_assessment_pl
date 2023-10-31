import { Error } from "mongoose"
import { BoxModel } from "../models/boxes"
import { Box } from "../types/types"

const importBoxes = async (items: Box[]) => {
  items.forEach(async (item) => {
    try {
      await new BoxModel({
        Name: item.Name,
        Latitude: Number(item.Latitude),
        Longitude: Number(item.Longitude),
        Type: item.Type,
        Level: item.Level,
        implanted: true,
      }).save()
    }
    catch (e: ErrorEvent | unknown) {
      if ((e as Error).name === 'ValidationError')
        console.log((e as Error).message)
    }
  })
  await console.log(`Boxes Importados.`)
}

export { importBoxes }