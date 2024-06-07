import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

async function UserList(id) {
  let response = await fetch(`https://dummyjson.com/users/${id}`);

  let data = await response.json();
  console.log("DATA======", data.firstName);
  return data;
}

async function page({ params }) {
  const data = await UserList(params.userid);
  return <div>{"Hello  " + data.firstName + "   " + data.lastName}</div>;
  console.log(data.firstName);
}

export default page;
