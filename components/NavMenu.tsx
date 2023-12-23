"use client"

import React from 'react'
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { usePathname } from 'next/navigation'

const ACTIVE_ROUTE = "text-red-600 bg-stone-700 p-3 rounded"

const INACTIVE_ROUTE = "text-stone-500"

function AuthButton() {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                <div>
                    {session?.user?.name} < br />
                    <button onClick={() => signOut()}> Sign Out </button>
                </div>
            </>
        )
    }

    return (
        <>
            <div>
                Not signed in < br />
                <button onClick={() => signIn()}> Sign in </button>
            </div>
        </>
    )
}

export default function MenuNav() {
    const pathname = usePathname();

    return (
        <div className="flex-col space-y-3">
            <AuthButton />
            <hr />
            <div className="flex flex-col space-y-3">
                <Link href="/" className={pathname === "/" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                    Home
                </Link>
                <Link href="/protected" className={pathname === "/protected" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                    Protected
                </Link>
                <Link href="/serverAction" className={pathname === "/serverAction" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                    Server Actions
                </Link>
                <Link href="/apiFromClient" className={pathname === "/apiFromClient" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                    Api From Client
                </Link>
                <Link href="/apiFromServer" className={pathname === "/apiFromServer" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                    Api From Server
                </Link>
            </div>
        </div>
    )
}