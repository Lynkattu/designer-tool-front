import './skewButton.css'

interface SkewButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    onClick: () => void;
}


function SkewButton({ text, type = "button", onClick }: SkewButtonProps) {
    return (
        <div className="skew-button">
            <button type={type} onClick={onClick}>
                <p>{text}</p>
            </button>
        </div>
    );
}

export default SkewButton;