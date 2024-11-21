import React from "react";
import { HashRouter as Router } from "react-router-dom";

//? Components
import { Navbar, Sidebar} from "./components";
import ConfigRoutes from "./routes/ConfigRoutes";

//? Global Style
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Sidebar />
        <ConfigRoutes />
      </Router>
    </>
  );
};

export default App;
