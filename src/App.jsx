import Main from "./components/layouts/dashboard/Main";
import Index from "./pages/Index";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Main>
        <Router>
          <Route path="/" Component={Index} exact/>
        </Router>
      </Main>
    </>
  );
};

export default App;
