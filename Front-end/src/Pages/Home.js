import React from 'react';
import Header from '../Components/Header';
import Main from '../Components/Main';
import {Link} from 'react-router-dom';
import Footer from '../Components/Footer';
function Home(){
    return(
        <>
            <header>
                <Header />
            </header>
            <main>
                <Main />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default Home;