import { Error } from "mongoose"
import { SplitterModel } from "../models/splitters"
import { Splitter } from "../types/types"
import { api } from "../ozmapApi/api"

const importSplitters = async (items: Splitter[]) => {
  for (const item of items) {
    try {
      const boxId =
        await (await api.get('/boxes', { params: { filter: `[{ "property": "name" , "value": "${item.Box}", "operator": "eq" }]` }})).data.rows[0].id

      const splitterTypeId =
      await (await api.get('/splitter-types', { params: { filter: `[{ "property": "code" , "value": "${item.Type}", "operator": "eq" }]` }})).data.rows[0].id

      await new SplitterModel({
        Name: item.Name,
        Type: splitterTypeId,
        Box: boxId,
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
  }
  console.log(`Splitters importados.`)
}

export { importSplitters }