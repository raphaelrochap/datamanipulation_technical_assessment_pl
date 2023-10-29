import { importBoxes } from "./boxes/boxes";
import { importClients } from "./clients/clients";
import { importSplitters } from "./splitters/splitters";
import { Box, Client, Splitter } from "./../types";

const importSheet = (sheetTab: string, items: unknown[]) => {
    switch(sheetTab){
        case 'Boxes': {                                        
            importBoxes(items as Box[])
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

export { importSheet }