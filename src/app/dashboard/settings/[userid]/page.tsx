"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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

async function userList(id): Promise<User[]> {
  let response = await fetch(`https://dummyjson.com/users/${id}`);
  console.log(response);
  let data = await response.json();
  return data.users;
}

async function page({ params }) {
  const data = await userList(params.userid);
  console.log(params.userid, data);
}

export default page;
