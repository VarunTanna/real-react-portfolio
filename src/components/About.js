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
function About() {
    return (
        <div style={styles.card}>
        
            <h1 style={styles.heading}>About Me:</h1>
            {/* <img alt=""></img> */}
            <p style={styles.content}>Innovative and deadline-driven Web Developer with one year of experience designing and developing user-centered applications.
            I have always been a critical thinker and problem solver. I recently was able to enhance these skills from working within a team based environment at the UNC Charlotte coding bootcamp. Along with critical thinking, I was able to sharpen many other skills during this time. An area of skills that stand out the most would be front end web development. After entering the bootcamp already having experience in this area, I was able to improve my existing skills including my ability to write cleaner JavaScript, and gaining a better understanding of the fundamentals of front end web development.</p>
        </div>
    )
}

export default About;