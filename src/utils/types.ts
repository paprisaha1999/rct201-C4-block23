export interface UsersTypes {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export interface TodoTypes {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
