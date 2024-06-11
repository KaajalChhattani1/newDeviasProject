import Link from "next/link";
import { apiRoutes } from "@/apiRoutes";
import DeleteUser from "./deleteUser";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    country: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: {
        latitude: number;
        longitude: number;
      };
      country: string;
    };
  };
  ein: string;
  ssn?: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
  role: string;
}

async function userList(): Promise<User[]> {
  let response = await fetch(apiRoutes.childrenApi);
  let data = await response.json();

  return data.users;
}

export default async function page() {
  let users = await userList();
  return (
    <div>
      {users.map((item) => (
        <div key={item.id}>
          {item.id}
          <Link href={`/dashboard/settings/${item.id}`}>
            {item.firstName + "        "}
          </Link>
          <DeleteUser id={item.id} />
        </div>
      ))}
    </div>
  );
}
