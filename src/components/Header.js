import React from 'react';
import '../styles/Header.css';



const styles = {
  header: {
    // backgroundColor: 'white',
  },
  heading: {
    textAlign: 'center',
    // color: "black",
    fontFamily: 'Brush Script MT',
    fontSize: '90px'
  }
}

function Header() {
  
  return (

    <header style={styles.header} className="header">
      <h1 style={styles.heading}>Aliya Jeylani</h1>
    </header>

  );
}

export default Header;
