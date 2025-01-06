import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateMembershipLayer = () => {
    const [name, setName] = useState('');
    const [personalNumber, setPersonalNumber] = useState('');
    const [cnic, setCninc] = useState([]);
    const [issueDate, setIssueDate] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [religion, setReligion] = useState('');
    const [dob, setDob] = useState([]);
    const [maritalStatus, setMaritalStatus] = useState([]);
    const [education, setEducation] = useState(null);
    const [profession, setProfession] = useState(null);
    const [adderss, setAddress] = useState(null);
    const [laneNumber, setLaneNumber] = useState(null);
    const [streetNumber, setStreetNumber] = useState(null);
    const [sector, setSector] = useState(null);
    const [phase, setPhase] = useState(null);

    return (
        <div className="card h-100 p-0 radius-12 overflow-hidden">
            <div className="card-body p-40">
                <form className='row'>
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
                            Issue Date
                            <span className="text-danger-600">*</span>{" "}
                        </label>
                        <input
                            type="date"
                            className="form-control radius-8"
                            id="name"
                            value={issueDate}
                            onChange={(e) => issueDate(e.target.value)}
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
                            Religion
                            <span className="text-danger-600">*</span>{" "}
                        </label>
                        <input
                            type="date"
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
                            Date Of Birth
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
                    <div className="mb-20 col-6">
                        <label
                            htmlFor="game"
                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                        >
                            Marital Status
                            <span className="text-danger-600">*</span>{" "}
                        </label>
                        <select
                            className="form-control radius-8"
                            id="game"
                            required
                        >
                            <option value="" selected disabled>Select</option>
                            <option value="">Single</option>
                            <option value="">Married</option>
                        </select>
                    </div>
                    <div className="mb-20 col-6">
                        <label
                            htmlFor="game"
                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                        >
                            Education
                            <span className="text-danger-600">*</span>{" "}
                        </label>
                        <select
                            className="form-control radius-8"
                            id="game"
                            required
                        >
                            <option value="" selected disabled>Select</option>
                            <option value="">Matric</option>
                            <option value="">Intermediate</option>
                            <option value="">Bachelors</option>
                            <option value="">Masters</option>
                        </select>
                    </div>
                    <div className="mb-20 col-6">
                        <label
                            htmlFor="game"
                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                        >
                            Profession
                            <span className="text-danger-600">*</span>{" "}
                        </label>
                        <select
                            className="form-control radius-8"
                            id="game"
                            required
                        >
                            <option value="" selected disabled>Select</option>
                            <option value="">Single</option>
                            <option value="">Married</option>
                        </select>
                    </div>
                    <div className="mb-20 col-6">
                        <label
                            htmlFor="game"
                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                        >
                            Property Type
                            <span className="text-danger-600">*</span>{" "}
                        </label>
                        <select
                            className="form-control radius-8"
                            id="game"
                            required
                        >
                            <option value="" selected disabled>Select Type</option>
                            <option value="">Residential</option>
                            <option value="">Commercial</option>
                        </select>
                    </div>
                    <div className="mb-20 col-3">
                        <label
                            htmlFor="setPlayType"
                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                        >
                            Street Number
                            <span className="text-danger-600">*</span>{" "}
                        </label>
                        <input
                            type="date"
                            className="form-control radius-8"
                            id="name"
                            value={streetNumber}
                            onChange={(e) => setStreetNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-20 col-3">
                        <label
                            htmlFor="setPlayType"
                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                        >
                            Lane Number
                            <span className="text-danger-600">*</span>{" "}
                        </label>
                        <input
                            type="date"
                            className="form-control radius-8"
                            id="name"
                            value={laneNumber}
                            onChange={(e) => setLaneNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-20 col-3">
                        <label
                            htmlFor="setPlayType"
                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                        >
                            Sector
                            <span className="text-danger-600">*</span>{" "}
                        </label>
                        <input
                            type="date"
                            className="form-control radius-8"
                            id="name"
                            value={sector}
                            onChange={(e) => setSector(e.target.value)}
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
                            type="date"
                            className="form-control radius-8"
                            id="name"
                            value={phase}
                            onChange={(e) => setPhase(e.target.value)}
                            required
                        />
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
