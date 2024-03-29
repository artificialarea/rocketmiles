import React from 'react';

export default function ErrorCard(props) {
    const { message } = props.error;

    return (
        <div className="error-card">
            <p>{message}</p>
        </div>
    )
}