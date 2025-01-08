import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage.jsx";
import MainLayout from "./MainLayout.jsx";
import Trash from "./views/Trash.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
