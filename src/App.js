import "./styles.css";
import Form from "./Form";
import Navigation from "./Navigation";
import Option from "./Options";
import Greek from "./Greeks";
import Home from "./Home";
import Hello from "./Hello";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route className="nav-link" path="/" element={<Navigation />}>
          <Route className="nav-link" index element={<Home />} />
          <Route className="nav-link" path="calculator" element={<Form />} />
          <Route className="nav-link" path="option" element={<Option />} />
          <Route className="nav-link" path="greek" element={<Greek />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
