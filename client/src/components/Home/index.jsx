import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="container p-5 d-flex justify-content-start flex-column"
                style={{ minHeight: '74vh' }}
            >
                <div className="row pt-5 d-flex justify-content-center">
                    <h2 className="text-center fs-1" style={{ letterSpacing: "3px" }}>Certificate Generator</h2>
                </div>
                <div className="row justify-content-center mt-4">
                    <Link to="/generate-certificate" className="col-12 col-md-5 col-sm-6 col-lg-4 btn btn-dark">Generate Certificate Now</Link>
                </div>
            </motion.div>
        </>
    )
}

export default Home
