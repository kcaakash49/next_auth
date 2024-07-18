"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function Display() {
  const session = useSession();
  console.log(session.data?.user?.name);

  if (!session.data) {
    return <div className="border p-2 rounded-md">Please Login</div>;
  }
  return <div className="p-10 flex flex-col gap-2 border">
    <div>Name: {session.data?.user?.name}</div>
    <div>Email: {session.data?.user?.email}</div>
  </div>;
}
