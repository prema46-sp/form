import {Routes, Route } from "react-router-dom";
import Form from "./Form";
import Results from "./Results";

function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/results" element={<Results />} />
    </Routes>
 
  );
}

export default App;
