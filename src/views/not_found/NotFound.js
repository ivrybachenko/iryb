import React from "react";

import { Files } from 'react-bootstrap-icons';

import './NotFound.css';

export default function NotFound() {
    return (
        <div className="h-100 d-flex flex-column justify-content-center align-items-center text-center">
            <div className="display-1">PAGE</div>
            <div className="display-5">NOT</div>
            <div className="display-4">FOUND</div>
            <div className="w-75 mt-4 mb-3 text-center d-flex url">
                <div className="d-inline-flex mr-2 h-100 justify-content-center align-items-center py-1 px-3 url-label">
                    URL
                </div>
                <span className="flex-grow-1 py-1">
                    http://localhost:3000/nosuchpage
                </span>
                <div className="d-inline-flex ml-2 h-100 justify-content-center align-items-center py-1 px-3 url-copy">
                    <Files />
                </div>
            </div>
            <div className="mt-3">
                <a href="/" className="link mx-4">Go home</a>
                <a href="#" className="link mx-4">Refresh page</a>
            </div>
        </div>
    );
}
