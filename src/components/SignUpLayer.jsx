import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const SignUpLayer = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const baseURL = process.env.REACT_APP_BASE_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     const role = 'handicapper';
        //     const url = `${baseURL}/api/auth/register`;
        //     const response = await axios.post(url, { firstname, lastname, email, password, role }, {
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         withCredentials: false,
        //     });
        //     login(response.data.token);
            navigate("/handicapper/dashboard");
        // } catch (err) {
        //     setError("Invalid email or password.");
        // }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <section className="auth bg-base d-flex flex-wrap" style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <div className="auth-right py-32 px-24 d-flex flex-column justify-content-center">
                <div className="max-w-464-px mx-auto w-100">
                    <div>
                        <Link to="/" className="mb-40 d-flex justify-content-center">
                            {/* <img src="/assets/images/logo.png" alt="" width={250} /> */}
                            <h2>Cloud ERP</h2>
                        </Link>
                        <h4 className="mb-12">Create your Account</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <div className="icon-field mb-16">
                            <span className="icon top-50 translate-middle-y">
                                <Icon icon="mage:user" />
                            </span>
                            <input
                                type="text"
                                className="form-control h-56-px bg-neutral-50 radius-12"
                                placeholder="First Name"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                required
                            />
                        </div>
                        <div className="icon-field mb-16">
                            <span className="icon top-50 translate-middle-y">
                                <Icon icon="mage:user" />
                            </span>
                            <input
                                type="text"
                                className="form-control h-56-px bg-neutral-50 radius-12"
                                placeholder="Last Name"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                required
                            />
                        </div>
                        <div className="icon-field mb-16">
                            <span className="icon top-50 translate-middle-y">
                                <Icon icon="mage:email" />
                            </span>
                            <input
                                type="email"
                                className="form-control h-56-px bg-neutral-50 radius-12"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="position-relative mb-20">
                            <div className="icon-field">
                                <span className="icon top-50 translate-middle-y">
                                    <Icon icon="solar:lock-password-outline" />
                                </span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="form-control h-56-px bg-neutral-50 radius-12"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <span
                                className="toggle-password cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light"
                                onClick={togglePasswordVisibility}
                                style={{ marginTop: '-5px' }}
                            >
                                <Icon
                                    icon={showPassword ? 'ri-eye-close-line' : 'ri-eye-line'}
                                />
                            </span>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"
                        >
                            {" "}
                            Sign In
                        </button>
                    </form>
                    <Link 
                        to="/"
                        className="text-primary py-4 fw-medium text-sm mt-3"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </section>

    )
}

export default SignUpLayer