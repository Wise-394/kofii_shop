export interface ApiMessage {
  message: string;
}

export interface Coffee {
  iD: number;
  imagePath: string | null;
  name: string;
  description: string;
  price: number;
}
