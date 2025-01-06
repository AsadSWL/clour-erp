import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import axios from 'axios';

const HandicapperUnitCountOne = () => {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');
    const [error, setError] = useState(null);

    const baseURL = process.env.REACT_APP_BASE_URL;
  
    useEffect(() => {
        axios.get(`${baseURL}/api/handicapper/dashboard-stats`, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            setStats(response.data.stats);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching picks:', error);
            setLoading(false);
            setError('Error fetching picks');
        });
    }, [token, baseURL]);

    const renderValueOrLoader = (value) => {
        if (loading || stats === null) {
            return <Icon
                    icon="svg-spinners:bars-scale"
                    className="text-primary text-2xl mb-0"
                />;
        }
        return value;
    };

    return (
        <div className="row row-cols-xxxl-4 row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-4">
            <div className="col">
                <div className="card shadow-none border bg-gradient-start-1 h-100">
                    <div className="card-body p-20">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                            <div>
                                <p className="fw-medium text-primary-light mb-1">Current Balance</p>
                                <h3 className="mb-0">${error? '0' : renderValueOrLoader(stats?.balance)}</h3>
                            </div>
                            <div className="w-50-px h-50-px bg-cyan rounded-circle d-flex justify-content-center align-items-center">
                                <Icon
                                    icon="fa6-solid:file-invoice-dollar"
                                    className="text-white text-2xl mb-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-none border bg-gradient-start-1 h-100">
                    <div className="card-body p-20">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                            <div>
                                <p className="fw-medium text-primary-light mb-1">Total Picks</p>
                                <h3 className="mb-0">{error? '0' : renderValueOrLoader(stats?.picks)}</h3>
                            </div>
                            <div className="w-50-px h-50-px bg-cyan rounded-circle d-flex justify-content-center align-items-center">
                                <Icon
                                    icon="gridicons:multiple-users"
                                    className="text-white text-2xl mb-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-none border bg-gradient-start-1 h-100">
                    <div className="card-body p-20">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                            <div>
                                <p className="fw-medium text-primary-light mb-1">Total Packages</p>
                                <h3 className="mb-0">{error? '0' : renderValueOrLoader(stats?.packages)}</h3>
                            </div>
                            <div className="w-50-px h-50-px bg-cyan rounded-circle d-flex justify-content-center align-items-center">
                                <Icon
                                    icon="gridicons:multiple-users"
                                    className="text-white text-2xl mb-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card shadow-none border bg-gradient-start-3 h-100">
                    <div className="card-body p-20">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                            <div>
                                <p className="fw-medium text-primary-light mb-1">
                                    Total Subscriptions
                                </p>
                                <h3 className="mb-0">{error? '0' : renderValueOrLoader(stats?.subscriptions)}</h3>
                            </div>
                            <div className="w-50-px h-50-px bg-info rounded-circle d-flex justify-content-center align-items-center">
                                <Icon
                                    icon="fluent:people-20-filled"
                                    className="text-white text-2xl mb-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HandicapperUnitCountOne