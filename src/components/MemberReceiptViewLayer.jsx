import React from 'react';

const MemberReceiptViewLayer = () => {

    return (
        <div className="receipt-container">
            <h5 className="receipt-title">Member Receipt</h5>
            <div className="receipt-details">
                <div className="receipt-item">
                    <label
                        htmlFor="name"
                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                    >
                        Membership Number
                    </label>
                    <p>MB001</p>
                </div>
                <div className="receipt-item">
                    <label
                        htmlFor="name"
                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                    >
                        Member Name
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
                        Payment Type
                    </label>
                    <p>Installment</p>
                </div>
                <div className="receipt-item">
                    <label
                        htmlFor="setPlayType"
                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                    >
                        Month
                    </label>
                    <p>January</p>
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

export default MemberReceiptViewLayer;
