import xlsx, { WorkBook } from 'xlsx'
import { importBoxes } from "../services/boxes.service";
import { importClients } from "../services/clients.service";
import { importSplitters } from "../services/splitters.service";
import { Box, Client, Splitter } from "../types/types";


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

const importSheet = async (sheetTab: string, items: unknown[]) => {
  switch (sheetTab) {
    case 'Boxes': {
      await importBoxes(items as Box[])
      break;
    }

    case 'Splitters': {
      importSplitters(items as Splitter[])
      break;
    }

    case 'Clients': {
      importClients(items as Client[])
      break;
    }
  }
}

export { readExcelFile }