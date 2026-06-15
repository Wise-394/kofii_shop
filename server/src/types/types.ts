export interface ApiMessage {
  message: string;
}

export interface Coffee {
  id: number | null;
  imagePath: string | null;
  name: string;
  description: string;
  price: number;
  isActive: boolean;
  isFeatured: boolean;
}

export interface User {
  id: number | null;
  username: string;
  password: string;
}
