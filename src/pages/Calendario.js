import React, { useState } from "react";
import pdf from "../arquivos/Calendario-BH-2022-2.pdf";
import { Document, Page , pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Calendario(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <center>
    <Document
      file={pdf}
      options={{ workerSrc: "../../public/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
      onLoadError={console.error}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
    </center>
  );
}