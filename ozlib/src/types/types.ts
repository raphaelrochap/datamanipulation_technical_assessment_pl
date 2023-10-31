interface Box {
  Name: string,
  Latitude: number,
  Longitude: number,
  Type: string,
  Level: Number
}

interface Client {
  Latitude: number,
  Longitude: number,
  Status: number,
  // Box: string,
  // Auto_connect: boolean,
  // Force: boolean,
}

interface Splitter {
  Name: string,
  Type: string,
  Box: string,
  implanted: boolean,
  Inputs: number,
  Outputs: number,
  'Allows client connection': boolean,
}

export { Box, Client, Splitter }