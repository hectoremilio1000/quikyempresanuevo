import React from "react";
import pdf from "../../../../../../assets/estudios/resultadoPCRCOVIDGUILLERMO.pdf";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useParams } from "react-router-dom";

function VerPrueba() {
  const { id } = useParams();
  return (
    <div
      style={{
        border: "1px solid rgba(0, 0, 0, 0.3)",
        height: "750px",
      }}
    >
      <p className="fs-5">Estudio {id}</p>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
        <Viewer fileUrl={pdf} />;
      </Worker>
    </div>
  );
}

export default VerPrueba;
