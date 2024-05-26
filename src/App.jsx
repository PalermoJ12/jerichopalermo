import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Layout/Home";
import Hero from "./Pages/Hero";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Hero />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}
