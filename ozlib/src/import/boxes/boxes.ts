import { Box } from "./types"

const importBoxes = (items: Box[]) => {
    const boxes: Box[] = []

    items.forEach((item, index) => {
        if (isBoxValid(item))
            boxes.push(item)
        else
            console.log(`A ${index + 1}ª Box não pôde ser importada.`)
    })
    console.log(`Foram importados ${boxes.length} Boxes.`)
}

const isBoxValid = (box: Box): boolean => {
    return Boolean(box.Latitude) && Boolean(box.Longitude) && typeof Number(box.Latitude) === 'number' && typeof Number(box.Longitude) === 'number'
}

export { importBoxes }