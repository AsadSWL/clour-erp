import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import axios from 'axios';

const UnitCountOne = () => {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');
    const [error, setError] = useState(null);

    const baseURL = process.env.REACT_APP_BASE_URL;
  
    useEffect(() => {
        axios.get(`${baseURL}/api/admin/dashboard-stats`, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            setStats(response.data.stats);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching orders:', error);
            setLoading(false);
            setError('Error fetching order');
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
        <div className="row row-cols-xxxl-3 row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4">
            <div className="col">
                <div className="card shadow-none border bg-gradient-start-1 h-100">
                    <div className="card-body p-20">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                            <div>
                                <p className="fw-medium text-primary-light mb-1">Received Amount</p>
                                <h3 className="mb-0">1230000</h3>
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
                                    Open Inventory
                                </p>
                                <h3 className="mb-0">1200</h3>
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
            <div className="col">
                <div className="card shadow-none border bg-gradient-start-5 h-100">
                    <div className="card-body p-20">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                            <div>
                                <p className="fw-medium text-primary-light mb-1">Sold Inventory</p>
                                <h3 className="mb-0">800</h3>
                            </div>
                            <div className="w-50-px h-50-px bg-red rounded-circle d-flex justify-content-center align-items-center">
                                <Icon
                                    icon="fa6-solid:file-invoice-dollar"
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

export default UnitCountOne