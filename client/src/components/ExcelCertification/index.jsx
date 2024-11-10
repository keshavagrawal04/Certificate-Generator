import React, { useState, useRef } from 'react';
import Certificate from '../Certificate';
import * as XLSX from 'xlsx';

const ExcelCertification = ({ department, method }) => {
    const [excelData, setExcelData] = useState(null);
    const [isFileLoaded, setIsFileLoaded] = useState(false);
    const [downloadFlag, setDownloadFlag] = useState(false);
    const fileInputRef = useRef();

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (evt) => {
            const data = evt.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            setIsFileLoaded(true);
            setExcelData(excelData);
        };

        reader.readAsBinaryString(file);
    };

    const clear = (e) => {
        fileInputRef.current.value = null;
        setIsFileLoaded(false);
        setExcelData(null);
        setDownloadFlag(false);
    }

    const generateCertificates = (e) => {
        e.preventDefault();
        setDownloadFlag(true);
    }

    return (
        <>
            <div className="container">
                <div className="row d-flex align-items-center flex-column">
                    <div className="col mb-2">
                        <h2 className="text-center fw-bold fs-5" style={{ letterSpacing: "2px" }}>By Uploading Excel</h2>
                    </div>
                    <div className="col-10 col-sm-8 col-md-6 col-lg-4">
                        <input ref={fileInputRef} type="file" className="form-control" accept=".xlsx, .xls" onChange={handleFileUpload} />
                    </div>
                </div>
                <div className="row mt-2 flex-column p-2 d-flex justify-content-center align-items-center">
                    <div className="col">
                        <h2 className="text-center fw-bold fs-5" style={{ letterSpacing: "2px" }}>Students Data</h2>
                    </div>
                    <div className="col-5">
                        {excelData && (
                            <div>
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped">
                                        <thead className="thead-dark">
                                            <tr>
                                                {excelData[0].map((cell, cellIndex) => (
                                                    <th key={cellIndex}>{cell}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {excelData.slice(1).map((row, rowIndex) => (
                                                <tr key={rowIndex}>
                                                    {row.map((cell, cellIndex) => (
                                                        <td key={cellIndex}>{cell}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="row mt-2 flex-column p-2 d-flex justify-content-center align-items-center">
                    <div onClick={generateCertificates} className="col-10 d-flex justify-content-center">
                        {
                            (isFileLoaded)
                                ? <button className="btn btn-dark">Generate Certificates</button>
                                : <button className="btn btn-dark disabled">Generate Certificates</button>
                        }
                    </div>
                    <div className="col-10 d-flex justify-content-center mt-2">
                        <button onClick={clear} className="btn btn-dark">Clear</button>
                    </div>
                </div>
                <div className="row mt-4 d-flex justify-content-center">
                    {(downloadFlag)
                        ? excelData && excelData.slice(1).map((data, index) => (
                            <Certificate method={"upload"} key={index} name={data[0]} />
                        ))
                        : ""
                    }
                </div>
            </div>
        </>
    )
}

export default ExcelCertification
