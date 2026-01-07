import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Preloader from "./components/ui/Preloader";
import MainPage from "./pages/MainPage";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <Router>
          <div className="font-sans antialiased text-gray-900 bg-[#FDFBF7] min-h-screen overflow-x-hidden">
            <Navbar />
            <MainPage />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
