const express = require('express');
const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');
const fontkit = require('fontkit');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// app.post('/edit-pdf', async (req, res) => {
//     try {
//         const { name } = req.body;

//         const pdfPath = path.join(__dirname, 'certificate.pdf');
//         const existingPdfBytes = await fs.readFile(pdfPath);


//         const pdfDoc = await PDFDocument.load(existingPdfBytes);
//         const pages = pdfDoc.getPages();
//         const firstPage = pages[0];

//         pdfDoc.registerFontkit(fontkit);
//         const fontBytes = await fs.readFile('./Poppins-Medium.ttf');
//         const customFont = await pdfDoc.embedFont(fontBytes);

//         const newName = name || 'John Doe';
//         firstPage.drawText(newName, {
//             x: 660,
//             y: 215,
//             size: 30,
//             font: customFont,
//             color: rgb(0, 0, 0),
//         });

//         const modifiedPdfPath = path.join(__dirname, `modified_certificate.pdf`);
//         const modifiedPdfBytes = await pdfDoc.save();
//         await fs.writeFile(modifiedPdfPath, modifiedPdfBytes);

//         res.sendFile(modifiedPdfPath, (err) => {
//             if (err) {
//                 console.error('Error sending PDF:', err);
//                 res.status(500).send('Error sending PDF.');
//             } else {
//                 fs.unlink(modifiedPdfPath, (err) => {
//                     if (err) {
//                         console.error('Error deleting PDF:', err);
//                     }
//                 });
//             }
//         });
//     } catch (error) {
//         console.error('Error editing PDF:', error);
//         res.status(500).send('Error editing PDF.');
//     }
// });

app.post('/edit-pdf', async (req, res) => {
    try {
        const { name } = req.body;
        const start = { x: 175, y: 215 };
        const end = { x: 660, y: 215 };

        const pdfPath = path.join(__dirname, `certificate.pdf`);
        const existingPdfBytes = await fs.readFile(pdfPath);

        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];

        pdfDoc.registerFontkit(fontkit);
        const fontBytes = await fs.readFile('./Poppins-Medium.ttf');
        const customFont = await pdfDoc.embedFont(fontBytes);

        const newName = name || 'John Doe';

        const textWidth = customFont.widthOfTextAtSize(newName, 30);
        const centerX = (start.x + end.x - textWidth) / 2;

        firstPage.drawText(newName, {
            x: centerX,
            y: start.y,
            size: 30,
            font: customFont,
            color: rgb(0, 0, 0),
        });

        const modifiedPdfPath = path.join(__dirname, `${name}.pdf`);
        const modifiedPdfBytes = await pdfDoc.save();
        await fs.writeFile(modifiedPdfPath, modifiedPdfBytes);

        res.sendFile(modifiedPdfPath, (err) => {
            if (err) {
                console.error('Error sending PDF:', err);
                res.status(500).send('Error sending PDF.');
            } else {
                fs.unlink(modifiedPdfPath, (err) => {
                    if (err) {
                        console.error('Error deleting PDF:', err);
                    }
                });
            }
        });
    } catch (error) {
        console.error('Error editing PDF:', error);
        res.status(500).send('Error editing PDF.');
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
