import type { FormEvent } from 'react';
import './basicButton.css'

interface BasicButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    onClick: () => void;
}

function BasicButton ({ text, type = "button", onClick }: BasicButtonProps) {

    return (
        <div className="basic-button">
            <button type={type} onClick={onClick} >
                <p>{text}</p>
            </button>
        </div>
    )
}

export default BasicButton