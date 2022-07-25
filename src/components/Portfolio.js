import React from "react";

const styles = {
    card: {
        margin: 20,
        background: "#000000",
    },
    heading: {
        background: "#000000",
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: "1.2rem",
        color: 'white',
        padding: '0 20px',
    },
    content: {
        padding: 20,
        color: 'white',
    },
};

function Portfolio() {
    return (
        <main>
            <div style={styles.card}>
                <div style={styles.heading}>Trip Planner:</div>
                <div style={styles.content}>
                    <p><a href="https://peaceful-waters-01684.herokuapp.com/">Live Site</a></p>
                    <p><a href="https://github.com/HarrisonHayes/trip-planner">Repository</a></p>
                   
                </div>
                <hr />
                <div style={styles.heading}>Food and Drinks App</div>
                <div style={styles.content}>
                    <p><a href="https://varuntanna.github.io/ProjectOne/">Live Site</a></p>
                    <p><a href="https://github.com/VarunTanna/ProjectOne">Repository</a></p>

                </div>

            </div>
        </main>
    )
}

export default Portfolio;