import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggleButton from "../helper/ThemeToggleButton";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MasterLayout = ({ children }) => {
    let [sidebarActive, seSidebarActive] = useState(false);
    let [mobileMenu, setMobileMenu] = useState(false);
    const location = useLocation();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    useEffect(() => {
        // Function to handle dropdown clicks
        const handleDropdownClick = (event) => {
            event.preventDefault();
            const clickedLink = event.currentTarget;
            const clickedDropdown = clickedLink.closest('.dropdown');

            if (!clickedDropdown) return;

            const isActive = clickedDropdown.classList.contains('open');

            // Close all dropdowns
            const allDropdowns = document.querySelectorAll('.sidebar-menu .dropdown');
            allDropdowns.forEach((dropdown) => {
                dropdown.classList.remove('open');
            });

            // Toggle the clicked dropdown
            if (!isActive) {
                clickedDropdown.classList.add('open');
            }
        };

        // Attach click event listeners to all dropdown triggers
        const dropdownTriggers = document.querySelectorAll('.sidebar-menu .dropdown > a, .sidebar-menu .dropdown > Link');

        dropdownTriggers.forEach((trigger) => {
            trigger.addEventListener('click', handleDropdownClick);
        });

        // Function to open submenu based on current route
        const openActiveDropdown = () => {
            const allDropdowns = document.querySelectorAll('.sidebar-menu .dropdown');
            allDropdowns.forEach((dropdown) => {
                const submenuLinks = dropdown.querySelectorAll('.sidebar-submenu li a');
                submenuLinks.forEach((link) => {
                    if (link.getAttribute('href') === location.pathname || link.getAttribute('to') === location.pathname) {
                        dropdown.classList.add('open');
                    }
                });
            });
        };

        // Open the submenu that contains the open route
        openActiveDropdown();


        // Cleanup event listeners on unmount
        return () => {
            dropdownTriggers.forEach((trigger) => {
                trigger.removeEventListener('click', handleDropdownClick);
            });

        };
    }, [location.pathname]);


    let sidebarControl = () => {
        seSidebarActive(!sidebarActive);
    };

    let mobileMenuControl = () => {
        setMobileMenu(!mobileMenu);
    };



    return (
        <section className={mobileMenu ? "overlay active" : "overlay "}>
            {/* sidebar */}
            <aside className={sidebarActive ? "sidebar active " : mobileMenu ? "sidebar sidebar-open" : "sidebar"}>
                <button onClick={mobileMenuControl} type="button" className="sidebar-close-btn">
                    <Icon icon="radix-icons:cross-2" />
                </button>
                <div>
                    {/* <Link to="/" className="sidebar-logo">
                        <img
                            src="/assets/images/logo.png"
                            alt="site logo"
                            className="light-logo"
                        />
                        <img
                            src="/assets/images/logo-light.png"
                            alt="site logo"
                            className="dark-logo"
                        />
                        <img
                            src="/assets/images/logo-icon.png"
                            alt="site logo"
                            className="logo-icon"
                        />
                    </Link> */}
                    <h5 className="mt-3 mx-3">Cloud ERP</h5>
                </div>
                <div className="sidebar-menu-area">
                    <ul className="sidebar-menu" id="sidebar-menu">
                        <li>
                            <NavLink to="/dashboard" className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }>
                                <Icon icon="solar:home-smile-angle-outline" className="menu-icon" />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/membership" className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }>
                                <Icon icon="lets-icons:order" className="menu-icon" />
                                <span>Memberships</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/installments" className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }>
                                <Icon icon="hugeicons:invoice-04" className="menu-icon" />
                                <span>Installments</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/inventory" className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }>
                                <Icon icon="hugeicons:invoice-04" className="menu-icon" />
                                <span>Inventory</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/stock" className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }>
                                <Icon icon="hugeicons:invoice-04" className="menu-icon" />
                                <span>Stock</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/member-receipts" className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }>
                                <Icon icon="hugeicons:invoice-04" className="menu-icon" />
                                <span>Members Receipts</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dealer-receipts" className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }>
                                <Icon icon="hugeicons:invoice-04" className="menu-icon" />
                                <span>Dealers Receipts</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/stock-receipts" className={(navData) =>
                                navData.isActive ? "active-page" : ""
                            }>
                                <Icon icon="hugeicons:invoice-04" className="menu-icon" />
                                <span>Stock Receipts</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </aside>

            <main className={sidebarActive ? "dashboard-main active" : "dashboard-main"}>
                <div className="navbar-header">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                            <div className="d-flex flex-wrap align-items-center gap-4">
                                <button type="button" className="sidebar-toggle" onClick={sidebarControl}>
                                    {
                                        sidebarActive ? (<Icon
                                            icon="iconoir:arrow-right"
                                            className="icon text-2xl non-active"
                                        />) : (<Icon
                                            icon="heroicons:bars-3-solid"
                                            className="icon text-2xl non-active "
                                        />)
                                    }
                                </button>
                                <button onClick={mobileMenuControl} type="button" className="sidebar-mobile-toggle">
                                    <Icon
                                        icon="heroicons:bars-3-solid"
                                        className="icon"
                                    />
                                </button>
                                <form className="navbar-search">
                                    <input type="text" name="search" placeholder="Search" />
                                    <Icon icon="ion:search-outline" className="icon" />
                                </form>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="d-flex flex-wrap align-items-center gap-3">
                                {/* ThemeToggleButton */}
                                <ThemeToggleButton />
                                <div className="dropdown">
                                    <button
                                        className="d-flex justify-content-center align-items-center rounded-circle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                    >
                                        <img
                                            src="/assets/images/logo.png"
                                            alt="image_user"
                                            className="w-40-px h-40-px object-fit-cover rounded-circle"
                                        />
                                    </button>
                                    <div className="dropdown-menu to-top dropdown-menu-sm">
                                        <div className="py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
                                            <div>
                                                <h6 className="text-lg text-primary-light fw-semibold mb-2">
                                                    Member Name
                                                </h6>
                                                <span className="text-secondary-light fw-medium text-sm">Memebr</span>
                                            </div>
                                            <button type="button" className="hover-text-danger">
                                                <Icon icon="radix-icons:cross-1" className="icon text-xl" />
                                            </button>
                                        </div>
                                        <ul className="to-top-list">
                                            <li>
                                                <Link
                                                    className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"
                                                    to="/settings"
                                                >
                                                    <Icon icon="solar:user-linear" className="icon text-xl" /> My
                                                    Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <button
                                                    className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-danger d-flex align-items-center gap-3"
                                                    onClick={handleLogout}
                                                >
                                                    <Icon icon="lucide:power" className="icon text-xl" /> Log Out
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Profile dropdown end */}

                            </div>
                        </div>
                    </div>
                </div>

                {/* dashboard-main-body */}
                <div className="dashboard-main-body">{children}</div>

                {/* Footer section */}
                <footer className="d-footer">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                            <p className="mb-0">© 2025 Cloud ERP. All Rights Reserved.</p>
                        </div>
                    </div>
                </footer>
            </main>
        </section>
    );
};

export default MasterLayout;
