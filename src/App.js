import './App.css';
import { useState , useEffect } from 'react';
import { CSVReader } from 'react-papaparse';

import Header from './components/Header';
import DisplayTable from './components/DisplayTable';
import DisplayChart from './components/DisplayChart';

function App() {
  const [ jsonData , setJsonData ] = useState([]);
  const [ isUpload , setIsUpload ] = useState(false);
  const [ displayChart , setDisplayChart ] = useState(false)
  const handleOnDrop = (data) => {
    setJsonData(data);
  };
  const handleOnError = (err) => {
    console.log(err);
  };
  const handleOnRemoveFile = () => {
    setJsonData([]);
  }
  const handleClick = () => {
    setDisplayChart(!displayChart);
  }
  useEffect( () => {
      if (jsonData.length === 0) {
          setIsUpload(false)
      } else {
          setIsUpload(true)
      }
  }, [jsonData]);

  return (
    <div>
      <Header />

      <CSVReader
        onDrop={handleOnDrop}
        onError={handleOnError}
        style={{}}
        config={{header:true}}
        addRemoveButton
        onRemoveFile={handleOnRemoveFile}
      >
        <span>Drop CSV file here or click to upload.</span> 
      </CSVReader>
      <button
      className = "switch"
      onClick = {handleClick}
      >
        Table / Chart
      </button>
      {
        isUpload
        ? displayChart 
          ? <DisplayChart
            jsonData = {jsonData}
            />
          : <DisplayTable 
            jsonData = {jsonData}
            />
        : <p>Please upload CSV file</p>
      }
      
      
    </div>

  );
}

export default App;
