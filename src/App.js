import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Contacts from "./containers/Contacts";
import MapsAndChart from "./containers/MapsAndChart";
import EditCamp from "./components/EditCamp";




function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Contacts} exact />
        <Route path="/mapandchart" component={MapsAndChart} />
        <Route path="/edit/:id" component={EditCamp} />
      </Router>
    </>

  );
}

export default App;
