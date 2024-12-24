import { useState } from "react";
import style from "../style/dateCounter.module.css";

// const today = newDate();

function isNumber(str) {
    return !isNaN(Number(str));
}

const today = new Date();

function formateDate(date) {
    return date.toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function addDays(date, days) {
    const newDate = new Date();
    newDate.setDate(date.getDate() + days);
    return newDate;
}

// Format the date as per Indian standard (DD-MM-YYYY)

function DateCounter() {
    const [step, setStep] = useState(1);
    const [dayCount, setDayCount] = useState("0");

    const currentDate = addDays(today, Number(dayCount === "-" ? 0 : dayCount));
    // const prefix = getPrefix(dayCount);

    // function getPrefix(dayCount) {

    // }

    let prefix = "";
    if (dayCount === "0" || dayCount === "-") prefix = "Today is :  ";
    else if (Number(dayCount) > 0) prefix = `${dayCount} days after :`;
    else if (Number(dayCount) < 0) prefix = `${dayCount * -1} days before : `;

    function handleReset() {
        setStep(1);
        setDayCount(0);
    }

    function handleStepChange(e) {
        setStep(Number(e.target.value));
    }

    function handleDayCountChange(e) {
        const value = e.target.value;
        if (isNumber(value) || value === "-") setDayCount(value);
    }

    function plusDayCount() {
        if (isNumber(dayCount))
            setDayCount((dayCount) => `${Number(dayCount) + step}`);
    }

    function minusDayCount() {
        if (isNumber(dayCount))
            setDayCount((dayCount) => `${Number(dayCount) - step}`);
    }

    return (
        <div className={style.container}>
            <div className={style.buttonBox}>
                <input
                    type="range"
                    min="1"
                    max="10"
                    defaultValue="1"
                    onChange={handleStepChange}
                />
                <span>{step}</span>
            </div>
            <div className={style.rangeBox}>
                <button className={style.btn} onClick={minusDayCount}>
                    -
                </button>
                <input
                    type="text"
                    value={dayCount}
                    onChange={handleDayCountChange}
                    className={style.input}
                />
                <button className={style.btn} onClick={plusDayCount}>
                    +
                </button>
            </div>

            <p>
                {" "}
                {prefix} {formateDate(currentDate)}
            </p>
            <button onClick={handleReset} className={style.btn}>
                Reset
            </button>
        </div>
    );
}

export default DateCounter;
