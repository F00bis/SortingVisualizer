import { useState } from "react"
import { Bar, BarProps } from "./Bar";

export function BarsContainer() {
    const [barValues, setBarValues] = useState<Array<BarProps>>(generateRandomBarValues(20));

    return (
        <div className="container flex mx-auto justify-center h-full">
            <div className="container mx-auto px-4 flex flex-row items-end">
                {barValues.map((barValue: BarProps) => (
                    <Bar
                        value={barValue.value}
                        color={barValue.color}
                        width={barValue.width}
                    />
                ))}
            </div>
        </div>
    )
}

const generateRandomBarValues = (quantity: number) => {
    return Array.from({ length: quantity }, () => ({
        value: Math.floor(Math.random() * (100 - 5) + 5),
        color: '#CC33EE',
        width: `${100 / quantity}%`,
    }));
}