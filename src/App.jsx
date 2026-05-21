import { useState } from "react";
import MentalTest from "./components/MentalTest.jsx";

function App() {
  const [view, setView] = useState("home");

  if (view === "test") {
    return <MentalTest onHome={() => setView("home")} />;
  }

  return (
    <main className="page">
      <p className="quote">أنت لست المشكلة — المشكلة كيف تدير عقلك</p>
      <button type="button" className="btn btn-primary home-cta" onClick={() => setView("test")}>
        ابدأ الاختبار الذهني
      </button>
    </main>
  );
}

export default App;
