import React from "react";

import './FullscreenLayout.css'

export default function BaseLayout(props) {
    return (
        <div className="layout">
            {props.content}
        </div>
    );
}
