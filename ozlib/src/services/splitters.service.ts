import { Error } from "mongoose"
import { SplitterModel } from "../models/splitters"
import { Splitter } from "../types/types"

const importSplitters = async (items: Splitter[]) => {
  items.forEach(async (item) => {
    try {
      await new SplitterModel({
        Name: item.Name,
        Type: item.Type,
        Box: item.Box,
        implanted: String(item.implanted) === 'Yes' ? true : String(item.implanted) === 'No' ? false : null,
        Inputs: item.Inputs,
        Outputs: item.Outputs,
        'Allows client connection': String(item["Allows client connection"]) === 'Yes' ? true : String(item["Allows client connection"]) === 'No' ? false : null,
      }).save()
    }
    catch (e: ErrorEvent | unknown) {
      if ((e as Error).name === 'ValidationError')
        console.log((e as Error).message)
    }
  })
  console.log(`Splitters importados.`)
}

export { importSplitters }