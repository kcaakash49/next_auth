'use client'
import { signIn, signOut } from "next-auth/react"

export default function Appbar(){
    return <div className="flex justify-between">
        <button onClick={() => {
            signIn()
        }} className="border-2 border-black rounded-md px-2 py-1">SignIn</button>

        <button onClick={() => {
            signOut()
        }} className="border-2 border-black rounded-md px-2 py-1">LogOut</button>
    </div>
}