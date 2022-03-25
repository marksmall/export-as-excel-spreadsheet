import React from "react";

import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";

const MIME_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXTENSION = ".xlsx";

const ExportToExcel = ({ data, filename }) => {
  const exportToCsv = (data, filename) => {
    const worksheet1 = XLSX.utils.json_to_sheet(data[0]);
    const worksheet2 = XLSX.utils.json_to_sheet(data[1]);
    const workbook = {
      Sheets: { placeholder: worksheet1, "Star Wars": worksheet2 },
      SheetNames: ["placeholder", "Star Wars"],
    };

    const fileBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const dataBlob = new Blob([fileBuffer], { type: MIME_TYPE });

    FileSaver.saveAs(dataBlob, filename + EXTENSION);
  };

  return (
    <button onClick={() => exportToCsv(data, filename)}>ExportToExcel</button>
  );
};

export default ExportToExcel;
