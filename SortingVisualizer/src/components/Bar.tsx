export interface BarProps {
    value: number,
    width: string,

    color: string,
    quantity: number
}

export function Bar({ value, color, width, quantity }: BarProps) {
    return (
        <div
            className="container justify-center flex items-end"
            style={{ backgroundColor: color, minWidth: width, maxWidth: width, height: `${value}%` }}>
                <p className={quantity < 20 ? 'text-xs' : 'text-base'}>{value}</p>
        </div>
    );
}