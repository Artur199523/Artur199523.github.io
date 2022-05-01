import React, {useEffect, useState, memo} from "react";
import "./style.scss"

const cleanPercentage = (percentage) => {
    const tooLow = !Number.isFinite(+percentage) || percentage < 0;
    const tooHigh = percentage > 100;
    return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({colour, pct}) => {
    const r = 40;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - pct) * circ) / 100;
    return (
        <circle
            r={r}
            cx={150}
            cy={50}
            fill="transparent"
            stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
            strokeWidth={"6px"}
            strokeDasharray={circ}
            strokeDashoffset={pct ? strokePct : 0}
            strokeLinecap="round"
        >.</circle>
    );
};

const Text = ({percentage}) => {
    return (
        <text
            className="text"
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fontSize={"1em"}
            fill={"white"}
        >
            {percentage.toFixed(0)}%
        </text>
    );
};

const Pie = ({circleOne, circleTwo, transactionTime}) => {
    const [percentage, setPercentage] = useState(1)
    let timeIntervalPercent

    useEffect(() => {
        percentAge(transactionTime)
        timeIntervalPercent = setInterval(percentAge, 1000)
        return (() => {
            clearInterval(timeIntervalPercent)
        })

    }, [])

    const percentAge = () => {
        setPercentage(prev => {
                return prev + 3
        })
    }

    const pct = cleanPercentage(percentage);
    return (
        <svg width={100} height={100}>
            <g transform={`rotate(-90 ${"100 100"})`}>
                <Circle colour={circleOne}/>
                <Circle colour={circleTwo} pct={pct}/>
            </g>
            <Text percentage={pct}/>
        </svg>
    );
};

export default memo(Pie)
