import './App.css';
// Writing Custom DP to verify API working
import dataprovider from './dataprovider';

// This import doesn't work. 
import * as DP from "../node_modules/ra-core/src/dataProvider";

dataprovider.update("Teacher","");

// const DataProvider = DP.useDataProvider();
// DP.UPDATE("Teacher","");
// DP.useUpdate("Teacher","");





function App() {
  return (
    <div className="App">
      <h1>Hii </h1>
    </div>
  );
}

export default App;
