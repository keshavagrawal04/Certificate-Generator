import { useEffect, useState } from "react";
import axios from 'axios';

const Certificate = ({ name, method }) => {
    const [pdfBlob, setPdfBlob] = useState(null);

    const handleEditPdf = async () => {
        try {
            const response = await axios.post('http://localhost:3001/edit-pdf', { name }, {
                responseType: 'blob',
            });
            setPdfBlob(response.data);
        } catch (error) {
            console.error('Error editing PDF:', error);
        }
    };

    const handleDownloadPdf = () => {
        if (pdfBlob) {
            const url = URL.createObjectURL(pdfBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${name}.pdf`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    };

    useEffect(() => {
        handleEditPdf();
    }, []);

    useEffect(() => {
        handleDownloadPdf();
    }, [pdfBlob]);

    return (
        <>
            {pdfBlob && (
                (method === "upload")
                    ? (
                        <div className="col-3">
                            <iframe src={URL.createObjectURL(pdfBlob)} height={280} title="Modified PDF" />
                        </div>
                    )
                    : (
                        <div className="col-6 d-flex justify-content-center">
                            <iframe src={URL.createObjectURL(pdfBlob)} width="100%" height="600px" title="Modified PDF" />
                        </div>
                    )
            )}
        </>
    );
};

export default Certificate;
