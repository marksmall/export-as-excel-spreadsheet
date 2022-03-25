import { useEffect, useState } from "react";

import ExportToExcel from "./ExportToExcel";

function App() {
  const [data, setData] = useState([]);
  const filename = "myexelspreadsheet";

  useEffect(() => {
    const fetchStarWarsData = async () => {
      const response = await fetch("https://swapi.dev/api/people");
      const newData = await response.json();
      setData((previous) => [...previous, newData.results]);
    };

    fetchStarWarsData();

    const fetchPlaceholderData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const newData = await response.json();
      setData((previous) => [...previous, newData]);
    };

    fetchPlaceholderData();
  }, []);

  return (
    <div>
      <ExportToExcel data={data} filename={filename} />
    </div>
  );
}

export default App;
