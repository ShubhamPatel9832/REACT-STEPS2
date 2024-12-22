import { useState } from "react";

const cardStyle = {
    backgroundColor: "#dee2e6",
    // border: " 3px solid #495057",
    height: "15rem",
    width: "35rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "1rem",
    alignItems: "center",
    borderRadius: "20px",
};

const numStyle = {
    height: "3rem",
    width: "3rem",
    borderRadius: "100%",
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontSize: "1.5rem",
    backgroundColor: "white",
};

const active = {
    backgroundColor: "#da77f2",
    color: "white",
};

const ulStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
};

const massage = {
    fontWeight: "bold",
    fontSize: "30px",
};

const buttonContainer = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2px",
};

const btn = {
    padding: "1rem",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#da77f2",
    fontSize: "1rem",
    color: "white",
    cursor: "pointer",
};

const messages = [
    "😎 Learn HTML",
    "🐳 Learn CSS",
    "💪 JavaScript",
    "🤑 Learn React",
];

function Card() {
    const [step, setStep] = useState(1);

    function minusStep() {
        if (step === 1) return;
        setStep(step - 1);
    }

    function plusStep() {
        if (step === messages.length) return;
        setStep(step + 1);
    }

    return (
        <div style={cardStyle}>
            <ul style={ulStyle}>
                <div style={step >= 1 ? { ...numStyle, ...active } : numStyle}>
                    <span>1</span>
                </div>

                <div style={step >= 2 ? { ...numStyle, ...active } : numStyle}>
                    <span>2</span>
                </div>

                <div style={step >= 3 ? { ...numStyle, ...active } : numStyle}>
                    <span>3</span>
                </div>

                <div style={step >= 4 ? { ...numStyle, ...active } : numStyle}>
                    <span>4</span>
                </div>
            </ul>

            <p style={massage}>{messages[step - 1]}</p>

            <div style={buttonContainer}>
                <button style={btn} onClick={minusStep}>
                    Previous
                </button>
                <button style={btn} onClick={plusStep}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Card;
