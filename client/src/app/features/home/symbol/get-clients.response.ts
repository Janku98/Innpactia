export interface GetClientsResponse {
    clientId: number;
    name: string;
}

export interface NewClient {
  name: string;
}


      

export interface ClientByIdResponse {
  clientName: string
  phones: Phone[]
  clientId: number
}

export interface Phone {
  cellphoneId: number
  clientId: number
  cell_name: string
}
