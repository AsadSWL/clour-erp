import React from 'react';

const StockReceiptViewLayer = () => {

    return (
        <div className="receipt-container">
            <h5 className="receipt-title">Stock Receipt</h5>
            <div className="receipt-details">
                <div className="receipt-item">
                    <label
                        htmlFor="name"
                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                    >
                        Material
                    </label>
                    <p>Cement</p>
                </div>
                <div className="receipt-item">
                    <label
                        htmlFor="setPlayType"
                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                    >
                        Quantity
                    </label>
                    <p>200</p>
                </div>
                <div className="receipt-item">
                    <label
                        htmlFor="setPlayType"
                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                    >
                        Amount
                    </label>
                    <p>200000</p>
                </div>
                <div className="receipt-item">
                    <label
                        htmlFor="setPlayType"
                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                    >
                        Status
                    </label>
                    <p>Paid</p>
                </div>
                <div className="receipt-item">
                    <label
                        htmlFor="setPlayType"
                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                    >
                        Paid Via
                    </label>
                    <p>Cash</p>
                </div>
            </div>
        </div>
    );
};

export default StockReceiptViewLayer;
