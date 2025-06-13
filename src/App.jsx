import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import { analytics, logEvent } from './config/firebase';
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import "./App.css";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Initialize GA4
    ReactGA.initialize('G-QK8LY9BT8X');
    
    // Log page view
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });

    // Track user engagement with Firebase
    logEvent(analytics, 'page_view', {
      page_path: window.location.pathname,
      page_title: document.title
    });
  }, []);

  // Track theme changes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    // Log theme change event
    logEvent(analytics, 'theme_change', {
      theme: newTheme
    });
  };

  // Track PDF downloads
  useEffect(() => {
    const handleResumeDownload = () => {
      window.open("/resume.pdf", "_blank");
      
      // Log download event
      logEvent(analytics, 'resume_download', {
        content_type: 'pdf',
        content_id: 'resume'
      });
    };

    document.addEventListener("resumeDownload", handleResumeDownload);
    return () => {
      document.removeEventListener("resumeDownload", handleResumeDownload);
    };
  }, []);

  return (
    <div className="app" id={`${theme}`}>
      <main>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <About />
        <Projects />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
