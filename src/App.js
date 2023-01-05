import logo from "./logo.svg";
import "./App.css";
import Papa from "papaparse";
import records from "./Records";
import Records from "./Records";
import { useState } from "react";
function App() {
  // var results = Papa.parse("Name,Age\nJane,29\nJoe,33");
  // console.log(results);

  const [data, setData] = useState([]);

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        
        setData(results.data);
      },
    });
  };

  return (
    <div className="container">
      <br></br>
      <div class="row">
      <div class="col-sm-4"></div>
      <div class="col-sm-5"><h2>Upload the Csv file to Parse</h2></div>
        
          
      </div>
      <br></br>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-3">
          <input
            type="file"
            name="file"
            accept=".csv"
            onChange={changeHandler}
          />
          
        </div>
      </div>
      <br></br>
      <Records data ={data}/>
    </div>
  );
}

export default App;
