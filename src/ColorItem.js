import React, { useState, useEffect } from "react";

export function ColorItem({ list }) {
    const [alert, setAlert] = useState(false);

    const colorClick = (text) => {
        navigator.clipboard.writeText(text);
        setAlert(true);
    }
    return (
        <section className="color-list">
            {list.map((item, index) => {
                const {rgb, weight, hex} = item;
                let rgbString = rgb.join(",");
                return (
                    <article
                        key ={index}
                        className={`color-item ${index >= 10 && "color-white"}`}
                        style={{
                            backgroundColor: `rgb(${rgbString})`,
                        }}
                        onClick={() => colorClick(hex)}
                    >
                        <p>#{hex}</p>
                        <p>{weight}%</p>
                        {alert && <p class="alert">Copied to clipboard</p>}
                    </article>
                )
            })}
        </section>
    )
}