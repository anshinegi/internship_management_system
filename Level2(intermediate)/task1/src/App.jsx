import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InternshipList from "./components/InternshipList";
import Auth from "./components/Auth"; 
import Chat from "./components/Chat";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function App() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/api/internships`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch internships");
        }

        return response.json();
      })
      .then((data) => {
        setInternships(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching internships:", error);
        setError("Unable to load internships. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <Navbar />

      <Hero />

      <Auth />
	
      <Chat />
   
      {loading && (
        <div className="loading">
          <p>Loading internships...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <InternshipList internships={internships} />
      )}
    </div>
  );
}

export default App;