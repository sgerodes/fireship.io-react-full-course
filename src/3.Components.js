import React from "@types/react";

function Card(props) {
    return (
        <section>
            <h2>{props.icon} Title</h2>
            {props.children}
        </section>
    );
}

function Icon() {
    return <i>🔥</i>;
}

export default {Card, Icon};
