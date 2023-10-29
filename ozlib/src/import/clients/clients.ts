import { Client } from "./types"

const importClients = (items: Client[]) => {
  const clients: Client[] = items  

  console.log(`Foram importados ${clients.length} Clients.`)
}

export { importClients }