import { importAndUploadData } from "./controllers/import.controller";

const beforeAll = async () => {
    await importAndUploadData(
        '/home/raphael/Área de Trabalho/www/OZmap/datamanipulation_technical_assessment_pl/files/data.xls',
        {
          user: 'mongoadmin',
          password: 'secret',
          host: 'localhost'
        }
    )
};


beforeAll()