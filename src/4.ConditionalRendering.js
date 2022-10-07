import React, {useState} from "@types/react";
import Loops from "./5.Loops";


function LoadingButton({ onClick, loading, label }) {
    return (
        <button onClick={onClick} type="button">
            {loading ? <div className="loader"/> : label}
        </button>
    );
}

export default LoadingButton;