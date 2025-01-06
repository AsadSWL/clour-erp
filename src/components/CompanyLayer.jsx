import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useAuth } from "../context/AuthContext";
import axios from 'axios';

const CompanyLayer = () => {
    const { user, setUser } = useAuth();
    const [imagePreview, setImagePreview] = useState(null);
    const token = localStorage.getItem('token');
    const fileInputRef = useRef(null);
    const baseURL = process.env.REACT_APP_BASE_URL;

    const handleFileChange = (e) => {
        if (e.target.files.length) {
            const src = URL.createObjectURL(e.target.files[0]);
            setImagePreview(src);
        }
    };

    const removeImage = () => {
        setImagePreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const [profileData, setProfileData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        image: '',
        bio: ''
    });

    const [passwordData, setPasswordData] = useState({
        password: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData((prev) => ({ ...prev, [name]: value }));
    };

    const handleProfileSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     setProfileData((prev) => ({ ...prev, image: fileInputRef.current.files[0] }));
        //     console.log(profileData);
        //     const response = await axios.put(`${baseURL}/api/handicapper/update-profile`, profileData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //             Authorization: `Bearer ${token}`,
        //         }
        //     });
        //     console.log(response)
        //     localStorage.removeItem('token');
        //     localStorage.setItem('token', response.data.token);
        //     alert("Profile data updated");
        //     setUser(response.data);
        // } catch (error) {
        //     setErrorMessage('Error updating profile. Please try again later.');
        // }
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();

        // if (passwordData.newPassword !== passwordData.confirmPassword) {
        //     setPasswordError('New password and confirm password do not match.');
        //     return;
        // }

        // try {
        //     await axios.put(`${baseURL}/api/handicapper/update-password`, passwordData, {
        //         headers: {
        //             Authorization: `Bearer ${token}`,
        //         },
        //     });
        //     alert('Password updated successfully');
        //     setPasswordData({ password: '', newPassword: '', confirmPassword: '' });
        // } catch (error) {
        //     setPasswordError('Error updating password. Please try again later.');
        // }
    };

    useEffect(() => {
        return () => {
            if (imagePreview) {
                URL.revokeObjectURL(imagePreview);
            }
        };
    }, [imagePreview]);

    return (
        <>
            <div className="card h-100 p-0 radius-12 overflow-hidden mb-3">
                <div className="card-body p-40">
                    {/* Upload Image Start */}
                    <div className="upload-image-wrapper d-flex align-items-center gap-3">
                        {/* Image preview section */}
                        {imagePreview ? (
                            <div className="uploaded-img position-relative h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50">
                                <button
                                    type="button"
                                    onClick={removeImage}
                                    className="uploaded-img__remove position-absolute top-0 end-0 z-1 text-2xxl line-height-1 me-8 mt-8 d-flex"
                                    aria-label="Remove uploaded image"
                                >
                                    <Icon
                                        icon="radix-icons:cross-2"
                                        className="text-xl text-danger-600"
                                    ></Icon>
                                </button>
                                <img
                                    id="uploaded-img__preview"
                                    className="w-100 h-100 object-fit-cover"
                                    src={imagePreview}
                                    alt="Preview"
                                />
                            </div>
                        ) : (
                            <label
                                className="upload-file h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                                htmlFor="upload-file"
                            >
                                <Icon
                                    icon="solar:camera-outline"
                                    className="text-xl text-secondary-light"
                                ></Icon>
                                <span className="fw-semibold text-secondary-light">Upload</span>
                            </label>
                        )}

                        {/* Always render the input, but hide it */}
                        <input
                            id="upload-file"
                            type="file"
                            onChange={handleFileChange}
                            hidden
                            ref={fileInputRef}
                            accept="image/*" // Optional: restrict to image files
                        />
                    </div>
                    {/* Upload Image End */}
                    <form onSubmit={handleProfileSubmit}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="mb-20">
                                    <label htmlFor="firstname" className="form-label fw-semibold text-primary-light text-sm mb-8">
                                        First Name <span className="text-danger-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control radius-8"
                                        id="firstname"
                                        name="firstname"
                                        placeholder="Enter First Name"
                                        value={profileData.firstname}
                                        onChange={handleProfileChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-20">
                                    <label htmlFor="lastname" className="form-label fw-semibold text-primary-light text-sm mb-8">
                                        Last Name <span className="text-danger-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control radius-8"
                                        id="lastname"
                                        name="lastname"
                                        placeholder="Enter Last Name"
                                        value={profileData.lastname}
                                        onChange={handleProfileChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-20">
                                    <label htmlFor="email" className="form-label fw-semibold text-primary-light text-sm mb-8">
                                        Email <span className="text-danger-600">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control radius-8"
                                        id="email"
                                        name="email"
                                        placeholder="Enter email address"
                                        value={profileData.email}
                                        onChange={handleProfileChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-20 col-12">
                                <label
                                    htmlFor="bio"
                                    className="form-label fw-semibold text-primary-light text-sm mb-8"
                                >
                                    Bio
                                </label>
                                <textarea
                                    className="form-control radius-8"
                                    id="bio"
                                    rows="20"
                                    name="bio"
                                    placeholder="Enter your bio"
                                    value={profileData.bio}
                                    onChange={handleProfileChange}
                                ></textarea>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-3 mt-24">
                                <button type="submit" className="btn btn-primary border border-primary-600 text-md px-24 py-12 radius-8">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <div className="card h-100 p-0 radius-12 overflow-hidden">
                <div className="card-body p-40">
                    {passwordError && <p className="text-danger">{passwordError}</p>}
                    <form onSubmit={handlePasswordSubmit}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="mb-20">
                                    <label htmlFor="password" className="form-label fw-semibold text-primary-light text-sm mb-8">
                                        Current Password <span className="text-danger-600">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control radius-8"
                                        id="password"
                                        name="password"
                                        placeholder="Enter Current Password"
                                        value={passwordData.password}
                                        onChange={handlePasswordChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-20">
                                    <label htmlFor="newPassword" className="form-label fw-semibold text-primary-light text-sm mb-8">
                                        New Password <span className="text-danger-600">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control radius-8"
                                        id="newPassword"
                                        name="newPassword"
                                        placeholder="Enter New Password"
                                        value={passwordData.newPassword}
                                        onChange={handlePasswordChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-20">
                                    <label htmlFor="confirmPassword" className="form-label fw-semibold text-primary-light text-sm mb-8">
                                        Confirm Password <span className="text-danger-600">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control radius-8"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Confirm New Password"
                                        value={passwordData.confirmPassword}
                                        onChange={handlePasswordChange}
                                    />
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-3 mt-24">
                                <button type="submit" className="btn btn-primary border border-primary-600 text-md px-24 py-12 radius-8">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CompanyLayer;
