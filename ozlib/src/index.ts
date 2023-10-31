import { readExcelFile } from "./controllers/import.controller";
import conn from "./database/connection";

const beforeAll = async () => {
  const mongoUri: string = `mongodb://mongoadmin:secret@localhost:27017/`

  try {
    conn.connect(mongoUri)
    await readExcelFile('/home/raphael/Área de Trabalho/www/OZmap/datamanipulation_technical_assessment_pl/files/data.xls')
  }
  finally {
    console.log('Fim da importação')
  }
};


beforeAll()