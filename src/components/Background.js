import React from 'react';

import '../css/login-page.css';

export default function Background(props) {
    return (
        <React.Fragment>
            <div className="page-background">
                {props.children}
            </div>
        </React.Fragment>
    );
}
