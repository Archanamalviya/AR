
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AxiosTest from "./Component/AxiosTest";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
     <Route path="/" exact component={AxiosTest} />
     </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
