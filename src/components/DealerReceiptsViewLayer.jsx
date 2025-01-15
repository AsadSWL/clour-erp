import React from 'react';

const DealerReceiptsViewLayer = () => {

    return (
        <div className="receipt-container">
            <h5 className="receipt-title">Dealer Receipt</h5>
            <div className="receipt-details">
                <div className="receipt-item">
                    <label
                        htmlFor="name"
                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                    >
                        Dealer Name
                    </label>
                    <p>Asad</p>
                </div>
                <div className="receipt-item">
                    <label
                        htmlFor="setPlayType"
                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                    >
                        Unit Number
                    </label>
                    <p>A100</p>
                </div>
                <div className="receipt-item">
                    <label
                        htmlFor="setPlayType"
                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                    >
                        Commission %
                    </label>
                    <p>5%</p>
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

export default DealerReceiptsViewLayer;
