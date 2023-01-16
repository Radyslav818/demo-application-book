import { Routes, Route } from "react-router-dom";
import BookDetails from "./componets/BookDetails";
import BookList from "./componets/BookList";
import Favorites from "./componets/Favorites";
import Footer from "./componets/Footer";
import NavBar from "./componets/NavBar";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
