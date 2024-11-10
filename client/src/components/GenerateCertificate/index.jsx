import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '/Ssism.png';

const GenerateCertificate = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedMethod, setSelectedMethod] = useState('');
    const [isDepartmentValid, setIsDepartmentValid] = useState(false);
    const [isMethodValid, setIsMethodValid] = useState(false);

    const handleDepartmentSelect = (e, department) => {
        e.preventDefault();
        setSelectedDepartment(department);
        setIsDepartmentValid(true);
    };

    const handleMethodSelect = (e, method) => {
        e.preventDefault();
        setSelectedMethod(method);
        setIsMethodValid(true);
    }

    return (
        <>
            <div style={{ minHeight: '70vh' }} className="container mb-5 d-flex justify-content-center flex-column">
                <motion.div
                    className="row d-flex justify-content-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-center fs-1" style={{ letterSpacing: "3px" }}>Select A Department</h2>
                    <p className="text-center fs-4" style={{ letterSpacing: "3px" }}>To Get Certificates</p>
                </motion.div>
                <motion.div
                    className="row justify-content-center gap-4 mt-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        onClick={(e) => handleDepartmentSelect(e, "ITEG")}
                        whileHover={{ scale: 1.05 }}
                        initial={{ scale: 1 }}
                        animate={{ scale: selectedDepartment === "ITEG" ? 1.05 : 1 }}
                        style={{
                            cursor: "pointer",
                            backgroundColor: selectedDepartment === "ITEG" ? "#BFE6FF" : "#E2EDFF",
                            transition: "background-color 0.3s ease"
                        }}
                        className="col-lg-3 col-md-4 col-sm-6 col-8 d-flex p-2 flex-column justify-content-center border rounded"
                    >
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={logo} width={120} alt="ITEG logo" />
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <h2 className="fs-2 fw-bold text-center mt-5">ITEG</h2>
                        </div>
                    </motion.div>
                    <motion.div
                        onClick={(e) => handleDepartmentSelect(e, "MEG")}
                        whileHover={{ scale: 1.05 }}
                        initial={{ scale: 1 }}
                        animate={{ scale: selectedDepartment === "MEG" ? 1.05 : 1 }}
                        style={{
                            cursor: "pointer",
                            backgroundColor: selectedDepartment === "MEG" ? "#BFE6FF" : "#E2EDFF",
                            transition: "background-color 0.3s ease"
                        }}
                        className="col-lg-3 col-md-4 col-sm-6 col-8 d-flex p-2 flex-column justify-content-center border rounded"
                    >
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={logo} width={120} alt="MEG logo" />
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <h2 className="fs-2 fw-bold text-center mt-5">MEG</h2>
                        </div>
                    </motion.div>
                    <motion.div
                        onClick={(e) => handleDepartmentSelect(e, "BEG")}
                        whileHover={{ scale: 1.05 }}
                        initial={{ scale: 1 }}
                        animate={{ scale: selectedDepartment === "BEG" ? 1.05 : 1 }}
                        style={{
                            cursor: "pointer",
                            backgroundColor: selectedDepartment === "BEG" ? "#BFE6FF" : "#E2EDFF",
                            transition: "background-color 0.3s ease"
                        }}
                        className="col-lg-3 col-md-4 col-sm-6 col-8 d-flex p-2 flex-column justify-content-center border rounded"
                    >
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={logo} width={120} alt="BEG logo" />
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <h2 className="fs-2 fw-bold text-center mt-5">BEG</h2>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="row d-flex gap-2 flex-wrap justify-content-center mt-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <button
                        onClick={(e) => handleMethodSelect(e, "upload")}
                        className="btn col-lg-3 col-md-5 col-sm-6 col-8 border fw-bold"
                        style={{
                            cursor: "pointer",
                            backgroundColor: selectedMethod === "upload" ? "#333" : "#fff",
                            color: selectedMethod === "upload" ? "#fff" : '#333',
                            transition: "background-color 0.3s ease"
                        }}>By Uploading Excel</button>
                    <button
                        onClick={(e) => handleMethodSelect(e, "form")}
                        className="btn col-lg-3 col-md-5 col-sm-6 col-8 border fw-bold"
                        style={{
                            cursor: "pointer",
                            backgroundColor: selectedMethod === "form" ? "#333" : "#fff",
                            color: selectedMethod === "form" ? "#fff" : "#333",
                            transition: "background-color 0.3s ease"
                        }}>By Filling Form</button>
                </motion.div>
                <motion.div
                    className="row justify-content-center mt-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {(isDepartmentValid && isMethodValid) ? (
                        <Link to={`/generate-certificate/${selectedDepartment.toLowerCase()}/${selectedMethod}`} className="btn col-3 btn-dark">Next</Link>
                    ) : (
                        <button disabled className="btn col-3 btn-dark">
                            Next
                        </button>
                    )}

                </motion.div>

            </div >
        </>
    );
};

export default GenerateCertificate;
