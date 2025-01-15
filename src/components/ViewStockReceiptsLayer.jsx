import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';

const ViewStockReceiptsLayer = () => {
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [picks, setPicks] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleEntriesPerPageChange = (e) => {
        setEntriesPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const filteredPicks = picks.filter((pick) => {
        const matchesSearchTerm =
            pick?.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearchTerm;
    });

    const totalPages = Math.ceil(filteredPicks.length / entriesPerPage);
    const startIndex = (currentPage - 1) * entriesPerPage;
    const currentPicks = filteredPicks.slice(startIndex, startIndex + entriesPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="card">
            <div className="card-header d-flex flex-wrap align-items-center justify-content-between gap-3">
                <div className="d-flex flex-wrap align-items-center gap-3">
                    <div className="d-flex align-items-center gap-2">
                        <span>Show</span>
                        <select
                            className="form-select form-select-sm w-auto"
                            defaultValue="10"
                            onChange={handleEntriesPerPageChange}
                            disabled={loading}
                        >
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                    <div className="icon-field">
                        <input
                            type="text"
                            name="search"
                            className="form-control form-control-sm w-auto"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            disabled={loading}
                        />
                        <span className="icon">
                            <Icon icon="ion:search-outline" />
                        </span>
                    </div>
                </div>
                <div className="d-flex flex-wrap align-items-center gap-3">
                    <Link to="/stock-receipts/add" className="btn btn-sm btn-primary-600">
                        <i className="ri-add-line" /> Add Stock Receipt
                    </Link>
                </div>
            </div>
            <div className="card-body">
                <table className="table bpicked-table mb-0">
                    <thead>
                        <tr>
                            <th scope="col">S.L</th>
                            <th scope="col">Receipt Number</th>
                            <th scope="col">Material</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {loading ? renderSkeletonRows() : currentPicks.map((pick, index) => ( */}
                            <tr>
                                <td>1</td>
                                <td>RC1000</td>
                                <td>Cement</td>
                                <td>200</td>
                                <td>200000</td>
                                <td>
                                    <Link
                                        to="/stock-receipts/view"
                                        className="w-32-px h-32-px me-8 bg-info-focus text-info-main rounded-circle d-inline-flex align-items-center justify-content-center"
                                    >
                                        <Icon icon="mingcute:eye-2-line" />
                                    </Link>
                                </td>
                            </tr>
                        {/* ))} */}
                    </tbody>
                </table>
                {!loading && (
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-24">
                        <span>
                            Showing 1 to 10 of 1 entries
                        </span>
                        <ul className="pagination d-flex flex-wrap align-items-center gap-2 justify-content-center">
                            <li className="page-item">
                                <Link
                                    className="page-link text-secondary-light fw-medium radius-4 bpick-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px me-8 w-32-px bg-base"
                                    to="#"
                                    onClick={() => handlePageChange(currentPage - 1)}
                                >
                                    <Icon icon="ep:d-arrow-left" className="text-xl" />
                                </Link>
                            </li>
                            {[...Array(totalPages)].map((_, index) => (
                                <li key={index} className="page-item">
                                    <Link
                                        className={`page-link ${index + 1 === currentPage ? 'bg-primary-600 text-white' : 'bg-primary-50 text-secondary-light'} fw-medium radius-4 bpick-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px me-8 w-32-px`}
                                        to="#"
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </Link>
                                </li>
                            ))}
                            <li className="page-item">
                                <Link
                                    className="page-link text-secondary-light fw-medium radius-4 bpick-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px me-8 w-32-px bg-base"
                                    to="#"
                                    onClick={() => handlePageChange(currentPage + 1)}
                                >
                                    <Icon icon="ep:d-arrow-right" className="text-xl" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewStockReceiptsLayer;
