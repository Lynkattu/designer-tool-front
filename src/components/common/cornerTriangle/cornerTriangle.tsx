import './cornerTriangle.css'



interface CornerTriangleProps {
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    size?: string;
    background?: React.CSSProperties["background"];
}

function CornerTriangle({ position, size, background }: CornerTriangleProps) {
    return (
        <div className={`triangle-${position}`} style={{ width: size, background }}></div>
    );
}

export default CornerTriangle;