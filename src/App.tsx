import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import StudentLookup from "./student-lookup";
import ComplaintForm from "./complaint-form";
import NotFound from "./not-found";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student" element={<StudentLookup />} />
      <Route path="/complaint" element={<ComplaintForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
