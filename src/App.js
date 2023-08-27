import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page1 from "./containers/Page1";
import Page3 from "./containers/Page3";
import ChatbotPage from "./components/ChatbotPage";
import "./App.css";




function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Page1} exact />
        <Route path="/chat" component={ChatbotPage} />
        <Route path="/page3" component={Page3} />
      </Router>
    </>

  );
}

export default App;
