"use client"
import React, { useState } from "react"

export default function WhoAmIButton({
    whoAmIAction
}: {
    whoAmIAction: () => Promise<string>
}) {
    const [name, setName] = useState<string>();
    return (
        <div>
            <button
                onClick={
                    async () => {
                        setName(await whoAmIAction())
                    }
                }>
                Who Am I?
            </button>
            {name && <div>You're {name}</div>}
        </div>
    )
}
