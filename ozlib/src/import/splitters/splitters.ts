import { Splitter } from "./types"

const importSplitters = (items: Splitter[]) => {
  const splitters: Splitter[] = []

  items.forEach((item, index) => {
    if (isSplitterValid(item))
      splitters.push(item)
    else
    console.log(`O ${index + 1}º Splitter não pôde ser importada.`)
  })
  console.log(`Foram importados ${splitters.length} Slitters.`)
}

const isSplitterValid = (splitter: Splitter) => {
  return true //Não foi possível ver documentação, para identificar campos obrigatórios.
}

export { importSplitters }