import React from 'react'
import { headers } from 'next/headers'

export default async function ApiFromServerPage() {
    const res = await fetch("http://localhost:3000/api/whoAmI", {
        method: "GET",
        headers: headers(),
    });

    const data = await res.json();

    return (
        <div>
            <div>
                API ROUTE FROM <span className="font-bold underline"> SERVER </span>
            </div>
            <div className="">
                Name: {data.name}
            </div>
        </div>
    )
}