import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HomePanner = () => {
    const [banner, setBanner] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');
    const [error, setError] = useState(null);

    const baseURL = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        axios.get(`${baseURL}/api/admin/get-banner`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => {
                setBanner(response.data || {});
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching banner:', error);
                setLoading(false);
                setError('Error fetching banner');
            });
    }, [token, baseURL]);

    return (
        <div className="col-xxl-12 col-lg-12">
            <div className="card h-100">
                <div className="card-header d-flex flex-wrap align-items-center justify-content-between gap-3">
                    <div className="d-flex flex-wrap align-items-center gap-3">
                        <h6 className="mb-2 fw-bold text-lg mb-0">Home Page Banner</h6>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-3">
                        <Link to="/add-banner" className="btn btn-sm btn-primary-600">
                            <i className="ri-add-line" />Update Home Banner
                        </Link>
                    </div>
                </div>
                <div className="card-body p-24">
                    <div className="table-responsive scroll-sm">
                        <table className="table bordered-table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Home Team</th>
                                    <th scope="col">Away Team</th>
                                    <th scope="col">Game Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading
                                    ? Array.from({ length: 1 }).map((_, index) => (
                                        <tr key={index}>
                                            <td><Skeleton width={150} /></td>
                                            <td><Skeleton width={150} /></td>
                                            <td><Skeleton width={150} /></td>
                                        </tr>
                                    ))
                                    : (
                                        <tr>
                                            <td>
                                                <img
                                                    src={baseURL + banner?.home_team_logo}
                                                    alt={banner?.home_team}
                                                    className="flex-shrink-0 me-12 radius-8"
                                                    width={50}
                                                />
                                                {banner?.home_team}
                                            </td>
                                            <td>
                                                <img
                                                    src={baseURL + banner?.away_team_logo}
                                                    alt={banner?.away_team}
                                                    className="flex-shrink-0 me-12 radius-8"
                                                    width={50}
                                                />
                                                {banner?.away_team}
                                            </td>
                                            <td>
                                                {new Date(banner?.game_time).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                })}
                                            </td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePanner;
