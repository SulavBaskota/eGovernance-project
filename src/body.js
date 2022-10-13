import Home from "./home";
import About from "./about";
import Apply from "./apply";
import FAQ from "./faq";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";

const Body = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Container>
  );
};

export default Body;
