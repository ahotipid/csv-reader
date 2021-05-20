import './App.css';
import { useState , useEffect } from 'react';
import { CSVReader } from 'react-papaparse';

import Header from './components/Header';
import DisplayTable from './components/DisplayTable';

function App() {
  const [ jsonData , setJsonData ] = useState([]);
  const [ isUpload , setIsUpload ] = useState(false);
  const handleOnDrop = (data) => {
    setJsonData(data);
  };
  const handleOnError = (err) => {
    console.log(err);
  };
  const handleOnRemoveFile = () => {
    setJsonData([]);
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

      {
        isUpload
        ? <DisplayTable 
        jsonData = {jsonData}
        />
        : <p>Please upload CSV file</p>
      }
      
      
    </div>

  );
}

export default App;
