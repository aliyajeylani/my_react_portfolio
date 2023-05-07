import React from 'react';
import '../styles/Header.css';



const styles = {
  heading: {
    textAlign: "left",
    fontFamily: 'Brush Script MT',
    fontSize: '90px'
  }
}

function Header() {
  
  return (

    <header className="header">
      <h1 style={styles.heading}>Aliya Jeylani</h1>
    </header>

  );
}

export default Header;
