import React from 'react';
import { motion } from 'framer-motion';
import ExcelCertification from '../ExcelCertification';
import FormCertification from '../FormCertification';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
    const { department, method } = useParams();

    return (
        <>
            <div style={{ minHeight: '73vh' }} className="container d-flex flex-column">
                <motion.div
                    className="row d-flex py-4 justify-content-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-center fs-1" style={{ letterSpacing: "3px" }}>Get Certification</h2>
                </motion.div>
                <motion.div
                    className="row d-flex gap-2 justify-content-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {
                        (method === "upload")
                            ? <ExcelCertification department={department} method={method} />
                            : <FormCertification department={department} method={method} />
                    }
                </motion.div>
            </div>
        </>
    )
}

export default Dashboard;
