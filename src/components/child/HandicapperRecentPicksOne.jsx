import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HandicapperRecentPicksOne = () => {
    const [picks, setPicks] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');
    const [error, setError] = useState(null);

    const baseURL = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        axios.get(`${baseURL}/api/handicapper/picks`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => {
                setPicks(response.data.picks || []);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching picks:', error);
                setLoading(false);
                setError('Error fetching picks');
            });
    }, [token, baseURL]);

    const currentPicks = picks.slice(0, 5);

    const renderSkeletonRows = () => (
        Array.from({ length: 5 }).map((_, index) => (
            <tr key={index}>
                <td><Skeleton width={20} /></td>
                <td><Skeleton width={100} /></td>
                <td><Skeleton width={100} /></td>
                <td><Skeleton width={100} /></td>
                <td><Skeleton width={100} /></td>
                <td><Skeleton width={100} /></td>
                <td><Skeleton width={100} /></td>
            </tr>
        ))
    );

    return (
        <div className="col-xxl-12 col-lg-12">
            <div className="card h-100">
                <div className="card-body p-24">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                        <h6 className="mb-2 fw-bold text-lg mb-0">My Recent Picks</h6>
                        <Link
                            to="/handicapper/picks"
                            className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                        >
                            View All
                            <Icon
                                icon="solar:alt-arrow-right-linear"
                                className="icon"
                            />
                        </Link>
                    </div>
                    <div className="table-responsive scroll-sm">
                        <table className="table bpicked-table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">S.L</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Created Date</th>
                                    <th scope="col">Play Type</th>
                                    <th scope="col">Game</th>
                                    <th scope="col">Analysis</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? renderSkeletonRows() : currentPicks.map((pick, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{pick?.title}</td>
                                        <td>
                                            {new Date(pick?.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </td>
                                        <td>{pick?.playType}</td>
                                        <td>{pick?.match?.homeTeam}<br />-vs-<br /> {pick?.match?.awayTeam}</td>
                                        <td>{pick?.analysis}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HandicapperRecentPicksOne;
