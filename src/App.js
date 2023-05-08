import React, {useState} from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Page from './components/Page'

function App() {

  const [pages] = useState([
    {name: 'About Me'}, {name: 'Portfolio'}, {name: 'Contact'}, {name: 'Resume'}

  ])

const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <div>
      <Navbar pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}></Navbar>
      <Header/>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
