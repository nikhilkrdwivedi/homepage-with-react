import React from 'react';
import './index.scss';
export default function QuotationHeader() {
    return (
        <div className="row justify-content-between p-2 mt-2">
            <div className="col ">
                <span className="bold" style={{ fontSize: '2rem' }}>Quotes</span>
            </div>
            <div className="col text-end ">
                <button className="btn btn-lg btnCss"><i className="bi bi-plus-circle-dotted"></i> START NEW QUOTE</button>
            </div>
        </div>
    )
}
