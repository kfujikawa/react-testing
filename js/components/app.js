import React from 'react';
import Gallery from './gallery';

export default function App(props) {
    return (
        <div>
            <h1>
                Testing App
            </h1>
            <div>
                {props.children}
            </div>
        </div>
    );
};