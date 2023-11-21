import React from 'react';
import Home from "./pages/Home"
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <Home />
    </div>
  );
}

export default App;
