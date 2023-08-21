import { BrowserRouter } from "react-router-dom";
import WorkSpace from "./nodes/workspace";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <WorkSpace />
    </BrowserRouter>
  );
}

export default App;
