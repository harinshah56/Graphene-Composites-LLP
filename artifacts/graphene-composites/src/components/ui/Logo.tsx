import React from 'react';

interface LogoProps {
    className?: string;
    light?: boolean;
}

export function Logo({ className = "", light = false }: LogoProps) {
    const primaryColor = "#56B15B"; // Hand-picked from the logo's green HSL(127, 51%, 48%)
    const textColor = light ? "#FFFFFF" : "#1A1C1E"; // White for dark backgrounds, Navy-Black for light

    return (
        <svg
            viewBox="0 0 290 85"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Graphene Text - Questrial with prominent black border */}
            <text
                x="2"
                y="50"
                fill={primaryColor}
                stroke="#000000"
                strokeWidth="1.6"
                style={{
                    fontFamily: "'Questrial', sans-serif",
                    fontWeight: "normal",
                    fontSize: "62px",
                    letterSpacing: "0.01em",
                    paintOrder: "stroke"
                }}
            >
                Graphene
            </text>

            {/* Composites Text - Justified alignment under Graphene */}
            <text
                x="2"
                y="78"
                fill={textColor}
                textLength="276"
                lengthAdjust="spacing"
                style={{
                    fontFamily: "'Questrial', sans-serif",
                    fontWeight: "normal",
                    fontSize: "20px",
                    textRendering: "geometricPrecision"
                }}
            >
                Composites
            </text>
        </svg>
    );
}
