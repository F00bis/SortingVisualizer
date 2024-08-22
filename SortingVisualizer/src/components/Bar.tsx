export interface BarProps {
    value: number,
    width: string,
    color: string
}

export function Bar({ value, color, width }: BarProps) {
    return (
        <div
            className="container m-1 justify-center flex items-end"
            style={{ backgroundColor: color, width: width, height: `${value}%` }}>
            <p>{value}</p>
        </div>
    );
}