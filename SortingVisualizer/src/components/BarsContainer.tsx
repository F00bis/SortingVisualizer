import { useState } from "react"

export function BarsContainer() {
    const [barValues, setBarValues] = useState<Array<number>>(generateRandomBarValues(20));

    return(
        <div>
            Put bars here
        </div>
    )
}

const generateRandomBarValues = (quantity: number) => {
    return Array.from({ length: quantity }, () => Math.floor(Math.random() * quantity));
}