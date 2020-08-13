import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useOnClickOutside } from "./hooks";
import { ThemeProvider } from "styled-components";
import NewCommand from "./pages/addNewCommand";
import FlightPaths from "./pages/flightPaths";
import Home from "./pages/home";
import { theme } from "./style/theme";
import { GlobalStyles } from "./style/globalStyle";
import NavToggler from "./components/Menu/NavToggler";
import Menu from "./components/Menu/Menu";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div ref={node}>
          <NavToggler open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <Router>
          <Switch>
            <Route path="/newcommand">
              <NewCommand />
            </Route>
            <Route path="/flightpaths">
              <FlightPaths />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
