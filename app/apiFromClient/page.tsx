"use client"
import React, { useEffect, useState } from 'react'

const ApiFromClientPage = () => {
    const [name, setName] = useState<string>()

    useEffect(() => {
        fetch("api/whoAmI")
            .then((res) => res.json())
            .then((data) => setName(data.name))
    }, [])

    return (
        <div>
            <div>
                API ROUTE FROM <span className="font-bold underline"> CLIENT </span>
            </div>
            <div className="">
                Name: {name}
            </div>
        </div>
    )
}

export default ApiFromClientPage