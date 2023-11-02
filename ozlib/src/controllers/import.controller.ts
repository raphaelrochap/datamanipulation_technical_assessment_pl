import xlsx, { WorkBook } from 'xlsx'
import { importBoxes, uploadBoxes } from "../services/boxes.service";
import { importClients, uploadClients } from "../services/clients.service";
import { importSplitters, uploadSplitters } from "../services/splitters.service";
import { Box, Client, Splitter, MongoCredentials } from "../types/types";
import mongoConnection from '../database/connection';

const importAndUploadData = async (filePath: string, mongoCredentials: MongoCredentials) => {
  try {
    mongoConnection.connect(`mongodb://${mongoCredentials.user}:${mongoCredentials.password}@${mongoCredentials.host}:27017/`)
    const file: WorkBook = xlsx.readFile(`${filePath}`);

    file.SheetNames.forEach(async (sheetTab) => {
      const items = xlsx.utils.sheet_to_json(file.Sheets[sheetTab])
      switch (sheetTab) {
        case 'Boxes': {
          await importBoxes(items as Box[])
          await uploadBoxes()
          break;
        }
    
        case 'Splitters': {
          await importSplitters(items as Splitter[])
          await uploadSplitters()
          break;
        }
    
        case 'Clients': {
          await importClients(items as Client[])
          await uploadClients()
          break;
        }
      }
    })
  }
  catch (e) {
    console.log(e);
  }
}

export { importAndUploadData }