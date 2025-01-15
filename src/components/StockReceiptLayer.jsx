import React, { useEffect, useRef, useState } from 'react';

const StockReceiptLayer = () => {
    const [name, setName] = useState('');

    return (
        <div className="card h-100 p-0 radius-12 overflow-hidden">
            <div className="card-body p-40">
                <form className='row'>
                    <div className="row mb-3" style={{ border: '1px solid #e5e5e5', padding: '20px', borderRadius: '10px' }}>
                        <h6>Receipt Information</h6>
                        <div className="mb-20 col-6">
                            <label
                                htmlFor="name"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Material <span className="text-danger-600">*</span>
                            </label>
                            <select
                                className="form-control radius-8"
                                id="game"
                                required
                            >
                                <option value="" selected disabled>Select Material</option>
                                <option value="">Cement</option>
                                <option value="">Concrete</option>
                                <option value="">Brick</option>
                                <option value="">Steel</option>
                                <option value="">Stone</option>
                            </select>
                        </div>
                        <div className="mb-20 col-6">
                            <label
                                htmlFor="name"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Used Quantity <span className="text-danger-600">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-20 col-6">
                            <label
                                htmlFor="name"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Amount <span className="text-danger-600">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                value="20000"
                                onChange={(e) => setName(e.target.value)}
                                disabled
                            />
                        </div>
                        <div className="mb-20 col-6">
                            <label
                                htmlFor="name"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Payment Status <span className="text-danger-600">*</span>
                            </label>
                            <select
                                className="form-control radius-8"
                                id="game"
                                required
                            >
                                <option value="" selected disabled>Select Payment Status</option>
                                <option value="">Paid</option>
                                <option value="">Unpaid</option>
                            </select>
                        </div>
                        <div className="mb-20 col-6">
                            <label
                                htmlFor="name"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Payment Method <span className="text-danger-600">*</span>
                            </label>
                            <select
                                className="form-control radius-8"
                                id="game"
                                required
                            >
                                <option value="" selected disabled>Select Payment Method</option>
                                <option value="">Cash</option>
                                <option value="">Bank Transfer</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center gap-3">
                        <button
                            type="button"
                            className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-56 py-11 radius-8"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary border border-primary-600 text-md px-56 py-12 radius-8"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StockReceiptLayer;
