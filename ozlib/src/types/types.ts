interface MongoCredentials {
  user: string,
  password: string
  host: string
}

interface Box {
  Name: string,
  Latitude: number,
  Longitude: number,
  Type: string,
  Level: Number
  implanted: boolean
}

interface Client {
  Latitude: number,
  Longitude: number,
  Status: number,
  Box: string,
  Auto_connect: boolean,
  Force: boolean,
  Address: string,
  ClientImplanted: boolean,
  ClientName: string,
  ClientCode: string
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

export { Box, Client, Splitter, MongoCredentials }