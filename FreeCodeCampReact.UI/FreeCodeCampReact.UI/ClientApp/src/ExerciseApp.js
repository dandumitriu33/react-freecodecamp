import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function ExerciseApp() {
    return (
        <div className="container">
            <Header />
            <MainContent />            
            <Footer />
        </div>
        )
}

export default ExerciseApp