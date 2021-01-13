import React from 'react';
import Header from '../Components/Header';
import Main from '../Components/Main';
import Footer from '../Components/Footer';

function Home(props){
    console.log("The Home page");
    console.log(props.history);
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