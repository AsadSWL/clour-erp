import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateMembershipLayer = () => {
    const [name, setName] = useState('');
    const [personalNumber, setPersonalNumber] = useState('');

    return (
        <div className="card h-100 p-0 radius-12 overflow-hidden">
            <div className="card-body p-40">
                <form className='row'>
                    <div className="row mb-3" style={{ border: '1px solid #e5e5e5', padding: '20px', borderRadius: '10px' }}>
                        <h6>Member Information</h6>
                        <div className="mb-20 col-6">
                            <label
                                htmlFor="name"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Name <span className="text-danger-600">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-20 col-3">
                            <label
                                htmlFor="setPlayType"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Personal Number
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
                                CNIC
                                <span className="text-danger-600">*</span>{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                required
                            />
                        </div>
                        <div className="mb-20 col-3">
                            <label
                                htmlFor="setPlayType"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Passport Number
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                required
                            />
                        </div>
                        <div className="mb-20 col-3">
                            <label
                                htmlFor="game"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Gender
                                <span className="text-danger-600">*</span>{" "}
                            </label>
                            <select
                                className="form-control radius-8"
                                id="game"
                                required
                            >
                                <option value="" selected disabled>Select Gender</option>
                                <option value="">Male</option>
                                <option value="">Female</option>
                            </select>
                        </div>
                        <div className="mb-20 col-6">
                            <label
                                htmlFor="setPlayType"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Address
                                <span className="text-danger-600">*</span>{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                required
                            />
                        </div>
                        <b>Next of kin</b>
                        <div className="mb-20 col-3">
                            <label
                                htmlFor="setPlayType"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Name
                                <span className="text-danger-600">*</span>{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                required
                            />
                        </div>
                        <div className="mb-20 col-3">
                            <label
                                htmlFor="setPlayType"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Father Name
                                <span className="text-danger-600">*</span>{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                required
                            />
                        </div>
                        <div className="mb-20 col-3">
                            <label
                                htmlFor="setPlayType"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                CNIC
                                <span className="text-danger-600">*</span>{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                required
                            />
                        </div>
                        <div className="mb-20 col-3">
                            <label
                                htmlFor="setPlayType"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Phone Number
                                <span className="text-danger-600">*</span>{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                required
                            />
                        </div>

                        <div className="mb-20 col-3">
                            <label
                                htmlFor="setPlayType"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Name
                                <span className="text-danger-600">*</span>{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                required
                            />
                        </div>
                        <div className="mb-20 col-3">
                            <label
                                htmlFor="setPlayType"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Father Name
                                <span className="text-danger-600">*</span>{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                required
                            />
                        </div>
                        <div className="mb-20 col-3">
                            <label
                                htmlFor="setPlayType"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                CNIC
                                <span className="text-danger-600">*</span>{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                required
                            />
                        </div>
                        <div className="mb-20 col-3">
                            <label
                                htmlFor="setPlayType"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Phone Number
                                <span className="text-danger-600">*</span>{" "}
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                required
                            />
                        </div>


                    </div>
                    <div className="row mb-3" style={{ border: '1px solid #e5e5e5', padding: '20px', borderRadius: '10px' }}>
                        <h6>Unit Information</h6>
                        <div className="mb-20 col-6">
                            <label
                                htmlFor="game"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Select Unit
                                <span className="text-danger-600">*</span>{" "}
                            </label>
                            <select
                                className="form-control radius-8"
                                id="game"
                                required
                            >
                                <option value="" selected disabled>Select Unit</option>
                                <option value="">A100</option>
                                <option value="">A101</option>
                                <option value="">A102</option>
                                <option value="">A103</option>
                                <option value="">A104</option>
                                <option value="">A105</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3" style={{ border: '1px solid #e5e5e5', padding: '20px', borderRadius: '10px' }}>
                        <h6>Documents</h6>
                        <div className="mb-20 col-3">
                            <label
                                className="upload-file h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                                htmlFor="upload-file"
                            >
                                <Icon
                                    icon="solar:camera-outline"
                                    className="text-xl text-secondary-light"
                                ></Icon>
                                <span className="fw-semibold text-secondary-light">Picture</span>
                            </label>
                        </div>
                        <div className="mb-20 col-3">
                            <label
                                className="upload-file h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                                htmlFor="upload-file"
                            >
                                <Icon
                                    icon="solar:camera-outline"
                                    className="text-xl text-secondary-light"
                                ></Icon>
                                <span className="fw-semibold text-secondary-light">CNIC Front</span>
                            </label>
                        </div>
                        <div className="mb-20 col-3">
                            <label
                                className="upload-file h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                                htmlFor="upload-file"
                            >
                                <Icon
                                    icon="solar:camera-outline"
                                    className="text-xl text-secondary-light"
                                ></Icon>
                                <span className="fw-semibold text-secondary-light">CNIC Back</span>
                            </label>
                        </div>
                        <div className="mb-20 col-3">
                            <label
                                className="upload-file h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                                htmlFor="upload-file"
                            >
                                <Icon
                                    icon="solar:camera-outline"
                                    className="text-xl text-secondary-light"
                                ></Icon>
                                <span className="fw-semibold text-secondary-light">Thumb</span>
                            </label>
                        </div>
                    </div>
                    <div className="row mb-3" style={{ border: '1px solid #e5e5e5', padding: '20px', borderRadius: '10px' }}>
                        <h6>Installment Plan</h6>
                        <div className="mb-20 col-6">
                            <label
                                htmlFor="name"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Property Amount <span className="text-danger-600">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                value={10000000}
                                onChange={(e) => setName(e.target.value)}
                                disabled
                            />
                        </div>
                        <div className="mb-20 col-6">
                            <label
                                htmlFor="game"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Select Down Payment
                                <span className="text-danger-600">*</span>{" "}
                            </label>
                            <select
                                className="form-control radius-8"
                                id="game"
                                required
                            >
                                <option value="" selected disabled>Select Down Payment</option>
                                <option value="">10%</option>
                                <option value="">20%</option>
                                <option value="">30%</option>
                                <option value="">40%</option>
                                <option value="">50%</option>
                                <option value="">60%</option>
                                <option value="">70%</option>
                                <option value="">80%</option>
                                <option value="">90%</option>
                                <option value="">100%</option>
                            </select>
                        </div>
                        <div className="mb-20 col-6">
                            <label
                                htmlFor="name"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Balloting Amount (10%) <span className="text-danger-600">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                value={1000000}
                                onChange={(e) => setName(e.target.value)}
                                disabled
                            />
                        </div>
                        <div className="mb-20 col-6">
                            <label
                                htmlFor="name"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Duration <span className="text-danger-600">*</span>
                            </label>
                            <select
                                className="form-control radius-8"
                                id="game"
                                required
                            >
                                <option value="" selected disabled>Select Duration</option>
                                <option value="">6 months</option>
                                <option value="">1 year</option>
                                <option value="">1.5 year</option>
                                <option value="">2 years</option>
                                <option value="">2.5 years</option>
                                <option value="">3 years</option>
                            </select>
                        </div>
                        <div className="mb-20 col-6">
                            <label
                                htmlFor="name"
                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                            >
                                Monthly Installment <span className="text-danger-600">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control radius-8"
                                id="name"
                                value={1000000}
                                onChange={(e) => setName(e.target.value)}
                                disabled
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

export default CreateMembershipLayer;
