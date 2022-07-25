import React, { useState } from 'react';
import Navigation from "./Nav";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header() {
    const [currentPage, handlePageChange] = useState("About");
    // render method w switch cases to render current page
    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume": 
                return <Resume />;
            
            default: 
            return <About />;
        }
    };

    return (
        <div>
            <nav className='navbar'>
                <div>
                <span className='bg-dark text-light text-center'> Varun Tanna</span>
                </div>
            </nav>
            <Navigation 
            currentPage={currentPage}
            handlePageChange={handlePageChange}
        />
        <main>
            <div>{renderPage(currentPage)}</div>
        </main>
        </div>
        

    );
}

export default Header;