import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const InventoryAddLayer = () => {
    const [name, setName] = useState('');
    const [personalNumber, setPersonalNumber] = useState('');
    const [cnic, setCninc] = useState([]);
    const [issueDate, setIssueDate] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [religion, setReligion] = useState('');
    const [dob, setDob] = useState([]);

    return (
        <div className="card h-100 p-0 radius-12 overflow-hidden">
            <div className="card-body p-40">
                <form className='row'>
                    <div className="row mb-3" style={{ border: '1px solid #e5e5e5', padding: '20px', borderRadius: '10px' }}>
                        <h6>Unit Information</h6>
                        <div className="mb-20 col-3">
                            <label
                                htmlFor="name"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Unit Number <span className="text-danger-600">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-20 col-3">
                            <label
                                htmlFor="name"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Price <span className="text-danger-600">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-20 col-3">
                            <label
                                htmlFor="setPlayType"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Size
                                <span className="text-danger-600">*</span>{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                value={personalNumber}
                                onChange={(e) => setPersonalNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-20 col-3">
                            <label
                                htmlFor="setPlayType"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Phase
                                <span className="text-danger-600">*</span>{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                value={cnic}
                                onChange={(e) => setCninc(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-20 col-3">
                            <label
                                htmlFor="setPlayType"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Block
                                <span className="text-danger-600">*</span>{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                value={fatherName}
                                onChange={(e) => setFatherName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-20 col-3">
                            <label
                                htmlFor="setPlayType"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Street
                                <span className="text-danger-600">*</span>{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                value={religion}
                                onChange={(e) => setReligion(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-20 col-3">
                            <label
                                htmlFor="setPlayType"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Lane
                                <span className="text-danger-600">*</span>{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                required
                            />
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

export default InventoryAddLayer;
