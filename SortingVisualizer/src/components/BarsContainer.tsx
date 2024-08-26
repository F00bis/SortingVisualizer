import { useState } from "react"
import { Bar, BarProps } from "./Bar";

export function BarsContainer() {
    const [quantity, setQuantity] = useState(50);
    const [barValues, setBarValues] = useState<Array<BarProps>>(generateRandomBarValues(quantity));

    return (
        <div className="flex flex-row flex-grow items-end h-4/5 my-auto justify-center">
            {barValues.map((barValue: BarProps) => (
                <Bar
                    value={barValue.value}
                    color={barValue.color}
                    width={barValue.width}
                    quantity={quantity}
                />
            ))}
        </div>
    )
}

const generateRandomBarValues = (quantity: number) => {
    return Array.from({ length: quantity }, () => ({
        value: Math.floor(Math.random() * (100 - 5) + 5),
        color: '#CC33EE',
        width: `${(100 / quantity) * 0.8}%`,
        quantity: quantity
    }));
}