export interface ApiMessage {
  message: string;
}

export interface Coffee {
  id: number | null;
  imagePath: string | null;
  name: string;
  description: string;
  price: number;
}
