import xlsx, { WorkBook } from 'xlsx'
import { importSheet } from './controller'

const readExcelFile = async (filePath: string) => {
    try {
        const file: WorkBook = xlsx.readFile(`${filePath}`);

        file.SheetNames.forEach((sheetTab) => {
            const items = xlsx.utils.sheet_to_json(file.Sheets[sheetTab])
            importSheet(sheetTab, items)
        })
    }
    catch (e) {
        console.log(e);
    }
}

export { readExcelFile }