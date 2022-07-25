
import React from "react";
// const styles = {
//     card: {
//         margin: 20,
//         background: "#000000",
//     },
//     heading: {
//         background: "#000000",
//         minHeight: 50,
//         lineHeight: 3.5,
//         fontSize: "1.2rem",
//         color: 'white',
//         padding: '0 20px',
//     },
//     content: {
//         padding: 20,
//         color: 'white',
//     },
// };

function Navigation(props) {
    const tabs = ["About", "Portfolio", "Contact", "Resume"];
    return (
        <div className="tabs is-centered">
            <ul className="nav nav-tabs">
                {tabs.map((tab) => (
                    <li
                        className={
                            props.currentPage === tab ? "nav-item is-active" : "nav-item"
                        }
                        key={tab}
                    >
                    <a 
                    href={"#" + tab.toLowerCase()}
                    onClick={() => props.handlePageChange(tab)}
                    className={
                        props.currentPage === tab ? 'nav-link active' : 'nav-link'
                    }
                    >

                    {tab}
                    
                    </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navigation;