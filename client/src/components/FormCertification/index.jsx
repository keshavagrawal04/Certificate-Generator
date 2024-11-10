import React, { useState } from 'react'
import Certificate from '../Certificate';

const FormCertification = () => {
    const [name, setName] = useState('');
    const [isInputValid, setIsInputValid] = useState(false);
    const [downloadFlag, setDownloadFlag] = useState(false);

    const generateCertificates = (e) => {
        e.preventDefault();
        setDownloadFlag(true);
    }

    const clear = (e) => {
        setName('');
        isInputValid(false);
        setDownloadFlag(false);
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
        (e.target.value === '')
            ? setIsInputValid(false)
            : setIsInputValid(true)
    }

    return (
        <>
            <div className="container">
                <div className="row align-items-center flex-column">
                    <div className="col mb-2">
                        <h2 className="text-center fw-bold fs-5" style={{ letterSpacing: "3px" }}>By Filling Form</h2>
                    </div>
                    <div className="col-10 col-sm-8 col-md-6 col-lg-3">
                        <input
                            value={name}
                            onChange={handleInputChange}
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                        />
                    </div>
                </div>
                <div className="row mt-2 flex-column p-2 d-flex justify-content-center align-items-center">
                    <div onClick={generateCertificates} className="col-10 d-flex justify-content-center">
                        {
                            (isInputValid)
                                ? <button className="btn btn-dark">Generate Certificates</button>
                                : <button className="btn btn-dark disabled">Generate Certificates</button>
                        }
                    </div>
                    <div className="col-10 d-flex justify-content-center mt-2">
                        <button onClick={clear} className="btn btn-dark">Clear</button>
                    </div>
                </div>
                <div className="row mt-4 d-flex justify-content-center">
                    {
                        (downloadFlag)
                            ? <Certificate method={"form"} name={name} />
                            : ""
                    }
                </div>
            </div>
        </>
    )
}

export default FormCertification
