// import { NextRequest, NextResponse } from "next/server";

// interface paramtype{
//     params: {
//         nextauth: string[]
//     }
// }
//getting params from url
// export function GET(req:NextRequest,  { params: {nextauth} } : paramtype){
//      console.log(nextauth)

//     return NextResponse.json({
//         msg:"Success"
//     })

// }

import { NEXT_AUTH } from "@/app/lib/auth";
import NextAuth from "next-auth/next";


const handler = NextAuth(NEXT_AUTH);

export const GET = handler;
export const POST = handler;
