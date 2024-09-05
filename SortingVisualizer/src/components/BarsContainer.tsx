import { useState } from "react"
import { Bar, BarProps } from "./Bar";

export function BarsContainer() {
    const [quantity, setQuantity] = useState(50);
    const [barValues, setBarValues] = useState<Array<BarProps>>(generateRandomBarValues(quantity));

    return (
        <div className="container mx-auto flex flex-col">
            <div className="container flex flex-row">
                <h1>
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                        <span className="relative text-white">Sorting Visualizer</span>
                    </span>
                </h1>
            </div>
            <div className="flex flex-row h-4/5 my-auto justify-center">
                <div className="flex justify-between grow h-full items-end">
                    {barValues.map((barValue: BarProps) => (
                        <Bar
                            value={barValue.value}
                            color={barValue.color}
                            width={barValue.width}
                            quantity={quantity}
                        />
                        
                    ))}
                </div>
            </div>
        </div>
    );
}

const generateRandomBarValues = (quantity: number) => {
    return Array.from({ length: quantity }, () => ({
        value: Math.floor(Math.random() * (100 - 5) + 5),
        color: '#CC33EE',
        width: `${(100 / quantity) * 0.8}%`,
        quantity: quantity
    }));
}